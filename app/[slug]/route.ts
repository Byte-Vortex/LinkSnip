import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params; 
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  // Skip processing for "/404" to avoid loop
  if (slug === "404") {
    return new NextResponse("Not Found", { status: 404 });
  }

  // Find the URL in the database
  const { data: url, error: urlError } = await supabase
    .from("urls")
    .select("*")
    .eq("short_slug", slug)
    .single();

  // If URL not found or error, return 404
  if (urlError || !url) {
    return new NextResponse("Not Found", { status: 404 });
  }

  // Get client IP address
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  console.log("IP Address:", ip);

  // Parse user agent for device and browser details
  const userAgent = request.headers.get("user-agent") || "";
  const parser = new UAParser(userAgent);
  const browser = parser.getBrowser().name || "unknown";
  const browserVersion = parser.getBrowser().version || "unknown";
  const os = parser.getOS().name || "unknown";
  const osVersion = parser.getOS().version || "unknown";
  const device = parser.getDevice().type || "desktop";
  const deviceVendor = parser.getDevice().vendor || "unknown";
  const deviceModel = parser.getDevice().model || "unknown";

  // Get referrer
  const referrer = request.headers.get("referer") || "direct";

  // Get language preference
  const language = request.headers.get("accept-language")?.split(",")[0] || "unknown";

  // Get geolocation data
  let geolocation = { country: null, city: null, region: null, latitude: null, longitude: null };
  if (ip !== "unknown") {
    try {
      const response = await fetch(`http://ip-api.com/json/${ip}?fields=country,city,region,lat,lon`);
      if (response.ok) {
        const data = await response.json();
        geolocation = {
          country: data.country || null,
          city: data.city || null,
          region: data.region || null,
          latitude: data.lat || null,
          longitude: data.lon || null,
        };
      }
    } catch (error) {
      console.error("Geolocation fetch failed:", error);
    }
  }

  // Track click with enhanced data
  const clickData = {
    url_id: url.id,
    ip_address: ip,
    browser,
    browser_version: browserVersion,
    os,
    os_version: osVersion,
    device_type: device,
    device_vendor: deviceVendor,
    device_model: deviceModel,
    referrer,
    language,
    country: geolocation.country,
    city: geolocation.city,
    region: geolocation.region,
    latitude: geolocation.latitude,
    longitude: geolocation.longitude,
    timestamp: new Date().toISOString(),
  };

  console.log("Click Data:", clickData);

  // Insert click data into Supabase
  const { error: clickError } = await supabase.from("clicks").insert(clickData);
  if (clickError) {
    console.error("Failed to track click:", clickError);
  }

  // Redirect to the original URL
  return NextResponse.redirect(url.original_url);
}
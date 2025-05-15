"use server"

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { nanoid } from "nanoid"
import { revalidatePath } from "next/cache"

// Function to validate URL
function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch (error) {
    return false
  }
}

// Function to generate a random slug
function generateSlug(): string {
  return nanoid(8)
}

// Function to shorten a URL
export async function shortenUrl({
  originalUrl,
  customSlug,
  title,
}: {
  originalUrl: string
  customSlug?: string
  title?: string
}) {
  try {
    // Validate URL
    if (!isValidUrl(originalUrl)) {
      return { error: "Invalid URL. Please enter a valid URL." }
    }

    const supabase = createServerComponentClient({ cookies })

    // Get current user
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // Generate slug or use custom slug
    const slug = customSlug || generateSlug()

    // Check if slug already exists
    if (customSlug) {
      const { data: existingUrl } = await supabase.from("urls").select("id").eq("short_slug", slug).single()

      if (existingUrl) {
        return { error: "Custom slug already exists. Please choose another one." }
      }
    }

    // Insert URL into database
    const { data, error } = await supabase
      .from("urls")
      .insert({
        original_url: originalUrl,
        short_slug: slug,
        user_id: session?.user.id,
        title,
        is_custom_slug: !!customSlug,
      })
      .select()

    if (error) {
      console.error("Error shortening URL:", error)
      return { error: "Failed to shorten URL. Please try again." }
    }

    // Get base URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const shortUrl = `${baseUrl}${slug}`

    revalidatePath("/dashboard")

    return { shortUrl, slug, error: null }
  } catch (error) {
    console.error("Error shortening URL:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

// Function to delete a URL
export async function deleteUrl(urlId: string) {
  try {
    const supabase = createServerComponentClient({ cookies })

    // Get current user
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      return { error: "You must be logged in to delete a URL." }
    }

    // Check if URL belongs to user
    const { data: url } = await supabase.from("urls").select("user_id").eq("id", urlId).single()

    if (!url) {
      return { error: "URL not found." }
    }

    if (url.user_id !== session.user.id) {
      return { error: "You do not have permission to delete this URL." }
    }

    // Delete URL
    const { error } = await supabase.from("urls").delete().eq("id", urlId)

    if (error) {
      console.error("Error deleting URL:", error)
      return { error: "Failed to delete URL. Please try again." }
    }

    revalidatePath("/dashboard")

    return { success: true, error: null }
  } catch (error) {
    console.error("Error deleting URL:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

// Function to get URL analytics
export async function getUrlAnalytics(urlId: string) {
  try {
    const supabase = createServerComponentClient({ cookies })

    // Get current user
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      return { error: "You must be logged in to view analytics." }
    }

    // Check if URL belongs to user
    const { data: url } = await supabase.from("urls").select("user_id").eq("id", urlId).single()

    if (!url) {
      return { error: "URL not found." }
    }

    if (url.user_id !== session.user.id) {
      return { error: "You do not have permission to view this URL's analytics." }
    }

    // Get analytics data
    const { data, error } = await supabase
      .from("clicks")
      .select("*")
      .eq("url_id", urlId)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error getting URL analytics:", error)
      return { error: "Failed to get URL analytics. Please try again." }
    }

    return { data, error: null }
  } catch (error) {
    console.error("Error getting URL analytics:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

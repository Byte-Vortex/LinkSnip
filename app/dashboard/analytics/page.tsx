import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"

export default async function AnalyticsPage() {
  const supabase = createServerComponentClient({ cookies: cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data: urlsWithAnalytics } = await supabase
    .from("url_analytics")
    .select("*")
    .eq("user_id", session?.user.id)
    .order("created_at", { ascending: false })


  return (
    <div className="flex flex-col px-4 lg:px-10 py-5 gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
      </div>
      <AnalyticsDashboard urlsWithAnalytics={urlsWithAnalytics || []} />
    </div>
  )
}

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { UrlList } from "@/components/url-list"
import { CreateUrlForm } from "@/components/create-url-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Fetch user's URLs
  const { data: urls } = await supabase
    .from("urls")
    .select("*")
    .eq("user_id", session?.user.id)
    .order("created_at", { ascending: false })

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">URLs</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total URLs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{urls?.length || 0}</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-full md:col-span-1">
          <CardHeader>
            <CardTitle>Create New URL</CardTitle>
            <CardDescription>Shorten a new URL and track its performance</CardDescription>
          </CardHeader>
          <CardContent>
            <CreateUrlForm />
          </CardContent>
        </Card>
        <Card className="col-span-full md:col-span-2">
          <CardHeader>
            <CardTitle>Your URLs</CardTitle>
            <CardDescription>Manage and track all your shortened URLs</CardDescription>
          </CardHeader>
          <CardContent>
            <UrlList initialUrls={urls || []} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

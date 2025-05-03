import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { AdminDashboard } from "@/components/admin-dashboard"

export default async function AdminPage() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/login")
  }

  // Check if user is admin
  const { data: user } = await supabase.from("users").select("role").eq("id", session.user.id).single()

  if (!user || user.role !== "admin") {
    redirect("/dashboard")
  }

  // Fetch all URLs
  const { data: urls } = await supabase.from("urls").select("*").order("created_at", { ascending: false })

  // Fetch all users
  const { data: users } = await supabase.from("users").select("*").order("created_at", { ascending: false })

  // Get system stats
  const { count: urlCount } = await supabase.from("urls").select("*", { count: "exact", head: true })
  const { count: userCount } = await supabase.from("users").select("*", { count: "exact", head: true })
  const { count: clickCount } = await supabase.from("clicks").select("*", { count: "exact", head: true })

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
      </div>
      <AdminDashboard
        urls={urls || []}
        users={users || []}
        stats={{
          urlCount: urlCount || 0,
          userCount: userCount || 0,
          clickCount: clickCount || 0,
        }}
      />
    </div>
  )
}

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { QrCodeGenerator } from "@/components/qr-code-generator"

export default async function QrCodesPage() {
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
        <h2 className="text-3xl font-bold tracking-tight">QR Codes</h2>
      </div>
      <QrCodeGenerator urls={urls || []} />
    </div>
  )
}

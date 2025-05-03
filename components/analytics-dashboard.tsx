"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UrlAnalyticsChart } from "@/components/url-analytics-chart"
import { UrlAnalyticsDetails } from "@/components/url-analytics-details"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

interface UrlAnalytics {
  url_id: string
  short_slug: string
  original_url: string
  created_at: string
  total_clicks: number
  unique_clicks: number
  last_clicked_at: string | null
}

interface AnalyticsDashboardProps {
  urlsWithAnalytics: UrlAnalytics[]
}

export function AnalyticsDashboard({ urlsWithAnalytics }: AnalyticsDashboardProps) {
  const [selectedUrlId, setSelectedUrlId] = useState<string | null>(
    urlsWithAnalytics.length > 0 ? urlsWithAnalytics[0].url_id : null,
  )
  const [clickData, setClickData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClientComponentClient()

  useEffect(() => {
    if (selectedUrlId) {
      fetchClickData(selectedUrlId)
    }
  }, [selectedUrlId])

  const fetchClickData = async (urlId: string) => {
    setIsLoading(true)

    try {
      const { data, error } = await supabase
        .from("clicks")
        .select("*")
        .eq("url_id", urlId)
        .order("created_at", { ascending: true })

      if (error) {
        console.error("Error fetching click data:", error)
        return
      }

      setClickData(data || [])
    } catch (error) {
      console.error("Error fetching click data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const selectedUrl = urlsWithAnalytics.find((url) => url.url_id === selectedUrlId)

  return (
    <div className="space-y-4">
      {urlsWithAnalytics.length === 0 ? (
        <Card>
          <CardContent className="py-10 text-center">
            <p className="text-muted-foreground">No URLs found. Create some URLs to see analytics.</p>
          </CardContent>
        </Card>
      ) : (
        <>
          <Card>
            <CardHeader>
              <CardTitle>URL Analytics</CardTitle>
              <CardDescription>Select a URL to view detailed analytics</CardDescription>
              <Select value={selectedUrlId || ""} onValueChange={(value) => setSelectedUrlId(value)}>
                <SelectTrigger className="w-full md:w-[300px]">
                  <SelectValue placeholder="Select a URL" />
                </SelectTrigger>
                <SelectContent>
                  {urlsWithAnalytics.map((url) => (
                    <SelectItem key={url.url_id} value={url.url_id}>
                      {url.short_slug} ({url.total_clicks} clicks)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardHeader>
          </Card>

          {selectedUrl && (
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{selectedUrl.total_clicks}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Unique Clicks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{selectedUrl.unique_clicks}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Last Clicked</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {selectedUrl.last_clicked_at
                          ? new Date(selectedUrl.last_clicked_at).toLocaleDateString()
                          : "Never"}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Created</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{new Date(selectedUrl.created_at).toLocaleDateString()}</div>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Click Activity</CardTitle>
                    <CardDescription>Click activity over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <UrlAnalyticsChart clickData={clickData} isLoading={isLoading} />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="details">
                <Card>
                  <CardHeader>
                    <CardTitle>Click Details</CardTitle>
                    <CardDescription>Detailed information about each click</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UrlAnalyticsDetails clickData={clickData} isLoading={isLoading} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </>
      )}
    </div>
  )
}

"use client"

import { useMemo } from "react"
import { ChartContainer } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import { Skeleton } from "@/components/ui/skeleton"

interface UrlAnalyticsChartProps {
  clickData: any[]
  isLoading: boolean
}

export function UrlAnalyticsChart({ clickData, isLoading }: UrlAnalyticsChartProps) {
  const chartData = useMemo(() => {
    if (!clickData.length) return []

    // Group clicks by day
    const clicksByDay = clickData.reduce(
      (acc, click) => {
        const date = new Date(click.created_at).toLocaleDateString()

        if (!acc[date]) {
          acc[date] = { date, clicks: 0 }
        }

        acc[date].clicks++

        return acc
      },
      {} as Record<string, { date: string; clicks: number }>,
    )

    // Convert to array and sort by date
    return Object.values(clicksByDay).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [clickData])

  if (isLoading) {
    return <Skeleton className="h-full w-full" />
  }

  if (chartData.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">No click data available</p>
      </div>
    )
  }

  return (
    <ChartContainer
      config={{
        clicks: {
          label: "Clicks",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="clicks" stroke="var(--color-clicks)" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

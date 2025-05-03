"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Monitor, Smartphone, Tablet } from "lucide-react"

interface UrlAnalyticsDetailsProps {
  clickData: any[]
  isLoading: boolean
}

export function UrlAnalyticsDetails({ clickData, isLoading }: UrlAnalyticsDetailsProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = clickData.filter((click) => {
    const searchTermLower = searchTerm.toLowerCase()
    return (
      click.browser?.toLowerCase().includes(searchTermLower) ||
      click.os?.toLowerCase().includes(searchTermLower) ||
      click.country?.toLowerCase().includes(searchTermLower) ||
      click.city?.toLowerCase().includes(searchTermLower) ||
      click.referrer?.toLowerCase().includes(searchTermLower)
    )
  })

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType?.toLowerCase()) {
      case "mobile":
        return <Smartphone className="h-4 w-4" />
      case "tablet":
        return <Tablet className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  if (clickData.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-muted-foreground">No click data available</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search by browser, OS, location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>Browser</TableHead>
              <TableHead>OS</TableHead>
              <TableHead className="hidden md:table-cell">Location</TableHead>
              <TableHead className="hidden lg:table-cell">Referrer</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((click) => (
              <TableRow key={click.id}>
                <TableCell>{new Date(click.created_at).toLocaleString()}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getDeviceIcon(click.device_type)}
                    <span>{click.device_type || "Desktop"}</span>
                  </div>
                </TableCell>
                <TableCell>{click.browser || "Unknown"}</TableCell>
                <TableCell>{click.os || "Unknown"}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {click.city && click.country ? `${click.city}, ${click.country}` : "Unknown"}
                </TableCell>
                <TableCell className="hidden lg:table-cell truncate max-w-[200px]">
                  {click.referrer || "Direct"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

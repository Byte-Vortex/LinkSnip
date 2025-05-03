"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { QRCodeSVG } from "qrcode.react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"

interface Url {
  id: string
  short_slug: string
  original_url: string
  title?: string
}

interface QrCodeGeneratorProps {
  urls: Url[]
}

export function QrCodeGenerator({ urls }: QrCodeGeneratorProps) {
  const [selectedUrlId, setSelectedUrlId] = useState<string>(urls.length > 0 ? urls[0].id : "")
  const [qrSize, setQrSize] = useState<number>(200)
  const [fgColor, setFgColor] = useState<string>("#000000")
  const [bgColor, setBgColor] = useState<string>("#FFFFFF")
  const [includeMargin, setIncludeMargin] = useState<boolean>(true)
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<"L" | "M" | "Q" | "H">("M")

  const baseUrl = typeof window !== "undefined" ? `${window.location.origin}/` : ""
  const selectedUrl = urls.find((url) => url.id === selectedUrlId)
  const qrValue = selectedUrl ? `${baseUrl}${selectedUrl.short_slug}` : ""

  const downloadQrCode = () => {
    const canvas = document.getElementById("qr-code-canvas") as HTMLCanvasElement
    if (!canvas) return

    const pngUrl = canvas.toDataURL("image/png")
    const downloadLink = document.createElement("a")
    downloadLink.href = pngUrl
    downloadLink.download = `qrcode-${selectedUrl?.short_slug || "link"}.png`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>QR Code Generator</CardTitle>
          <CardDescription>Generate QR codes for your shortened URLs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url-select">Select URL</Label>
              <Select value={selectedUrlId} onValueChange={setSelectedUrlId}>
                <SelectTrigger id="url-select">
                  <SelectValue placeholder="Select a URL" />
                </SelectTrigger>
                <SelectContent>
                  {urls.map((url) => (
                    <SelectItem key={url.id} value={url.id}>
                      {url.title || url.short_slug}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
              <TabsContent value="basic" className="space-y-4">
                <div className="space-y-2">
                  <Label>QR Code Size</Label>
                  <Slider
                    value={[qrSize]}
                    min={100}
                    max={400}
                    step={10}
                    onValueChange={(value) => setQrSize(value[0])}
                  />
                  <div className="text-xs text-muted-foreground text-right">{qrSize}px</div>
                </div>
              </TabsContent>
              <TabsContent value="advanced" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fg-color">Foreground Color</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="fg-color"
                      type="color"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="w-12 h-8 p-1"
                    />
                    <Input
                      type="text"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bg-color">Background Color</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="bg-color"
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-12 h-8 p-1"
                    />
                    <Input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Error Correction Level</Label>
                  <Select
                    value={errorCorrectionLevel}
                    onValueChange={(value) => setErrorCorrectionLevel(value as "L" | "M" | "Q" | "H")}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="L">Low (7%)</SelectItem>
                      <SelectItem value="M">Medium (15%)</SelectItem>
                      <SelectItem value="Q">Quartile (25%)</SelectItem>
                      <SelectItem value="H">High (30%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            {selectedUrl
              ? `QR code for ${selectedUrl.title || selectedUrl.short_slug}`
              : "Select a URL to generate a QR code"}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-4">
          {selectedUrl ? (
            <>
              <div className="border p-4 rounded-lg bg-white">
                <QRCodeSVG
                  id="qr-code-canvas"
                  value={qrValue}
                  size={qrSize}
                  fgColor={fgColor}
                  bgColor={bgColor}
                  level={errorCorrectionLevel}
                  includeMargin={includeMargin}
                />
              </div>
              <Button onClick={downloadQrCode}>Download PNG</Button>
            </>
          ) : (
            <div className="text-center py-12 text-muted-foreground">Select a URL to generate a QR code</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

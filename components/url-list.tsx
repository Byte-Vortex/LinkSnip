"use client"

import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Copy, ExternalLink, QrCode, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { QRCodeSVG } from "qrcode.react"
import { deleteUrl } from "@/lib/actions/url-actions"

interface Url {
  id: string
  short_slug: string
  original_url: string
  title?: string
  created_at: string
}

interface UrlListProps {
  initialUrls: Url[]
}

export function UrlList({ initialUrls }: UrlListProps) {
  const [urls, setUrls] = useState<Url[]>(initialUrls)
  const [qrDialogOpen, setQrDialogOpen] = useState(false)
  const [selectedUrl, setSelectedUrl] = useState<Url | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const { toast } = useToast()
  const supabase = createClientComponentClient()

  const baseUrl = typeof window !== "undefined" ? `${window.location.origin}/` : ""

  useEffect(() => {
    setUrls(initialUrls)
  }, [initialUrls])

  const handleCopyUrl = (slug: string) => {
    navigator.clipboard.writeText(`${baseUrl}${slug}`)
    toast({
      title: "Copied!",
      description: "URL copied to clipboard",
    })
  }

  const handleShowQrCode = (url: Url) => {
    setSelectedUrl(url)
    setQrDialogOpen(true)
  }

  const handleDeleteClick = (url: Url) => {
    setSelectedUrl(url)
    setDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = async () => {
    if (!selectedUrl) return

    setIsDeleting(true)

    try {
      const result = await deleteUrl(selectedUrl.id)

      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
        return
      }

      setUrls(urls.filter((url) => url.id !== selectedUrl.id))

      toast({
        title: "Success",
        description: "URL deleted successfully",
      })

      setDeleteDialogOpen(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete URL",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
    }
  }

  const downloadQrCode = () => {
    if (!selectedUrl) return

    const canvas = document.getElementById("qr-code-canvas") as HTMLCanvasElement
    if (!canvas) return

    const pngUrl = canvas.toDataURL("image/png")
    const downloadLink = document.createElement("a")
    downloadLink.href = pngUrl
    downloadLink.download = `qrcode-${selectedUrl.short_slug}.png`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <div>
      {urls.length === 0 ? (
        <div className="text-center py-6">
          <p className="text-muted-foreground">No URLs yet. Create your first shortened URL!</p>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Short URL</TableHead>
                <TableHead className="hidden md:table-cell">Original URL</TableHead>
                <TableHead className="hidden md:table-cell">Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {urls.map((url) => (
                <TableRow key={url.id}>
                  <TableCell className="font-medium">
                    <a
                      href={`/${url.short_slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:underline"
                    >
                      {url.title ? url.title : url.short_slug}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </TableCell>
                  <TableCell className="hidden md:table-cell truncate max-w-[200px]">{url.original_url}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {new Date(url.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopyUrl(url.short_slug)}
                        title="Copy URL"
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy URL</span>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleShowQrCode(url)} title="Show QR Code">
                        <QrCode className="h-4 w-4" />
                        <span className="sr-only">Show QR Code</span>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(url)} title="Delete URL">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete URL</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* QR Code Dialog */}
      <Dialog open={qrDialogOpen} onOpenChange={setQrDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>QR Code</DialogTitle>
            <DialogDescription>Scan this QR code to access your shortened URL</DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            {selectedUrl && (
              <QRCodeSVG
                id="qr-code-canvas"
                value={`${baseUrl}${selectedUrl.short_slug}`}
                size={200}
                includeMargin
                level="H"
              />
            )}
          </div>
          <DialogFooter>
            <Button onClick={downloadQrCode}>Download PNG</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete URL</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this URL? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteConfirm} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

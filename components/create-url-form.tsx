"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { shortenUrl } from "@/lib/actions/url-actions"

export function CreateUrlForm() {
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")
  const [customSlug, setCustomSlug] = useState("")
  const [isCustomSlug, setIsCustomSlug] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL",
        variant: "destructive",
      })
      return
    }

    try {
      setIsLoading(true)

      const result = await shortenUrl({
        originalUrl: url,
        title: title || undefined,
        customSlug: isCustomSlug ? customSlug : undefined,
      })

      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
        return
      }

      toast({
        title: "Success!",
        description: "Your URL has been shortened.",
      })

      // Copy to clipboard
      navigator.clipboard.writeText(result.shortUrl)

      // Reset form
      setUrl("")
      setTitle("")
      setCustomSlug("")
      setIsCustomSlug(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to shorten URL. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          placeholder="https://example.com/very-long-url"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="title">Title (optional)</Label>
        <Input id="title" placeholder="My awesome link" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="custom-slug"
          checked={isCustomSlug}
          onCheckedChange={(checked) => setIsCustomSlug(checked === true)}
        />
        <Label htmlFor="custom-slug" className="text-sm font-normal">
          Use custom slug
        </Label>
      </div>
      {isCustomSlug && (
        <div className="space-y-2">
          <Label htmlFor="custom-slug-input">Custom slug</Label>
          <Input
            id="custom-slug-input"
            placeholder="my-custom-slug"
            value={customSlug}
            onChange={(e) => setCustomSlug(e.target.value)}
          />
        </div>
      )}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Short URL"}
      </Button>
    </form>
  )
}

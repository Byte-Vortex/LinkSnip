"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface AdminDashboardProps {
  urls: any[]
  users: any[]
  stats: {
    urlCount: number
    userCount: number
    clickCount: number
  }
}

export function AdminDashboard({ urls, users, stats }: AdminDashboardProps) {
  const [deleteUrlDialogOpen, setDeleteUrlDialogOpen] = useState(false)
  const [deleteUserDialogOpen, setDeleteUserDialogOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const { toast } = useToast()
  const supabase = createClientComponentClient()

  const handleDeleteUrl = async () => {
    if (!selectedItem) return

    setIsDeleting(true)

    try {
      const { error } = await supabase.from("urls").delete().eq("id", selectedItem.id)

      if (error) {
        toast({
          title: "Error",
          description: "Failed to delete URL",
          variant: "destructive",
        })
        return
      }

      toast({
        title: "Success",
        description: "URL deleted successfully",
      })

      // Remove from list
      urls = urls.filter((url) => url.id !== selectedItem.id)
      setDeleteUrlDialogOpen(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
    }
  }

  const handleDeleteUser = async () => {
    if (!selectedItem) return

    setIsDeleting(true)

    try {
      // In a real app, you would use admin functions to delete users
      // This is just a placeholder
      const { error } = await supabase.from("users").delete().eq("id", selectedItem.id)

      if (error) {
        toast({
          title: "Error",
          description: "Failed to delete user",
          variant: "destructive",
        })
        return
      }

      toast({
        title: "Success",
        description: "User deleted successfully",
      })

      // Remove from list
      users = users.filter((user) => user.id !== selectedItem.id)
      setDeleteUserDialogOpen(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total URLs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.urlCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.userCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.clickCount}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="urls" className="space-y-4">
        <TabsList>
          <TabsTrigger value="urls">URLs</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>
        <TabsContent value="urls" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All URLs</CardTitle>
              <CardDescription>Manage all URLs in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Short URL</TableHead>
                      <TableHead className="hidden md:table-cell">Original URL</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {urls.map((url) => (
                      <TableRow key={url.id}>
                        <TableCell className="font-medium">{url.short_slug}</TableCell>
                        <TableCell className="hidden md:table-cell truncate max-w-[200px]">
                          {url.original_url}
                        </TableCell>
                        <TableCell>{url.user_id}</TableCell>
                        <TableCell>{new Date(url.created_at).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              setSelectedItem(url)
                              setDeleteUrlDialogOpen(true)
                            }}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Users</CardTitle>
              <CardDescription>Manage all users in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.email}</TableCell>
                        <TableCell>{user.role || "user"}</TableCell>
                        <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              setSelectedItem(user)
                              setDeleteUserDialogOpen(true)
                            }}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Delete URL Dialog */}
      <Dialog open={deleteUrlDialogOpen} onOpenChange={setDeleteUrlDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete URL</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this URL? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteUrlDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteUrl} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete User Dialog */}
      <Dialog open={deleteUserDialogOpen} onOpenChange={setDeleteUserDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete User</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this user? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteUserDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteUser} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

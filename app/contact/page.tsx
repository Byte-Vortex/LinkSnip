"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // In a real application, you would send this data to your server
    // This is just a simulation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });

    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Mail className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Email</CardTitle>
                    <CardDescription>
                      Our friendly team is here to help.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:support@linksnip.com"
                    className="text-primary hover:underline"
                  >
                    support@linksnip.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Live Chat</CardTitle>
                    <CardDescription>
                      Available Monday to Friday, 9am-5pm.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Phone className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Phone</CardTitle>
                    <CardDescription>
                      Call us for immediate assistance.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+1234567890"
                    className="text-primary hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Subject of your message"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

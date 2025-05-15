"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const supabase = createClientComponentClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      setIsSuccess(true);
      toast({
        title: "Success",
        description: "Check your email for a password reset link.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="mx-auto w-full max-w-md space-y-6 p-8 border rounded-lg shadow-sm">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Reset Password</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email address and we'll send you a link to reset your
              password
            </p>
          </div>
          {isSuccess ? (
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                <h2 className="font-medium text-green-800 dark:text-green-300">
                  Email sent!
                </h2>
                <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                  Check your inbox for a password reset link.
                </p>
              </div>
              <Button asChild className="w-full">
                <Link href="/login">Back to Login</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
              <div className="text-center text-sm">
                <Link
                  href="/login"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Back to Login
                </Link>
              </div>
            </form>
          )}
        </div>
      </main>

    </div>
  );
}

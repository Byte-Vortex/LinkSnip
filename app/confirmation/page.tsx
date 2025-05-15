import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function ConfirmationPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Get the type of confirmation from the URL query parameters
  const type = searchParams.type || "generic";
  const email = searchParams.email || "";

  // Define different confirmation messages based on the type
  const confirmationContent = {
    email: {
      title: "Email Verified",
      description:
        "Your email has been successfully verified. You can now log in to your account.",
      buttonText: "Log In",
      buttonLink: "/login",
    },
    signup: {
      title: "Registration Complete",
      description:
        "Your account has been created. Please check your email to verify your account.",
      buttonText: "Go to Login",
      buttonLink: "/login",
    },
    password: {
      title: "Password Reset",
      description:
        "Your password has been successfully reset. You can now log in with your new password.",
      buttonText: "Log In",
      buttonLink: "/login",
    },
    generic: {
      title: "Action Completed",
      description: "Your request has been processed successfully.",
      buttonText: "Go to Homepage",
      buttonLink: "/",
    },
  };

  // Get the appropriate content based on the type
  const content =
    confirmationContent[type as keyof typeof confirmationContent] ||
    confirmationContent.generic;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="mx-auto w-full max-w-md space-y-6 p-8 border rounded-lg shadow-sm text-center">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{content.title}</h1>
            <p className="text-gray-500 dark:text-gray-400">
              {content.description}
              {email && <span className="block font-medium mt-2">{email}</span>}
            </p>
          </div>
          <Button asChild className="w-full">
            <Link href={content.buttonLink}>{content.buttonText}</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

export const metadata = {
  title: "Terms of Service - LinkSnip URL Shortener",
  description: "Terms of service for using the LinkSnip URL shortener service",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Terms of Service
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Last updated: May 1, 2023
              </p>
            </div>

            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">1. Introduction</h2>
                <p>
                  Welcome to LinkSnip ("we," "our," or "us"). By accessing or
                  using our URL shortening service, you agree to be bound by
                  these Terms of Service ("Terms"). If you do not agree to these
                  Terms, please do not use our service.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">
                  2. Description of Service
                </h2>
                <p>
                  LinkSnip provides URL shortening services that allow users to
                  create shortened links to web content. Our service includes
                  features such as custom slugs, QR code generation, and
                  analytics tracking.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">3. User Accounts</h2>
                <p>
                  To access certain features of our service, you may be required
                  to create an account. You are responsible for maintaining the
                  confidentiality of your account information and for all
                  activities that occur under your account. You agree to notify
                  us immediately of any unauthorized use of your account.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">4. Acceptable Use</h2>
                <p>You agree not to use our service to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Distribute malware, viruses, or other harmful code</li>
                  <li>
                    Engage in phishing, spamming, or fraudulent activities
                  </li>
                  <li>
                    Distribute content that is illegal, obscene, defamatory, or
                    otherwise objectionable
                  </li>
                  <li>Interfere with or disrupt our service or servers</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">
                  5. Intellectual Property
                </h2>
                <p>
                  All content, features, and functionality of our service,
                  including but not limited to text, graphics, logos, and
                  software, are owned by LinkSnip and are protected by
                  copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">6. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your account and
                  access to our service at our sole discretion, without notice,
                  for conduct that we believe violates these Terms or is harmful
                  to other users, us, or third parties, or for any other reason.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">
                  7. Disclaimer of Warranties
                </h2>
                <p>
                  Our service is provided "as is" and "as available" without any
                  warranties of any kind, either express or implied. We do not
                  warrant that our service will be uninterrupted, timely,
                  secure, or error-free.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">
                  8. Limitation of Liability
                </h2>
                <p>
                  In no event shall LinkSnip be liable for any indirect,
                  incidental, special, consequential, or punitive damages,
                  including but not limited to loss of profits, data, use, or
                  goodwill, arising out of or in connection with these Terms or
                  the use of our service.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We
                  will provide notice of any material changes by posting the
                  updated Terms on our website. Your continued use of our
                  service after such changes constitutes your acceptance of the
                  new Terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">
                  10. Contact Information
                </h2>
                <p>
                  If you have any questions about these Terms, please contact us
                  at{" "}
                  <a
                    href="mailto:support@linksnip.com"
                    className="text-primary hover:underline"
                  >
                    support@linksnip.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

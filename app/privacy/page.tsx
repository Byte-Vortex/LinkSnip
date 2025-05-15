export const metadata = {
  title: "Privacy Policy - LinkSnip URL Shortener",
  description: "Privacy policy for the LinkSnip URL shortener service",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Last updated: May 1, 2023
              </p>
            </div>

            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">1. Introduction</h2>
                <p>
                  At LinkSnip, we respect your privacy and are committed to
                  protecting your personal data. This Privacy Policy explains
                  how we collect, use, and safeguard your information when you
                  use our URL shortening service.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">
                  2. Information We Collect
                </h2>
                <p>We collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Account Information:</strong> When you create an
                    account, we collect your email address and password.
                  </li>
                  <li>
                    <strong>URL Data:</strong> We collect the original URLs that
                    you shorten and the custom slugs you create.
                  </li>
                  <li>
                    <strong>Analytics Data:</strong> We collect data about
                    clicks on your shortened URLs, including IP addresses,
                    browser types, operating systems, device types, referrers,
                    and geographic locations.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> We collect information about
                    how you interact with our service, including the pages you
                    visit and the features you use.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">
                  3. How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain our service</li>
                  <li>Improve and personalize your experience</li>
                  <li>
                    Generate analytics and statistics about URL performance
                  </li>
                  <li>Communicate with you about our service</li>
                  <li>Detect and prevent fraud and abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">
                  4. Data Sharing and Disclosure
                </h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who
                    help us provide and improve our service
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> When required by law or
                    to protect our rights
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, acquisition, or sale of assets
                  </li>
                </ul>
                <p>
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized access,
                  alteration, disclosure, or destruction. However, no method of
                  transmission over the Internet or electronic storage is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">6. Your Rights</h2>
                <p>
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>
                    Restrict or object to the processing of your personal data
                  </li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">
                  7. Cookies and Tracking Technologies
                </h2>
                <p>
                  We use cookies and similar tracking technologies to track
                  activity on our service and hold certain information. You can
                  instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">
                  8. Children's Privacy
                </h2>
                <p>
                  Our service is not intended for children under the age of 13.
                  We do not knowingly collect personal information from children
                  under 13. If you are a parent or guardian and you are aware
                  that your child has provided us with personal information,
                  please contact us.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">
                  9. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at{" "}
                  <a
                    href="mailto:privacy@linksnip.com"
                    className="text-primary hover:underline"
                  >
                    privacy@linksnip.com
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PricingFAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Find answers to common questions about our pricing and features.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Can I change plans at any time?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can upgrade or downgrade your plan at any time. When
                upgrading, the new features will be available immediately. When
                downgrading, the changes will take effect at the start of your
                next billing cycle.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What happens when I reach my link limit?
              </AccordionTrigger>
              <AccordionContent>
                When you reach your link limit, you'll need to upgrade to a
                higher plan to create more links. Existing links will continue
                to work, but you won't be able to create new ones until you
                upgrade or delete some existing links.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do you offer discounts for annual billing?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 20% discount when you choose annual billing.
                This option is available during signup or from your account
                settings page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards (Visa, Mastercard, American
                Express), PayPal, and bank transfers for annual plans.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I get a refund if I'm not satisfied?
              </AccordionTrigger>
              <AccordionContent>
                We offer a 14-day money-back guarantee for all paid plans. If
                you're not satisfied with our service, contact our support team
                within 14 days of your purchase for a full refund.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Do you offer custom enterprise plans?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer custom enterprise plans for organizations with
                specific needs. Contact our sales team to discuss your
                requirements and get a tailored solution.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

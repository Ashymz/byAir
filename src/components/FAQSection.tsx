import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useSupportSheet } from "@/components/SupportContactSheet";

const faqs = [
  { q: "How do I join waitlist?", a: "You can join the waitlist by downloading the app from the Play Store or App Store and signing up with your email address." },
  { q: "What operators will be available?", a: "We partner with major Nigerian airlines including Air Peace, Aero Contractors, Dana Air, and Green Africa Airways." },
  { q: "How much does it cost?", a: "ByAir is free to download and use. You only pay for the flights you book at competitive market prices." },
  { q: "Can I cancel or refund?", a: "Yes, cancellation and refund policies depend on the airline and fare type. You can view the details before booking." },
  { q: "Does using OVU attract extra cost?", a: "No, there are no hidden fees or additional charges for using the ByAir platform." },
  { q: "How early can I make reservations?", a: "You can book flights up to 6 months in advance, depending on airline availability." },
  { q: "How do I contact support?", a: "Use Contact us in the app or on this site, or email support@byair.app. We typically reply within one business day." },
  { q: "Can I cancel or refund?", a: "Yes, cancellation and refund policies depend on the airline and fare type. You can view the details before booking." },
  { q: "What operators will be available?", a: "We partner with major Nigerian airlines including Air Peace, Aero Contractors, Dana Air, and Green Africa Airways." },
];

const FAQSection = () => {
  const { openSupport } = useSupportSheet();
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 bg-[#F0F0F0] rounded-3xl border border-border/30 px-8 py-12 md:px-12 md:py-16">
          <div className="space-y-5 md:pr-4">
            <h2 className="text-3xl md:text-4xl font-light font-sans text-foreground leading-tight">
              Frequently Asked
              <br />
              Questions
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Can&apos;t find the answer you are looking for?
            </p>
            <Button
              type="button"
              size="sm"
              className="rounded-lg border-0 bg-[#2B2B2B] px-5 text-white hover:bg-[#2B2B2B]/90"
              onClick={openSupport}
            >
              Contact us
            </Button>
          </div>

          <div className="md:col-span-2">
            <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-border/50 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-sm font-normal hover:no-underline py-5">
                    {i + 1}. {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

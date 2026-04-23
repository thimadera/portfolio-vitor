import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { ExternalLink } from "lucide-react";
import { Faq } from "../types";
import { SectionHeading } from "./Layout";

interface FAQProps {
  section: {
    subtitle: string;
    title: string;
    description: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  faqs: Faq[];
  whatsapp: string;
}

export function FAQ({ section, faqs, whatsapp }: FAQProps) {
  return (
    <section className="py-32 md:py-48 px-6 bg-white">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <SectionHeading
              subtitle={section.subtitle}
              title={section.title}
              description={section.description}
            />
            <div className="p-8 md:p-12 rounded-[40px] md:rounded-[50px] bg-brand-cream border border-brand-orange/10">
              <h4 className="text-xl md:text-2xl font-display mb-6">
                {section.ctaTitle}
              </h4>
              <p className="text-neutral-500 mb-8 text-sm md:text-base">
                {section.ctaDescription}
              </p>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-grid grid-flow-col items-center gap-4 text-brand-orange font-black text-[10px] tracking-widest uppercase group"
              >
                {section.ctaButton}
                <ExternalLink
                  size={14}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Accordion className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-neutral-100 rounded-[32px] md:rounded-[40px] px-6 md:px-10 bg-brand-cream/30 data-[state=open]:bg-brand-cream transition-all duration-500 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-8 md:py-10 group">
                    <span className="text-lg md:text-2xl font-display font-bold leading-tight text-left group-data-[state=open]:text-brand-orange transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 md:pb-10 text-neutral-500 leading-relaxed text-sm md:text-lg text-pretty">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

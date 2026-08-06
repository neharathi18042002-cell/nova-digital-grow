import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  UtensilsCrossed,
  Dumbbell,
  Stethoscope,
  GraduationCap,
  BedDouble,
  Rocket,
  Paintbrush,
  MessageCircle,
  MapPin,
  Search,
  Wrench,
} from "lucide-react";
import { SectionHeading, PrimaryLink } from "@/components/ui-kit";
import { site } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Website Design & Development | Nova Digital Studio" },
      {
        name: "description",
        content:
          "Business, restaurant, gym, clinic, school and hotel websites, landing pages, redesigns, WhatsApp integration, Google Maps, SEO and maintenance.",
      },
      { property: "og:title", content: "Services — Website Design & Development" },
      {
        property: "og:description",
        content: "Everything you need to launch and maintain a premium business website.",
      },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Briefcase, title: "Business Websites" },
  { icon: UtensilsCrossed, title: "Restaurant Websites" },
  { icon: Dumbbell, title: "Gym Websites" },
  { icon: Stethoscope, title: "Clinic Websites" },
  { icon: GraduationCap, title: "School Websites" },
  { icon: BedDouble, title: "Hotel Websites" },
  { icon: Rocket, title: "Landing Pages" },
  { icon: Paintbrush, title: "Website Redesign" },
  { icon: MessageCircle, title: "WhatsApp Integration" },
  { icon: MapPin, title: "Google Maps" },
  { icon: Search, title: "SEO Ready" },
  { icon: Wrench, title: "Website Maintenance" },
];

function Services() {
  return (
    <>
      <section className="hero-surface">
        <div className="shell py-14 md:py-20">
          <SectionHeading
            eyebrow="Services"
            title="Everything your business needs online."
            subtitle="One studio for design, development, integrations and ongoing care."
          />
        </div>
      </section>

      <section className="shell py-12 md:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary/25 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="min-w-0 text-base font-semibold">{title}</h2>
            </div>
          ))}
        </div>

        <div className="ink-surface mt-14 rounded-[2rem] px-6 py-12 text-center md:px-12">
          <h2 className="mx-auto max-w-xl text-3xl text-background text-balance md:text-4xl">
            Tell us your business — we'll design a free demo.
          </h2>
          <div className="mt-8 flex justify-center">
            <PrimaryLink href={site.whatsapp}>
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </PrimaryLink>
          </div>
        </div>
      </section>
    </>
  );
}

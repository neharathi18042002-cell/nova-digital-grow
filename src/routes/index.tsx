import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  ArrowRight,
  Gauge,
  Smartphone,
  Sparkles,
  Search,
  ShieldCheck,
  Layers,
  MapPin,
  Dumbbell,
  Users,
  Images,
  Calculator,
  Wand2,
} from "lucide-react";
import heroDevices from "@/assets/hero-devices.jpg";
import demoGym from "@/assets/demo-gym.jpg";
import office from "@/assets/office.jpg";
import { Eyebrow, GhostLink, PrimaryLink, SectionHeading } from "@/components/ui-kit";
import { FeaturedProjects } from "@/components/featured-projects";
import { site, whatsappFor } from "@/lib/site";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Digital Studio — Premium Websites That Grow Businesses" },
      {
        name: "description",
        content:
          "Modern, mobile-first business websites designed to build trust and generate more customers. Get a free website demo on WhatsApp.",
      },
      { property: "og:title", content: "Nova Digital Studio — Premium Websites That Grow Businesses" },
      {
        property: "og:description",
        content: "Modern, mobile-first business websites designed to build trust and generate more customers. Get a free website demo on WhatsApp.",
      },
    ],
  }),
  component: Home,
});

const gymFeatures = [
  { icon: Users, label: "Membership" },
  { icon: Dumbbell, label: "Trainer Profiles" },
  { icon: Images, label: "Gallery" },
  { icon: Calculator, label: "BMI Calculator" },
  { icon: MapPin, label: "Google Maps" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Wand2, label: "Premium Animations" },
];

const why = [
  { icon: Gauge, label: "Fast Loading" },
  { icon: Smartphone, label: "Mobile Responsive" },
  { icon: Sparkles, label: "Premium UI" },
  { icon: Search, label: "SEO Ready" },
  { icon: MessageCircle, label: "WhatsApp Ready" },
  { icon: ShieldCheck, label: "Secure" },
  { icon: Layers, label: "Modern Design" },
];

const process = [
  { step: "01", title: "Free Consultation", text: "We understand your business and goals." },
  { step: "02", title: "Demo Design", text: "You see a real demo before anything else." },
  { step: "03", title: "Development", text: "Fast, responsive and SEO-ready build." },
  { step: "04", title: "Launch", text: "Live, secure and ready for customers." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-surface relative overflow-hidden">
        <div className="shell grid gap-12 pt-14 pb-16 md:pt-24 md:pb-24 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="rise">
            <Eyebrow>Digital Studio · Est. 2026</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
              Premium Websites That <span className="text-primary">Grow Businesses.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We design modern, mobile-first business websites that help companies build trust and generate more
              customers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href={site.whatsapp}>
                Get Free Website Demo <ArrowRight className="h-4 w-4" />
              </PrimaryLink>
              <GhostLink href={site.whatsapp}>
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </GhostLink>
            </div>
          </div>

          <div className="rise relative" style={{ animationDelay: "120ms" }}>
            <div className="float-slow overflow-hidden rounded-3xl bg-card shadow-lift">
              <img
                src={heroDevices}
                alt="MacBook and iPhone showing a premium business website designed by Nova Digital Studio"
                width={1408}
                height={1008}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      {/* Featured demo */}
      <section className="shell py-10 md:py-16">
        <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-soft">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="order-2 p-7 md:p-12 lg:order-1">

              <Eyebrow>Featured Demo</Eyebrow>
              <h2 className="mt-5 text-3xl md:text-4xl">🏋 Gold Fitness Gym</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                A complete gym experience — built mobile-first and ready to convert visitors into members.
              </p>
              <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {gymFeatures.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 rounded-xl bg-sand px-3.5 py-2.5 text-sm font-medium"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-primary" />
                    <span className="min-w-0 truncate">{label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]"
                >
                  View Portfolio <ArrowRight className="h-4 w-4" />
                </Link>
                <GhostLink href={whatsappFor("Gold Fitness Gym demo")}>Request Similar Website</GhostLink>
              </div>
            </div>
            <div className="order-1 bg-sand p-6 md:p-10 lg:order-2">
              <img
                src={demoGym}
                alt="Gold Fitness Gym website shown on a laptop and mobile phone"
                width={1408}
                height={1008}
                loading="lazy"
                className="h-full w-full rounded-2xl object-contain shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="shell py-10 md:py-16">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for trust, speed and conversions."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {why.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group rounded-2xl border border-border/70 bg-card p-5 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/25 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-sm font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="shell py-12 md:py-20">
        <div className="ink-surface overflow-hidden rounded-[2rem] p-7 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-secondary/40 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-secondary uppercase">
                Our Process
              </span>
              <h2 className="mt-5 text-3xl text-background md:text-4xl">
                Four simple steps to your new website.
              </h2>
              <div className="mt-7 overflow-hidden rounded-2xl">
                <img
                  src={office}
                  alt="Nova Digital Studio designers working in the studio"
                  width={1408}
                  height={912}
                  loading="lazy"
                  className="h-52 w-full object-cover md:h-64"
                />
              </div>
            </div>
            <ol className="grid gap-3">
              {process.map((p) => (
                <li
                  key={p.step}
                  className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 rounded-2xl bg-background/95 p-5"
                >
                  <span className="font-display text-lg font-semibold text-accent">{p.step}</span>
                  <div className="min-w-0">
                    <p className="font-semibold">{p.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="shell pb-4">
        <div className="rounded-[2rem] border border-secondary/50 bg-secondary/20 px-6 py-12 text-center md:px-12 md:py-16">
          <h2 className="mx-auto max-w-xl text-3xl text-balance md:text-4xl">
            Get your free website demo today.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryLink href={site.whatsapp}>
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </PrimaryLink>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition-colors hover:bg-background"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { useMemo, useState, Fragment } from "react";
import { ExternalLink, ArrowUpRight, MessageCircle } from "lucide-react";
import cafe from "@/assets/p-cafe.jpg";
import gym from "@/assets/p-gym.jpg";
import dental from "@/assets/p-dental.jpg";
import hotel from "@/assets/p-hotel.jpg";
import restaurant from "@/assets/p-restaurant.jpg";
import realestate from "@/assets/p-realestate.jpg";
import { Eyebrow } from "@/components/ui-kit";
import { whatsappFor, site } from "@/lib/site";

type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

const filters = ["All", "Business", "Restaurant", "Gym", "Portfolio", "Landing Page", "E-commerce"] as const;

const projects: Project[] = [
  {
    slug: "gold-fitness",
    name: "Gold Fitness Gym",
    category: "Gym",
    description: "Memberships, trainer profiles and a BMI calculator built to convert walk-ins.",
    image: gym,
  },
  {
    slug: "amber-cafe",
    name: "Amber Cafe",
    category: "Restaurant",
    description: "Warm menu pages, gallery and one-tap table enquiries on WhatsApp.",
    image: cafe,
  },
  {
    slug: "brightsmile-dental",
    name: "BrightSmile Dental",
    category: "Business",
    description: "Treatment pages, doctor credibility and instant appointment booking.",
    image: dental,
  },
  {
    slug: "saffron-dine",
    name: "Saffron Dine",
    category: "E-commerce",
    description: "Digital menu with online ordering, offers and reservation checkout.",
    image: restaurant,
  },
  {
    slug: "aurora-stays",
    name: "Aurora Stays",
    category: "Landing Page",
    description: "A single high-converting page for rooms, amenities and direct bookings.",
    image: hotel,
  },
  {
    slug: "prime-estates",
    name: "Prime Estates",
    category: "Portfolio",
    description: "Property showcase with map search and high-intent lead capture.",
    image: realestate,
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-soft backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
      <a
        href={whatsappFor(`${p.name} (${p.category})`)}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`${p.name} — request a similar website`}
      />
      <div className="overflow-hidden bg-sand">
        <img
          src={p.image}
          alt={`${p.name} website shown in laptop and mobile mockups`}
          width={1000}
          height={800}
          loading="lazy"
          decoding="async"
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] md:h-72"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit rounded-full border border-secondary/60 bg-secondary/20 px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-primary uppercase">
          {p.category}
        </span>
        <h3 className="mt-3 text-xl leading-tight">{p.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
        <div className="relative z-20 mt-5 flex flex-wrap gap-2.5">
          <a
            href={whatsappFor(`Live preview of ${p.name}`)}
            target="_blank"
            rel="noreferrer"
            className="glow-cta inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <ExternalLink className="h-4 w-4" /> Live Preview
          </a>
          <a
            href={whatsappFor(`${p.name} project details`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary/20"
          >
            View Project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

function InlineCta() {
  return (
    <div className="flex flex-col justify-center rounded-3xl border border-secondary/50 bg-secondary/20 p-7 text-center shadow-soft">
      <h3 className="text-2xl leading-tight text-balance">Want a website like these?</h3>
      <div className="mt-5 flex justify-center">
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="glow-cta inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          <MessageCircle className="h-4 w-4" /> Get Free Consultation
        </a>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  const [active, setActive] = useState<string>("All");

  const list = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section className="shell py-12 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Featured Projects</Eyebrow>
        <h2 className="mt-4 text-3xl leading-[1.12] text-balance md:text-5xl">Real Projects. Real Results.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          We build high-converting websites designed to generate leads and grow businesses.
        </p>
      </div>

      <div className="mt-8 -mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`shrink-0 snap-start rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
              active === f
                ? "border-primary bg-primary text-primary-foreground shadow-soft"
                : "border-border bg-card/70 text-muted-foreground hover:border-primary/40 hover:text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          No projects in this category yet — ask us for a custom demo.
        </p>
      ) : (
        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-3">
          {list.map((p, i) => (
            <Fragment key={p.slug}>
              <div className="w-[85%] shrink-0 snap-center md:w-auto">
                <ProjectCard p={p} />
              </div>
              {(i + 1) % 3 === 0 && i !== list.length - 1 && (
                <div className="w-[85%] shrink-0 snap-center md:col-span-2 md:w-auto lg:col-span-3">
                  <InlineCta />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      )}

      <div className="mt-8 md:mt-10">
        <InlineCta />
      </div>
    </section>
  );
}

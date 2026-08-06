import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SectionHeading, PrimaryLink } from "@/components/ui-kit";
import { categories } from "@/lib/portfolio";
import { site, whatsappFor } from "@/lib/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Website Demos by Nova Digital Studio" },
      {
        name: "description",
        content:
          "Premium website demos for cafes, gyms, clinics, salons, hotels, schools, restaurants and real estate businesses.",
      },
      { property: "og:title", content: "Portfolio — Website Demos by Nova Digital Studio" },
      {
        property: "og:description",
        content: "Explore premium mobile-first website designs across eight business categories.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <section className="hero-surface">
        <div className="shell py-14 md:py-20">
          <SectionHeading
            eyebrow="Portfolio"
            title="Website designs for every kind of business."
            subtitle="Pick the category closest to your business and we'll send a tailored demo on WhatsApp."
          />
        </div>
      </section>

      <section className="shell py-12 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft transition-transform hover:-translate-y-1.5"
            >
              <div className="overflow-hidden bg-sand">
                <img
                  src={c.image}
                  alt={`${c.title} website design mockup on laptop and phone`}
                  width={1000}
                  height={800}
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl">
                  <span aria-hidden="true">{c.emoji}</span> {c.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                <a
                  href={whatsappFor(`${c.title} website`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-secondary/25 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4" /> Request Similar Website
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-secondary/50 bg-secondary/20 px-6 py-12 text-center">
          <h2 className="mx-auto max-w-lg text-3xl text-balance">Don't see your industry? We still build it.</h2>
          <div className="mt-7 flex justify-center">
            <PrimaryLink href={site.whatsapp}>
              <MessageCircle className="h-4 w-4" /> Get Free Website Demo
            </PrimaryLink>
          </div>
        </div>
      </section>
    </>
  );
}

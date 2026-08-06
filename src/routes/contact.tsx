import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MessageCircle, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/ui-kit";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Get a Free Website Demo | Nova Digital Studio" },
      {
        name: "description",
        content:
          "Talk to Nova Digital Studio on WhatsApp, call or email us for a free premium website demo for your business.",
      },
      { property: "og:title", content: "Contact Nova Digital Studio" },
      { property: "og:description", content: "Get a free website demo on WhatsApp today." },
    ],
  }),
  component: Contact;
});

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = `Hi Nova Digital Studio!%0AName: ${data.get("name")}%0ABusiness: ${data.get(
      "business",
    )}%0APhone: ${data.get("phone")}%0AMessage: ${data.get("message")}`;
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
    setSent(true);
  }

  return (
    <>
      <section className="hero-surface">
        <div className="shell py-14 md:py-20">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build your website."
            subtitle="Send a message and we'll reply on WhatsApp with a free demo."
          />
        </div>
      </section>

      <section className="shell py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft md:p-8"
          >
            <div className="grid gap-4">
              {[
                { name: "name", label: "Your Name", type: "text", placeholder: "Aarav Sharma" },
                { name: "business", label: "Business Type", type: "text", placeholder: "Gym, Cafe, Clinic…" },
                { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+91 98765 43210" },
              ].map((f) => (
                <label key={f.name} className="grid gap-2">
                  <span className="text-sm font-semibold">{f.label}</span>
                  <input
                    required
                    name={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </label>
              ))}
              <label className="grid gap-2">
                <span className="text-sm font-semibold">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us what you need…"
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" /> Send on WhatsApp
              </button>
              {sent && (
                <p className="text-center text-sm font-medium text-primary">
                  Thanks! Your WhatsApp chat should be open — we'll reply shortly.
                </p>
              )}
            </div>
          </form>

          <div className="grid content-start gap-4">
            {[
              { href: site.whatsapp, Icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly" },
              { href: site.phoneHref, Icon: Phone, label: "Call", value: site.phone },
              { href: site.emailHref, Icon: Mail, label: "Email", value: site.email },
            ].map(({ href, Icon, label, value }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary/25 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{label}</span>
                  <span className="block truncate text-sm text-muted-foreground">{value}</span>
                </span>
              </a>
            ))}

            <div className="flex gap-2">
              {[
                { href: site.instagram, Icon: Instagram, label: "Instagram" },
                { href: site.facebook, Icon: Facebook, label: "Facebook" },
                { href: site.linkedin, Icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-12 flex-1 place-items-center rounded-2xl border border-border/70 bg-card text-muted-foreground shadow-soft transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-border/70 shadow-soft">
              <iframe
                title="Nova Digital Studio location on Google Maps"
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

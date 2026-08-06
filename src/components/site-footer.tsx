import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-sand">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" width={36} height={36} loading="lazy" className="h-8 w-8" />
            <span className="font-display text-lg font-semibold">Nova Digital Studio</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{site.tagline}</p>
          <div className="mt-5 flex gap-2">
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
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Pages</h3>
          <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Contact</h3>
          <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
            <li>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4 shrink-0" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="inline-flex min-w-0 items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4 shrink-0" /> <span className="truncate">{site.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="shell py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nova Digital Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

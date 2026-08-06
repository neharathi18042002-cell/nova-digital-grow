export const site = {
  name: "Nova Digital Studio",
  tagline: "Premium Websites That Grow Businesses",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "https://wa.me/919876543210?text=Hi%20Nova%20Digital%20Studio%2C%20I%27d%20like%20a%20free%20website%20demo",
  email: "hello@novadigitalstudio.com",
  emailHref: "mailto:hello@novadigitalstudio.com",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  mapEmbed:
    "https://www.google.com/maps?q=Connaught+Place,+New+Delhi&output=embed",
};

export function whatsappFor(subject: string) {
  return `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hi Nova Digital Studio, I'd like a similar website: ${subject}`,
  )}`;
}

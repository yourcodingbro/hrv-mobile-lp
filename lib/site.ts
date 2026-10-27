const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : undefined);

// Never ship localhost as a canonical/sitemap URL: production builds must name their domain.
if (!configuredUrl && process.env.NODE_ENV === "production") {
  throw new Error(
    "Set NEXT_PUBLIC_SITE_URL to the production origin (see .env.example)."
  );
}

export const siteUrl = (configuredUrl ?? "http://localhost:3000").replace(
  /\/$/,
  ""
);

export const site = {
  name: "HRV Mobile Trade",
  title: "HRV Mobile Trade - Prémium Megoldások",
  description:
    "Az HRV Mobile Trade Kft. megbízható és korszerű megoldásokat kínál a mindennapi élethez. Prémium laptopok, mobiltelefonok és háztartási gépek forgalmazása.",
  ogDescription:
    "Megbízható és korszerű megoldások a mindennapi élethez. Prémium laptopok, mobilok és háztartási gépek.",
  phone: { display: "06 20 427 8496", href: "tel:+36204278496" },
  email: { display: "info@etinvest.hu", href: "mailto:info@etinvest.hu" },
};

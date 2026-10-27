import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.ogDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hu"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${jakarta.variable} antialiased`}
    >
      <head>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans">
        {/* Covers the first viewport only, like the original's absolutely positioned grid. */}
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none absolute inset-0 z-10"
        />
        {children}
      </body>
    </html>
  );
}

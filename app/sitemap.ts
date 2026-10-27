import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

// One URL only: section anchors are not separate pages. No lastModified (no reliable date).
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl }]
}

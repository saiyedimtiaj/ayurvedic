import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.ayurvedicbyadivashi.com", lastModified: new Date() },
  ];
}

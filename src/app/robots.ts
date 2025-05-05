import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/favicon.ico"],
        disallow: ["/admin", "/auth/sign-in"],
      },
    ],
    sitemap: "https://www.ayurvedicbyadivashi.com/sitemap.xml",
  };
}

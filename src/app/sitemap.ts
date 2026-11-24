import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://my-portofolio-five-black.vercel.app";
  const routes = ["", "/about", "/experience", "/projects", "/skills", "/certifications", "/intellectual-property", "/contact"];

  return routes.map((r) => ({
    url: `${siteUrl}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}

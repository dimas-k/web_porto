import type { Metadata } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://my-portofolio-five-black.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dimas Arya Ramadhan Setiawan | Portfolio",
    template: "%s | Dimas Arya Ramadhan Setiawan",
  },
  description:
    "Portfolio resmi Dimas Arya Ramadhan Setiawan, Full Stack Developer & Machine Learning Enthusiast. Lihat proyek, skill, dan pengalaman di bidang web development, AI, dan deep learning.",
  keywords: [
    "Dimas Arya Ramadhan Setiawan",
    "Dimas Arya",
    "portfolio Dimas Arya",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Web Developer Indonesia",
  ],
  authors: [{ name: "Dimas Arya Ramadhan Setiawan", url: siteUrl }],
  creator: "Dimas Arya Ramadhan Setiawan",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Dimas Arya Ramadhan Setiawan's Portfolio",
    title: "Dimas Arya Ramadhan Setiawan | Portfolio",
    description:
      "Full Stack Developer & Machine Learning Enthusiast. Lihat proyek, skill, dan pengalaman Dimas Arya Ramadhan Setiawan.",
    images: [
      { url: "/images/gambar-dimas.jpg", width: 800, height: 800, alt: "Dimas Arya Ramadhan Setiawan" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimas Arya Ramadhan Setiawan | Portfolio",
    description:
      "Full Stack Developer & Machine Learning Enthusiast. Lihat proyek, skill, dan pengalaman Dimas Arya Ramadhan Setiawan.",
    images: ["/images/gambar-dimas.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// Set tema sebelum paint supaya tidak flash
const themeScript = `
try {
  var s = localStorage.getItem('theme');
  var d = s ? s === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (d) document.documentElement.classList.add('dark');
} catch (e) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dimas Arya Ramadhan Setiawan",
    url: siteUrl,
    image: `${siteUrl}/images/gambar-dimas.jpg`,
    jobTitle: "Full Stack Developer & Machine Learning Enthusiast",
    sameAs: [
      "https://github.com/dimas-k",
      "https://www.linkedin.com/in/dimas-arya-ramadhan-setiawan-4544362aa/",
      "https://www.instagram.com/dimasarya880/",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        <div className="bg-stage" aria-hidden>
          <span className="blob blob-1" />
          <span className="blob blob-2" />
          <span className="blob blob-3" />
        </div>
        {children}
      </body>
    </html>
  );
}

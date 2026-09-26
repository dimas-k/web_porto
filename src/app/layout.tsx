import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteUrl = "https://my-portofolio-five-black.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dimas Arya Ramadhan Setiawan | Portfolio",
    template: "%s | Dimas Arya Ramadhan Setiawan",
  },
  description:
    "Portfolio Dimas Arya Ramadhan Setiawan, lulusan D4 Rekayasa Perangkat Lunak Politeknik Negeri Indramayu, Software Engineer & ML/AI Engineer. Lihat proyek, skill, pengalaman, dan riset deep learning di bidang web development dan AI.",
  keywords: [
    "Dimas Arya Ramadhan Setiawan",
    "Dimas Arya",
    "portfolio Dimas Arya",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Web Developer Indonesia",
    "AI Researcher Indonesia",
    "Deep Learning Researcher Indonesia",
    "Next.js Developer",
    "React Developer",
    "Flutter Developer",
    "Tailwind CSS Developer",
    "Laravel Developer",
    "FastAPI Developer",
    "Node.js Developer",
    "PHP Developer",
    "Python Developer",
    "PostgreSQL Developer",
    "MySQL Developer",
    "Supabase Developer",
    "TensorFlow Developer",
    "PyTorch Developer",
    "NLP Developer",
    "Applied LLMs Developer",
    "Politeknik Negeri Indramayu Alumni",
    "Indramayu Software Engineer",
    "Indramayu ML/AI Engineer",
    "Indramayu Web Developer",
    "Indramayu AI Researcher",
    "Indramayu Deep Learning Researcher",
    "Software Engineer Indonesia",
    "ML/AI Engineer Indonesia",
    "Web Developer Indonesia",
    "AI Researcher Indonesia",
    "Deep Learning Researcher Indonesia",
    "Politeknik Negeri Indramayu",
    
  ],
  authors: [{ name: "Dimas Arya Ramadhan Setiawan", url: siteUrl }],
  creator: "Dimas Arya Ramadhan Setiawan",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Dimas Arya Ramadhan Setiawan's Portfolio",
    title: "Dimas Arya Ramadhan Setiawan | Portfolio",
    description:
      "Full Stack Developer & ML/AI Engineer. Lihat proyek, skill, dan pengalaman Dimas Arya Ramadhan Setiawan.",
    images: [
      {
        url: "/images/gambar-dimas.jpg",
        width: 800,
        height: 800,
        alt: "Dimas Arya Ramadhan Setiawan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimas Arya Ramadhan Setiawan | Portfolio",
    description:
      "Full Stack Developer & ML/AI Engineer. Lihat proyek, skill, dan pengalaman Dimas Arya Ramadhan Setiawan.",
    images: ["/images/gambar-dimas.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dimas Arya Ramadhan Setiawan",
    url: siteUrl,
    image: `${siteUrl}/images/gambar-dimas.jpg`,
    jobTitle: "Full Stack Developer & ML/AI Engineer",
    sameAs: [
      "https://github.com/dimas-k",
      "https://www.linkedin.com/in/dimas-arya-ramadhan-setiawan-4544362aa/",
      "https://www.instagram.com/dimasarya880/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

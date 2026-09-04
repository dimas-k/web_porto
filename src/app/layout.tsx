import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      "Full Stack Developer & Machine Learning Enthusiast. Lihat proyek, skill, dan pengalaman Dimas Arya Ramadhan Setiawan.",
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
      "Full Stack Developer & Machine Learning Enthusiast. Lihat proyek, skill, dan pengalaman Dimas Arya Ramadhan Setiawan.",
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
    jobTitle: "Full Stack Developer & Machine Learning Enthusiast",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

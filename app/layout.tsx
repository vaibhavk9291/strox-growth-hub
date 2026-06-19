import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Cursor } from '@/components/Cursor';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';

import { clashDisplay, spaceGrotesk } from '@/lib/fonts';

const title = "Intellobyte — Next-Generation Technology & AI Systems";
const description = "Intellobyte is a next-generation technology company engineering intelligent software, automation, and AI systems for businesses ready to outgrow generic.";
const url = "https://www.intellobyte.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: "%s | Intellobyte",
  },
  description: description,
  keywords: ["Intellobyte", "AI systems", "automation", "intelligent software", "web design", "digital agency"],
  applicationName: "Intellobyte",
  authors: [{ name: "Intellobyte" }],
  creator: "Intellobyte",
  publisher: "Intellobyte",
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Intellobyte",
    url: url,
    title: title,
    description: description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Intellobyte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

const ENABLE_CURSOR = true;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${url}/#organization`,
      "name": "Intellobyte",
      "url": url,
      "logo": `${url}/icon.svg`,
      "description": description,
      "sameAs": [
        "https://www.linkedin.com/company/intellobyte/posts/?feedView=all",
        "https://www.instagram.com/intellobyte/",
        "https://www.youtube.com/@IntelloByte",
        "#" // Twitter placeholder as per content.ts
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "hello@intellobyte.com",
        "telephone": "+91 76665 96339",
        "contactType": "customer support"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${url}/#website`,
      "url": url,
      "name": "Intellobyte"
    },
    {
      "@type": "ProfessionalService",
      "@id": `${url}/#business`,
      "name": "Intellobyte",
      "url": url,
      "image": `${url}/og-image.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Remote-first",
        "addressCountry": "India"
      },
      "founder": [
        { "@type": "Person", "name": "Kunal Manjare" },
        { "@type": "Person", "name": "Pranav Patil" },
        { "@type": "Person", "name": "Vaibhav Kale" },
        { "@type": "Person", "name": "Shinjini Mondal" }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BackgroundGrid />
        <Cursor enabled={ENABLE_CURSOR} />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

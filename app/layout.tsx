import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://socapcorp.com'),
  title: "Socap Corp | Business Consulting Miami & Financial Engineering",
  description: "Premier business consulting firm in Miami. We design dominance through operational architecture and financial engineering.",
  keywords: ["Business Consulting Miami", "Miami Business Consultant", "Strategic Capital", "Financial Engineering", "Restructuring", "Private Equity Florida"],
  openGraph: {
    title: "Socap Corp | Business Consulting Miami",
    description: "Operational architecture and financial engineering for the ambitious. We design dominance.",
    url: "https://socapcorp.com",
    siteName: "Socap Corp",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Socap Corp - Business Consulting Miami",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-black antialiased selection:bg-wealth-gold/30 selection:text-white`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Socap Corp",
              "url": "https://socapcorp.com",
              "logo": "https://socapcorp.com/images/socap-logo-white.png",
              "description": "Operational architecture and financial engineering for the ambitious. We design dominance.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2645 Executive Park Drive",
                "addressLocality": "Weston",
                "addressRegion": "FL",
                "postalCode": "33331",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-844-466-2665",
                "contactType": "customer service",
                "email": "info@socapcorp.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/socap-corp",
                "https://twitter.com/socapcorp"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}

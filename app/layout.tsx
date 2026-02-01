import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Socap Corp | Strategic Capital & Financial Engineering",
  description: "Operational architecture and financial engineering for the ambitious. We design dominance.",
  keywords: ["Management Consulting", "Private Equity", "Business Valuation", "Restructuring", "Miami", "Financial Engineering"],
  openGraph: {
    title: "Socap Corp | Strategic Capital & Financial Engineering",
    description: "Operational architecture and financial engineering for the ambitious.",
    url: "https://socapcorp.com",
    siteName: "Socap Corp",
    images: [
      {
        url: "/images/socap-logo-white.png", // utilizing the logo as a placeholder OG image if no specific banner exists
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/socap-logo-white.png",
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
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
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

import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

const description =
  "Software engineer and founder of Omnia Potentia. I design, build and run native iOS and Android apps — Onelior, Cevixa, Dawnia — and the systems behind them.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kutaykaracair.com"),
  title: "Ahmet Kutay Karacair — Software engineer & founder of Omnia Potentia",
  description,
  openGraph: {
    title: "Ahmet Kutay Karacair",
    description,
    url: "https://kutaykaracair.com",
    siteName: "Ahmet Kutay Karacair",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ahmet Kutay Karacair",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c100f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="js-pending" suppressHydrationWarning>
      <head>
        {/* Hide reveal targets only when JS runs, so content stays visible without it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.replace('js-pending','js')",
          }}
        />
      </head>
      <body className={`${archivo.variable} ${plexMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

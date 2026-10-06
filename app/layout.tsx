import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
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
  themeColor: "#f3efe6",
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
      <body className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

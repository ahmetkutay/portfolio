import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const description =
  "Senior Software Engineer in Istanbul, open to senior roles across Europe. Backend-heavy full-stack: production AI platforms and native apps on Node.js, Python, PostgreSQL, Redis and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kutaykaracair.com"),
  title: "Ahmet Kutay Karacair — Senior Software Engineer",
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
  themeColor: "#08090b",
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
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

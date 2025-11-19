import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./lib/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientLayout from "./components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://amaanullah.dev"),
  title: "Amaanullah Sayyed | Software Developer",
  description:
    "Portfolio of Amaanullah Sayyed - Experienced Software Developer specializing in Full Stack Development with Java, PHP, and .NET. Building enterprise solutions with 5+ years of experience.",
  keywords:
    "Software Developer, Full Stack Developer, Java Developer, PHP Developer, .NET Developer, Web Developer, ERP Systems, CRM Solutions, Mumbai, Dubai, React, Next.js",
  authors: [{ name: "Amaanullah Sayyed" }],
  creator: "Amaanullah Sayyed",
  publisher: "Amaanullah Sayyed",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amaanullah.dev",
    siteName: "Amaanullah Sayyed Portfolio",
    title: "Amaanullah Sayyed | Software Developer",
    description:
      "Experienced Software Developer with expertise in Java, PHP, C#, and modern web technologies. Specializing in ERP & CRM solutions with 5+ years of experience.",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Amaanullah Sayyed - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaanullah Sayyed | Software Developer",
    description:
      "Experienced Software Developer specializing in Full Stack Development with Java, PHP, and .NET",
    images: ["/profile.jpg"],
    creator: "@amaanullah",
  },
  alternates: {
    canonical: "https://amaanullah.dev",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <ClientLayout>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </ClientLayout>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

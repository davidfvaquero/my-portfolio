import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";
import { LanguageProvider } from "./contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio de David Fernández",
  description: "Portfolio de David Fernández, desarrollador web y de software apasionado por la IA, el IoT y la innovación.",
  openGraph: {
    title: "Portfolio de David Fernández",
    description: "Desarrollador web y de software apasionado por la IA, el IoT y la innovación.",
    images: ["/my-portfolio.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <meta name="description" content="Portfolio de David Fernández, desarrollador web y de software." />
        <meta property="og:title" content="Portfolio de David Fernández" />
        <meta property="og:description" content="Desarrollador web y de software apasionado por la IA, el IoT y la innovación." />
        <meta property="og:image" content="/my-portfolio.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

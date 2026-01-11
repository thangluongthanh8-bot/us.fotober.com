import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ApolloProviderWrapper from "./providers/ApolloProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://us.fotober.com"),
  title: "Fotober US LLC | US-Based Real Estate Photo & Video Editing Partner",
  description: "Your US-based real estate photo & video editing partner. Outsourcing that feels in-house, built for US standards. Trusted by 10,000+ photographers & studios worldwide.",
  icons: {
    icon: "/fotober-icon.png",
  },
  openGraph: {
    title: "Fotober US LLC | US-Based Real Estate Photo & Video Editing Partner",
    description: "Your US-based real estate photo & video editing partner. Outsourcing that feels in-house, built for US standards.",
    type: "website",
    locale: "en_US",
    siteName: "Fotober US LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fotober US LLC | US-Based Real Estate Photo & Video Editing Partner",
    description: "Your US-based real estate photo & video editing partner. Outsourcing that feels in-house, built for US standards.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ApolloProviderWrapper>{children}</ApolloProviderWrapper>
      </body>
    </html>
  );
}

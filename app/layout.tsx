import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Lighthouse Homecare",
  description:
    "Compassionate, personalized caregiving in the comfort of your home.",
  keywords: [
    "Lighthouse",
    "homecare",
    "elderly care",
    "caregiver",
    "in-home care",
    "healthcare",
    "senior care",
    "personal care",
    "home nursing",
    "care services",
  ],
  metadataBase: new URL("https://lighthousehomecare.co.uk/"),
  openGraph: {
    title: "Lighthouse Homecare – Compassionate In-Home Care",
    description:
      "Personalized caregiving services delivered with dignity and respect in the comfort of your home.",
    url: "https://lighthousehomecare.co.uk/",
    siteName: "Lighthouse Homecare",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lighthouse Homecare",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lighthouse Homecare – Compassionate In-Home Care",
    description:
      "Personalized caregiving services delivered with dignity and respect in the comfort of your home.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#00269B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-ED7Q0V009C" />
    </html>
  );
}
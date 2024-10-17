import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Edu Dapp | Starter-Kit",
  description:
    "A full stack starter template with the CLI for developers to launch dApps on EDU Chain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-L694N0QK6B"
      ></Script>
      <Script id="google-analytics">
        {`
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
   
   gtag('config', 'G-L694N0QK6B');
   `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

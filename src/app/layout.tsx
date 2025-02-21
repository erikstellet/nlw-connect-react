import './globals.css'

import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google";

export const metadata: Metadata = {
  title: "Devstage",
};

const oxanioum = Oxanium({
  subsets: ['latin'],
  variable: '--font-oxanium',
  weight: ['500', '600'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${oxanioum.variable}`}
    >
      <body
        className="bg-gray-900 text-gray-100 antialiased"
      >
        {children}
      </body>
    </html>
  );
}

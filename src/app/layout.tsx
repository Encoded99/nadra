
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Nadra – Smart Business Manager",
  description: "A market place for muslim women",
  openGraph: {
    title: "Nadra",
    description: "A market place for muslim women.",
    url: "https://nadra.ng",
    siteName: "Nadra",
    images: [
      {
        url: "https://res.cloudinary.com/hub6/image/upload/v1752939396/logos/24e4e505e38beb6cf65fc7a6db6cbac828afffdb_wn7kav.png", // This should be real and accessible
        width: 1200,
        height: 630,
        alt: "Nadra app preview",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadra",
    description: "A market place for muslim women.",
    images: ["https://res.cloudinary.com/hub6/image/upload/v1752939396/logos/24e4e505e38beb6cf65fc7a6db6cbac828afffdb_wn7kav.png"],
  },
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {










  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
         <Providers> 
          {children}
        </Providers>
       
      </body>
      
    </html>
  );
}

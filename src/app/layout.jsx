import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/layout/Navbar/Navbar";
import Footer from "@/Components/layout/Footer/Footer";
import ScrollProviderWrapper from "@/Components/ScrollProviderWrapper/ScrollProviderWrapper";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/provider/NextAuthProvider";


const inter = Inter({
  variable: "--inter",
  weight: ["100", "200", "400", "500", "600", "800"]
});

export const metadata = {
  metadataBase: new URL("https://care-io51.vercel.app/"),

  title: {
    default: "Care.IO | Trusted Babysitting & Elderly Care Services",
    template: "%s | Care.IO",
  },

  description:
    "Care.IO is a trusted caregiving platform offering professional babysitting, elderly care, and special home care services. Book verified caregivers easily and securely.",

  applicationName: "Care.IO",

  keywords: [
    "care services",
    "babysitting service",
    "elderly care",
    "home care",
    "caregiver platform",
    "hire caretaker",
    "Care.xyz",
  ],

  authors: [{ name: "Care.IO Team" }],
  creator: "Care.IO",
  publisher: "Care.IO",

  openGraph: {
    type: "website",
    siteName: "Care.IO",
    url: "https://care-io51.vercel.app/",
    title: "Care.IO | Trusted Babysitting & Elderly Care Services",
    description:
      "Hire trusted caregivers for babysitting, elderly care, and special needs at home. Simple booking. Verified professionals.",
    images: [
      {
        url: "https://i.ibb.co.com/8nvJ7gbn/home.png",
        width: 1200,
        height: 630,
        alt: "Care.IO Home Page Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Care.IO | Trusted Babysitting & Elderly Care Services",
    description:
      "Find reliable babysitters and elderly caregivers with Care.xyz. Secure booking and verified professionals.",
    images: ["https://i.ibb.co.com/8nvJ7gbn/home.png"],
    creator: "@careio",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://care-io51.vercel.app/",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${inter.className} antialiased`}
      >
        <NextAuthProvider>
          <Toaster />
          <ScrollProviderWrapper>
            <header className="w-full bg-white shadow-2xl sticky top-0 z-[100]">
              <Navbar></Navbar>
            </header>

            <main className="w-full max-w-full">
              {children}
            </main>

            <footer>
              <Footer></Footer>
            </footer>
          </ScrollProviderWrapper>
        </NextAuthProvider>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/layout/Navbar/Navbar";
import Footer from "@/Components/layout/Footer/Footer";

const inter = Inter({
  variable: "--inter",
  weight: ["100", "200", "400", "500", "600", "800"]
});

export const metadata = {
  title: "Care IO",
  description: "Baby Sitting & Elderly Care Service Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${inter.className} antialiased`}
      >
        <header className="shadow-2xl sticky top-0 z-100">
          <Navbar></Navbar>
        </header>
        <main>
          {children}
          </main>
        <footer>
          <Footer></Footer>
        </footer>        
      </body>
    </html>
  );
}

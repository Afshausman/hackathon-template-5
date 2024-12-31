import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Montserrat } from 'next/font/google';
import Header from "./components/Header";
import Footer from "./components/Footer";



const montserrat = Montserrat({
   subsets: ['latin'],
    weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Header />
       {children}
       <Footer />
      </body>
    </html>
  );
}
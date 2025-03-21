import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layout/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Austin Aminu's portfolio",
  description: "Generated by next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />

        <main className="mt-8">{children}</main>
      </body>
    </html>
  );
}

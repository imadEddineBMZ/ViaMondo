import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Navbar from "../components/navbar";


export const metadata: Metadata = {
  title: "ViaMondo",
  description: "travel app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

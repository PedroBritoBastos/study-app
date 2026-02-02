"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Provider } from "@/components/ui/provider";

import { Navbar } from "../components/navbar/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = localStorage.getItem("token");

  return (
    <html lang="en">
      <body>
        <Provider>
          <div style={{ display: "flex", minHeight: "100vh" }}>
            {token && <Navbar />}
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}

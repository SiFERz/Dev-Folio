import "./globals.css";
import Header from "@/components/Header";
import MusicPlayer from "@/components/MusicPlayer";
import React from "react";

export const metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Welcome to my creative portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Portfolio | Chandan Kumar C",
  description: "Full-stack developer portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              var nextBadge = document.querySelector('[href*="vercel.app"]');
              if (nextBadge) nextBadge.remove();
            });
          `
        }} />
      </body>
    </html>
  );
}

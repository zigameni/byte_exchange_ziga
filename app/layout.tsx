/* eslint-disable camelcase */
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next"; // for typescripting to know we are working with metadata

import "./globals.css"; // styles
import "../styles/prism.css"; // styles for prism
import { ThemeProvider } from "@/context/ThemeProvider";

// Using fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "ByteExchange",
  description:
    "A vibrant community platform where developers unite to share expertise, and grow together. Dive into discussions on web development, algorithms, mobile apps, and much more.",
  icons: {
    icon: "/assets/images/ziga-site-logo.svg",
    // icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [meni, setMeni] = useState(null);


  return (
    <html lang="en">
      {/* Adding the classnames to the body for the fonts */}
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

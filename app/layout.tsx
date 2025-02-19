import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter, Space_Grotesk as SpaceGrotesk  } from 'next/font/google'
import type { Metadata } from 'next'; // for typescripting to know we are working with metadata

import './globals.css'; // styles


// Using fonts
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const spaceGrotesk = SpaceGrotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})
 
export const metadata: Metadata = {
  title: 'ByteExchange',
  description: 'A vibrant community platform where developers unite to share expertise, and grow together. Dive into discussions on web development, algorithms, mobile apps, and much more.',
  icons: {
    icon: '/assets/images/ziga-site-logo.svg'
    // icon: './favicon.ico',
  }
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'primary-gradient',
          footerActionLink: 'primary-text-gradient hover:text-primary-500'
        }
      }}
    >
      <html lang="en">
        {/* Adding the classnames to the body for the fonts */}
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>

          {children}

        </body>
      </html>
    </ClerkProvider>
  )
}
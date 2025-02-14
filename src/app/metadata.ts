import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Styles By TDS | Black-Owned Hair Salon in Fort Washington, MD",
  description: "Expert braiding and crochet hairstyles in Fort Washington, MD. Tiffany Seaward specializes in kids' hair care, protective styles, and extensions. Family-friendly, black-owned salon serving the DMV area.",
  keywords: [
    "black hair salon Fort Washington",
    "braiding salon DMV",
    "kids hair stylist Maryland",
    "crochet braids DMV",
    "protective hairstyles Maryland",
    "black owned salon Fort Washington",
    "hair extensions DMV",
    "Tiffany Seaward stylist",
    "kids friendly hair salon",
    "African American hair care",
    "professional braider Maryland",
    "natural hair care DMV",
    "box braids Fort Washington",
    "family hair salon Maryland",
    "black hair care specialist"
  ],
  openGraph: {
    title: "Styles By TDS | Professional Hair Styling in Fort Washington",
    description: "Expert braiding and protective styles by Tiffany Seaward. Kid-friendly, black-owned salon specializing in braids, crochet styles, and extensions. Serving the DMV area.",
    images: ['/TDS.png'],
    locale: 'en_US',
    type: 'website',
    siteName: 'Styles By TDS',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add this when you have it
  },
  alternates: {
    canonical: 'https://stylesbytds.com', // Add your actual domain
  },
  authors: [{ name: 'Tiffany Seaward' },{ name: 'Quentin Datcher', url: 'https://qdatcher.com' }],
  creator: 'Tiffany Seaward',
  publisher: 'Styles By TDS',  
  generator: 'Built by Quentin Datcher | qdatcher.com',
  category: 'Hair Salon',
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/image/favicons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/apple-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    apple: [
      {
        url: "/image/favicons/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
}; 
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Time tracking dashboard',
  description:
    'A responsive time tracking dashboard built for a Frontend Mentor challenge.',
  generator: 'Next.js',
  applicationName: 'Time tracking dashboard',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Frontend Mentor Challenge',
    'Time tracking dashboard',
    'Next.js',
    'Tailwind CSS',
    'Typescript',
    'Storybook',
    'Vitest',
  ],
  authors: [
    {
      name: 'jaceleedev',
      url: 'https://github.com/jaceleedev/time-tracking-dashboard.git',
    },
  ],
  creator: 'jaceleedev',
  publisher: 'jaceleedev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    'https://time-tracking-dashboard-gamma-puce.vercel.app'
  ),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Frontend Mentor | Time tracking dashboard',
    description:
      'A responsive time tracking dashboard built for a Frontend Mentor challenge.',
    url: 'https://time-tracking-dashboard-gamma-puce.vercel.app',
    siteName: 'Frontend Mentor | Time tracking dashboard',
    images: [
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1631270212/Challenges/va9khukabo1wlmpzsbgi.jpg',
        width: 1440,
        height: 1024,
        alt: 'Time tracking dashboard desktop preview',
      },
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1631270568/Challenges/euyopt3w3hpjtezkfr4x.jpg',
        width: 750,
        height: 2938,
        alt: 'Time tracking dashboard mobile preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Mentor | Time tracking dashboard',
    description:
      'A responsive time tracking dashboard built for a Frontend Mentor challenge.',
    images: [
      'https://res.cloudinary.com/dz209s6jk/image/upload/v1631270212/Challenges/va9khukabo1wlmpzsbgi.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex justify-center items-center w-screen min-h-screen bg-very-dark-blue ${rubik.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

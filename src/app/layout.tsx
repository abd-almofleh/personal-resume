import type { Metadata } from 'next';

import { inter } from './ui/fonts';

import './ui/globals.css';

export const metadata: Metadata = {
  title: 'Abdullah Almofleh Resume',
  // TODO: Add description
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

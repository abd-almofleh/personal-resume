import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import { inter } from './ui/fonts';

import './ui/globals.css';

export const metadata: Metadata = {
  title: 'Abdullah Almofleh Resume',
  // TODO: Add description
  description: 'Abdullah Almofleh Resume',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}

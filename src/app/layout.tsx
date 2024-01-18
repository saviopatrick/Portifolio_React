import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';

const inter = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] }) as unknown as { url: string, className: string };

export const metadata: Metadata = {
  title: 'Sávio Patrick',
  description: 'Portifolio de Sávio Patrick',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href={(inter as { url: string }).url} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}


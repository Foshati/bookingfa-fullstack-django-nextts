import {Inter} from 'next/font/google';
import './globals.css';
import {Metadata} from 'next';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Bookingfa ',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ModalProvider } from '@/components/providers/ModalProvider';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Toaster } from 'sonner';
import './globals.css';
import AuthProvider from '@/components/providers/AuthProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'TenTwenty',
  description: 'TenTwenty Assignment'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-100">
        <AuthProvider>
          <ModalProvider>
            {children}

            <Toaster richColors />
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

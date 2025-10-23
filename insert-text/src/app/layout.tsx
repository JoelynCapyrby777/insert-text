// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/3-organisms/Footer'; // 1. Importa el Footer
import './globals.css';
import Header from '@/components/3-organisms/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Insert Bug',
  description: 'Blog bloguero de bichotes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header/>
        {children} {/* Aquí se renderiza tu página (page.tsx) */}
        <Footer /> {/* 2. Añade el Footer justo después */}
      </body>
    </html>
  );
}
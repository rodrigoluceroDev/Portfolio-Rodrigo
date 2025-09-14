import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Rodrigo Lucero - Desarrollador Full Stack',
  description: 'Portfolio personal de Rodrigo Lucero, Desarrollador Full Stack especializado en React, Next.js y TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-light">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
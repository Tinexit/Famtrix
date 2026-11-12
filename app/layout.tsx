import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FAMTRIX | Digital Marketing & Tech Solutions in Mysuru',
  description:
    'Powered by Innovation. Driven by Technology. FAMTRIX delivers digital marketing, full-stack web development, AI automation, and cybersecurity in Mysuru.',
  icons: {
    icon: '/assets/famtrix-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable} scroll-smooth dark`}>
      <body className="bg-surface-canvas text-slate-100 antialiased selection:bg-brand-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}

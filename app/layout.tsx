import type { Metadata } from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Cursor } from '@/components/Cursor';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';

import { clashDisplay, spaceGrotesk } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Intellobyte — Premium Web Design & Branding Studio',
  description: 'Premium Web Design & Branding Studio turning ambitious ideas into high-performing digital experiences.',
};

const ENABLE_CURSOR = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <BackgroundGrid />
        <Cursor enabled={ENABLE_CURSOR} />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

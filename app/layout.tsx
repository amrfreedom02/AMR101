
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-cairo',
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "مركز الدكتور سعد البردوني للتجميل وجراحة الأنف والأذن والحنجرة",
  description: "مركز طبي متخصص في الجراحة التجميلية وجراحة الأنف والأذن والحنجرة في صنعاء - اليمن",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${cairo.variable} antialiased font-['Cairo']`}
      >
        {children}
      </body>
    </html>
  );
}
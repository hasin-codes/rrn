import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Run Rise Nation - Marathon Hub",
  description: "Run, Rise, and Conquer! Join the ultimate marathon experience.",
  openGraph: {
    title: "Run Rise Nation - Marathon Hub",
    description: "Register, track, and celebrate your running journey with style.",
    url: "https://runrisenation.com",
    siteName: "Run Rise Nation",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Run Rise Nation Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Run Rise Nation",
    description: "Unleash your running spirit. Join the movement today!",
    images: ["/images/og-image.jpg"],
  },
  themeColor: "#009688",
  icons: {
    icon: "/Run Rise Logo-01.png",
    apple: "/Run Rise Logo-01.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <header className="hidden">
          <div className="flex items-center gap-2">
            <Image 
              src="/Run Rise Logo-01.png" 
              alt="Run Rise Nation Logo" 
              width={40} 
              height={40} 
              className="h-10 w-auto"
            />
            <h1 className="text-2xl font-bold text-white">Run Rise Nation</h1>
          </div>
          <nav className="hidden">
            <Link href="/" className="text-white hover:text-orange-400">Home</Link>
            <Link href="/register" className="text-white hover:text-orange-400">Register</Link>
            <Link href="/results" className="text-white hover:text-orange-400">Results</Link>
            <Link href="/contact" className="text-white hover:text-orange-400">Contact</Link>
          </nav>
        </header>
        
        <main className="min-h-screen">{children}</main>
        
        <footer className="hidden">
          <p className="text-center p-5 bg-[#009688] text-white">
            © 2025 Run Rise Nation | Keep Running, Keep Rising!
          </p>
        </footer>
      </body>
    </html>
  );
}

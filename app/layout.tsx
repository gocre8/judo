import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Judo / Jiujitsu Study",
  description: "Personal judo and jiujitsu study tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link href="/" className="brand-mark">
              <strong>Judo / Jiujitsu</strong>
            </Link>
            <nav className="site-nav" aria-label="Primary">
              <Link href="/library">Library</Link>
              <Link href="/progress">Progress</Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

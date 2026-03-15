import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlanta Irrigation | Metro Atlanta Irrigation Company",
  description: "Professional irrigation installation, sprinkler repair, and seasonal service across metro Atlanta, GA. Locally owned and licensed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="header-inner">
            <Link href="/" className="logo">
              <span className="logo-mark">◍</span>
              <span className="logo-text">Atlanta Irrigation</span>
            </Link>
            <nav className="site-nav">
              <Link href="/services">Services</Link>
              <Link href="/areas-served">Areas Served</Link>
              <Link href="/contact">Contact</Link>
              <a href="tel:+17703159814" className="nav-phone">(770) 315-9814</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="logo-mark">◍</span>
              <span className="logo-text">Atlanta Irrigation</span>
              <p>Locally owned. Licensed &amp; insured.<br />Metro Atlanta, GA.</p>
            </div>
            <div className="footer-links">
              <strong>South Metro</strong>
              <Link href="/areas-served/fayette-county">Fayette</Link>
              <Link href="/areas-served/coweta-county">Coweta</Link>
              <Link href="/areas-served/henry-county">Henry</Link>
              <Link href="/areas-served/clayton-county">Clayton</Link>
              <Link href="/areas-served/spalding-county">Spalding</Link>
            </div>
            <div className="footer-links">
              <strong>West &amp; North Metro</strong>
              <Link href="/areas-served/douglas-county">Douglas</Link>
              <Link href="/areas-served/carroll-county">Carroll</Link>
              <Link href="/areas-served/cobb-county">Cobb</Link>
              <Link href="/areas-served/fulton-county">Fulton</Link>
            </div>
            <div className="footer-links">
              <strong>East Metro</strong>
              <Link href="/areas-served/dekalb-county">DeKalb</Link>
              <Link href="/areas-served/gwinnett-county">Gwinnett</Link>
              <Link href="/areas-served/newton-county">Newton</Link>
              <Link href="/areas-served/rockdale-county">Rockdale</Link>
            </div>
            <div className="footer-contact">
              <strong>Contact</strong>
              <a href="tel:+17703159814">(770) 315-9814</a>
              <a href="mailto:info@atlantairrigation.com">info@atlantairrigation.com</a>
              <Link href="/contact">Free Estimate</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Atlanta Irrigation. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

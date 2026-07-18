import Link from "next/link";
import { navItems, services } from "../lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand brand-footer" href="/">
            <img className="brand-logo brand-logo-footer" src="/images/brand/vrikshya-logo.png" alt="Vrikshya Design and Build" />
          </Link>
          <p>Rooted in design. Built with trust—from first sketch to final handover.</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <div className="footer-links">
            {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="footer-label">Services</p>
          <div className="footer-links">
            {services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}>{service.title}</Link>)}
          </div>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <p className="footer-contact">Chandragiri-9, Kathmandu<br /><a href="tel:+9779861723878">+977 986 1723878 · Ruby Bista, MD</a><br /><a href="tel:+9779845222220">+977 984 5222220 · Sailesh Regmi</a><br /><a href="tel:+9779851336344">+977 985 1336344 · Paban Rupakheti</a><br /><a href="mailto:info@vrikshya.com.np">info@vrikshya.com.np</a></p>
          <Link className="text-link text-link-light" href="/contact">Start a conversation <span>→</span></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Vrikshya Design &amp; Build</span>
        <span>Architecture · Interiors · Design &amp; Build</span>
      </div>
    </footer>
  );
}

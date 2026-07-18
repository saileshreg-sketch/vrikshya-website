"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, services } from "../lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Vrikshya Design and Build home">
          <img className="brand-logo" src="/images/brand/vrikshya-logo.png" alt="Vrikshya Design and Build" />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>

        <nav className={`main-nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          <div className="nav-service-group">
            <Link className={pathname.startsWith("/services") ? "active" : ""} href="/services" onClick={() => setOpen(false)}>Services <span className="nav-chevron">⌄</span></Link>
            <div className="service-dropdown">
              <div className="dropdown-label">Our services</div>
              {services.map((service, index) => (
                <Link href={`/services/${service.slug}`} key={service.slug} onClick={() => setOpen(false)}>
                  <span>0{index + 1}</span>{service.title}
                </Link>
              ))}
            </div>
          </div>
          {navItems.filter((item) => item.label !== "Services").map((item) => (
            <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
          <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Discuss your project <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}

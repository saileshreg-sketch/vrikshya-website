import type { Metadata } from "next";
import Link from "next/link";
import { InnerHero } from "../components/InnerHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { services } from "../lib/content";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <InnerHero eyebrow="Our services" title="From the first idea to a finished space." intro="Choose a focused design or construction service, or work with one coordinated team through the complete project journey." index="02" />
        <section className="section service-overview-section">
          <div className="container service-overview-list">
            {services.map((service, index) => (
              <article className="service-overview" key={service.slug}>
                <span className="service-number">0{index + 1}</span>
                <div><h2>{service.title}</h2><p>{service.intro}</p></div>
                <div className="service-overview-side"><p><strong>Best suited for</strong>{service.suitable}</p><Link className="circle-arrow" href={`/services/${service.slug}`} aria-label={`View ${service.title}`}>↗</Link></div>
              </article>
            ))}
          </div>
        </section>
        <section className="service-choice-strip">
          <div className="container service-choice-grid">
            <p className="eyebrow eyebrow-light">Not sure where to begin?</p>
            <h2>Tell us about your site, space, or idea. We’ll help define the right scope.</h2>
            <Link className="button button-accent" href="/contact">Start a conversation <span>↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

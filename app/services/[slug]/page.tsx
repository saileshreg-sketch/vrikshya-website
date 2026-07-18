import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerHero } from "../../components/InnerHero";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { services } from "../../lib/content";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.title ?? "Service" };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const number = String(services.findIndex((item) => item.slug === slug) + 1).padStart(2, "0");
  const serviceImages: Record<string, string> = {
    "architecture-planning": "/images/projects/modern-floorplans.webp",
    "interior-design": "/images/projects/balkhu-dining.webp",
    "design-build": "/images/projects/chandragiri-completed.webp",
    construction: "/images/projects/urban-construction-2.webp",
    "renovation-remodeling": "/images/projects/meditation-construction-1.webp",
  };

  return (
    <>
      <SiteHeader />
      <main>
        <InnerHero eyebrow={`Service ${number}`} title={service.title} intro={service.intro} index={number} />
        <section className="section service-detail-intro">
          <div className="container service-detail-grid">
            <div><p className="eyebrow">Who it is for</p><h2>Built around the needs of your project.</h2></div>
            <div><p className="large-copy compact-copy">{service.suitable}</p><Link className="text-link" href="/contact">Discuss this service <span>→</span></Link></div>
          </div>
        </section>
        <section className="section deliverables-section">
          <div className="container deliverables-grid">
            <div className="deliverables-image"><img src={serviceImages[slug]} alt={`${service.title} work by Vrikshya Design and Build`} /></div>
            <div>
              <p className="eyebrow">What is included</p>
              <h2>A clear, coordinated scope.</h2>
              <ul className="deliverables-list">{service.includes.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
            </div>
          </div>
        </section>
        <section className="section service-steps-section">
          <div className="container">
            <p className="eyebrow">Typical process</p><h2>How this service moves forward.</h2>
            <div className="service-steps">{service.steps.map((step, index) => <div key={step}><span>0{index + 1}</span><h3>{step}</h3></div>)}</div>
          </div>
        </section>
        <section className="section faq-section">
          <div className="container faq-grid">
            <div><p className="eyebrow">Common questions</p><h2>Before we begin.</h2></div>
            <div>{service.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>)}</div>
          </div>
        </section>
        <section className="closing-cta"><div className="container closing-cta-inner"><p className="eyebrow eyebrow-light">Plan this service</p><h2>Let’s define what your<br />project needs.</h2><Link className="button button-accent" href="/contact">Request a consultation <span>↗</span></Link></div></section>
      </main>
      <SiteFooter />
    </>
  );
}

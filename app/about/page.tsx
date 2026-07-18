import type { Metadata } from "next";
import Link from "next/link";
import { InnerHero } from "../components/InnerHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "About" };

const values = [
  ["01", "Design with purpose", "Every decision should improve use, experience, longevity, or construction—not simply add decoration."],
  ["02", "Practical creativity", "We aim for distinctive spaces that remain realistic about site, budget, materials, and local workmanship."],
  ["03", "Honest communication", "Clear scope, visible decisions, and direct conversations make better projects and stronger relationships."],
  ["04", "Responsible execution", "We treat drawings, site work, material choices, coordination, and handover as parts of the same promise."],
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <InnerHero eyebrow="About Vrikshya" title="We design with purpose and build with responsibility." intro="Vrikshya Design & Build is a Nepal-based architecture, interior, construction, and design-build practice focused on thoughtful, buildable spaces." index="01" />

        <section className="section story-section">
          <div className="container story-grid">
            <div className="story-image"><img src="/images/projects/chandragiri-completed.webp" alt="Completed Chandragiri Residence" /><span>Completed residence · Chandragiri</span></div>
            <div className="story-copy">
              <p className="eyebrow">Our story</p>
              <h2>A hands-on practice for the whole project journey.</h2>
              <p>Vrikshya Design and Build is a multidisciplinary design and construction company focused on thoughtful architecture, refined interiors, and reliable project execution.</p>
              <p>We help clients move from initial concept to drawings, costing, construction, and final handover with clarity and confidence. Our work covers private residences, resorts, hospitality spaces, restaurants, interiors, and renovations.</p>
              <blockquote>“A good project should feel considered in the drawing, practical on site, and natural to live with.”</blockquote>
            </div>
          </div>
        </section>

        <section className="section values-section">
          <div className="container">
            <div className="section-heading-row">
              <div><p className="eyebrow">What guides us</p><h2>Principles behind<br />the work.</h2></div>
              <p className="section-intro">Our approach is collaborative, precise, and grounded in what can be built well.</p>
            </div>
            <div className="values-grid">
              {values.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section-dark compact-cta">
          <div className="container compact-cta-grid">
            <div><p className="eyebrow eyebrow-light">Work with us</p><h2>Bring the idea.<br />We’ll shape the path.</h2></div>
            <Link className="button button-accent" href="/contact">Discuss your project <span>↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { InnerHero } from "../components/InnerHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Our Process" };

const stages = [
  ["01", "Listen & understand", "We begin with your goals, site, lifestyle or business needs, approximate budget, programme, and the decisions already made."],
  ["02", "Study & define", "We review the site or existing space, clarify constraints, and agree on the project scope, deliverables, responsibilities, and next steps."],
  ["03", "Design & develop", "Concepts become coordinated plans, elevations, materials, visualizations, and technical decisions through structured reviews."],
  ["04", "Cost & coordinate", "The defined design is aligned with specifications, quantities, consultants, contractors, suppliers, and an appropriate execution plan."],
  ["05", "Build & communicate", "Site work moves through planned stages with progress communication, drawing support, quality checks, and clear decisions."],
  ["06", "Review & hand over", "We inspect completion, coordinate remaining items, organize the final review, and hand over a space ready for its intended use."],
];

export default function ProcessPage() {
  return <><SiteHeader /><main><InnerHero eyebrow="Our process" title="A clear path from first conversation to handover." intro="Good work depends on good decisions. Our process keeps design, cost, coordination, and construction visible at every stage." index="04" />
    <section className="section process-page-section"><div className="container process-page-grid"><aside><p className="eyebrow">Six clear stages</p><h2>Designed to keep everyone aligned.</h2><p>Exact deliverables vary by service and project, but the logic remains consistent: define before detailing, coordinate before building, and review before handover.</p></aside><div className="stage-list">{stages.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
    <section className="process-principles"><div className="container"><p className="eyebrow eyebrow-light">Throughout the project</p><div className="principle-grid"><div><span>01</span><h3>Clear decisions</h3><p>Each review should end with an understood direction and responsibility.</p></div><div><span>02</span><h3>Visible coordination</h3><p>Design, structure, services, material, cost, and site information must stay connected.</p></div><div><span>03</span><h3>Practical communication</h3><p>Updates are useful when they identify progress, pending decisions, and next actions.</p></div></div></div></section>
    <section className="closing-cta"><div className="container closing-cta-inner"><p className="eyebrow eyebrow-light">Begin well</p><h2>Every good project starts<br />with a clear conversation.</h2><Link className="button button-accent" href="/contact">Discuss your project <span>↗</span></Link></div></section>
  </main><SiteFooter /></>;
}

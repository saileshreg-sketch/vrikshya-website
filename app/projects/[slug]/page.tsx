import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { projects } from "../../lib/content";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: projects.find((item) => item.slug === slug)?.title ?? "Project" };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <><SiteHeader /><main>
      <section className="project-hero"><img src={project.image} alt={`${project.title} by Vrikshya Design and Build`} /><div className="hero-shade" /><div className="container project-hero-content"><p className="eyebrow eyebrow-light">{project.category} · {project.location}</p><h1>{project.title}</h1><p>{project.summary}</p></div></section>
      <section className="project-facts"><div className="container project-facts-grid"><div><span>Status</span><strong>{project.status}</strong></div><div><span>Location</span><strong>{project.location}</strong></div><div><span>Service</span><strong>{project.service}</strong></div><Link href="/contact">Plan something similar <span>↗</span></Link></div></section>
      <section className="section project-story"><div className="container project-story-grid"><div><p className="eyebrow">The project</p><h2>From requirement to a coordinated response.</h2></div><div><article><span>01</span><h3>The challenge</h3><p>{project.challenge}</p></article><article><span>02</span><h3>Our response</h3><p>{project.response}</p></article></div></div></section>
      <section className="project-gallery-section" aria-label={`${project.title} gallery`}><div className="project-gallery">{project.gallery.map((image, index) => <figure className={image.includes("floorplans") ? "is-drawing" : ""} key={image}><img src={image} alt={`${project.title} project view ${index + 1}`} /></figure>)}</div></section>
      <section className="section project-scope"><div className="container project-scope-grid"><div><p className="eyebrow">Vrikshya’s scope</p><h2>Work included in this project.</h2></div><ul>{project.scope.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul></div></section>
      <section className="closing-cta"><div className="container closing-cta-inner"><p className="eyebrow eyebrow-light">Your project</p><h2>Planning something<br />with similar needs?</h2><Link className="button button-accent" href="/contact">Discuss your project <span>↗</span></Link></div></section>
    </main><SiteFooter /></>
  );
}

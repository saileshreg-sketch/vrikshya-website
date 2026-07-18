import type { Metadata } from "next";
import { InnerHero } from "../components/InnerHero";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { projects } from "../lib/content";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return <><SiteHeader /><main><InnerHero eyebrow="Selected work" title="Projects shaped by place, purpose, and people." intro="Explore Vrikshya’s work across architecture, interiors, construction, renovation, hospitality, and coordinated technical design." index="03" /><section className="section portfolio-section"><div className="container"><ProjectsGrid projects={projects} /></div></section></main><SiteFooter /></>;
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "../lib/content";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Residential", "Hospitality", "Interiors", "Construction"];
  const filtered = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.tags.includes(filter)), [filter, projects]);

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((item) => <button className={filter === item ? "selected" : ""} type="button" onClick={() => setFilter(item)} key={item}>{item}</button>)}
      </div>
      <div className="portfolio-grid" aria-live="polite">
        {filtered.map((project, index) => (
          <Link className={`portfolio-card ${index % 3 === 0 ? "portfolio-wide" : ""}`} href={`/projects/${project.slug}`} key={project.slug}>
            <div className="portfolio-image-wrap"><img src={project.image} alt={`${project.title} by Vrikshya Design and Build`} /><span className="status-chip">{project.status}</span></div>
            <div className="portfolio-caption"><div><p>{project.category} · {project.location}</p><h2>{project.title}</h2></div><span>↗</span></div>
          </Link>
        ))}
      </div>
    </>
  );
}

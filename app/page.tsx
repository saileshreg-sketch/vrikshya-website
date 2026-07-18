import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { services } from "./lib/content";

const featuredProjects = [
  {
    slug: "chandragiri-residence",
    title: "Chandragiri Residence",
    meta: "Residential · Design & build",
    status: "Completed",
    image: "/images/projects/chandragiri-completed.webp",
    className: "project-tall",
  },
  {
    slug: "kalanki-residence",
    title: "Kalanki Residence",
    meta: "Residential · Architecture",
    status: "Design & visualization",
    image: "/images/projects/kalanki-main.webp",
    className: "",
  },
  {
    slug: "hotel-harmony",
    title: "Hotel Harmony",
    meta: "Hospitality · Interior design",
    status: "Interior design",
    image: "/images/projects/hotel-harmony-1.webp",
    className: "",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/images/projects/kalanki-main.webp"
            alt="Kalanki Residence designed by Vrikshya Design and Build"
          />
          <div className="hero-shade" />
          <div className="hero-grain" />
          <div className="container hero-content">
            <p className="eyebrow eyebrow-light">Architecture · Interiors · Design &amp; Build</p>
            <h1 id="hero-title">Designed with purpose.<br />Built with responsibility.</h1>
            <p className="hero-lede">
              Vrikshya is a complete design-and-build practice. We shape the idea,
              define the cost, construct the project, and deliver the finished space.
            </p>
            <div className="button-row">
              <Link className="button button-accent" href="/contact">Discuss your project <span>↗</span></Link>
              <Link className="text-link text-link-light" href="/projects">View our work <span>→</span></Link>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">
            <span>01</span><span>Vrikshya Design & Build</span>
          </div>
        </section>

        <section className="intro-section section">
          <div className="container split-intro">
            <div>
              <p className="eyebrow">Our approach</p>
              <p className="side-note">Design clarity.<br />Build certainty.</p>
            </div>
            <div>
              <h2 className="display-heading">One team, one vision,<br />one complete process.</h2>
              <p className="large-copy">
                We unite architecture, interiors, costing, construction, and
                handover under one accountable team. The result is a clearer
                process, stronger quality control, and spaces that stay true to their design.
              </p>
              <Link className="text-link" href="/about">Get to know Vrikshya <span>→</span></Link>
            </div>
          </div>
        </section>

        <section className="capability-band" aria-label="Complete design and build service">
          <div className="container capability-heading">
            <p className="eyebrow eyebrow-light">One accountable team</p>
            <h2>We do more than coordinate construction.<br />We design and build the complete project.</h2>
          </div>
          <div className="container capability-grid">
            <article><span>01</span><h3>Design</h3><p>Architecture, interiors, planning, visualization, and technical drawings.</p></article>
            <article><span>02</span><h3>Cost</h3><p>BOQ, estimation, material decisions, procurement planning, and cost control.</p></article>
            <article><span>03</span><h3>Build</h3><p>Construction execution, trade management, workmanship review, and site delivery.</p></article>
            <article><span>04</span><h3>Handover</h3><p>Final inspection, completion details, documentation, and a confident handover.</p></article>
          </div>
        </section>

        <section className="projects-section section section-dark">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow eyebrow-light">Selected work</p>
                <h2>Projects shaped<br />with purpose.</h2>
              </div>
              <Link className="text-link text-link-light desktop-link" href="/projects">Explore all projects <span>→</span></Link>
            </div>
            <div className="featured-grid">
              {featuredProjects.map((project) => (
                <Link className={`featured-card ${project.className}`} href={`/projects/${project.slug}`} key={project.title}>
                  <div className="featured-image-wrap">
                    <img src={project.image} alt="" className="featured-image" />
                    <span className="status-chip">{project.status}</span>
                  </div>
                  <div className="project-caption">
                    <div><h3>{project.title}</h3><p>{project.meta}</p></div>
                    <span aria-hidden="true">↗</span>
                  </div>
                </Link>
              ))}
            </div>
            <Link className="text-link text-link-light mobile-link" href="/projects">Explore all projects <span>→</span></Link>
          </div>
        </section>

        <section className="services-section section">
          <div className="container">
            <div className="section-heading-row services-heading">
              <div>
                <p className="eyebrow">What we do</p>
                <h2>From an idea<br />to a finished space.</h2>
              </div>
              <p className="section-intro">
                Choose a focused service or work with us through the complete
                design-and-build journey.
              </p>
            </div>
            <div className="service-list">
              {services.map((service, index) => (
                <Link className="service-row" href={`/services/${service.slug}`} key={service.slug}>
                  <span className="service-number">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  <span className="circle-arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="process-teaser section">
          <div className="container process-grid">
            <div className="process-image-wrap">
              <img src="/images/projects/mokshyadham-lobby.webp" alt="Warm timber and stone lobby interior" />
              <div className="image-stamp"><span>05</span>Clear stages</div>
            </div>
            <div className="process-copy">
              <p className="eyebrow">How we work</p>
              <h2>Clarity at every<br />stage of the project.</h2>
              <p>
                From site study and concept design to costing, construction,
                execution, and handover, every decision follows a visible path.
              </p>
              <ol className="mini-process">
                <li><span>01</span>Listen & understand</li>
                <li><span>02</span>Design & define</li>
                <li><span>03</span>Cost & coordinate</li>
                <li><span>04</span>Build & communicate</li>
                <li><span>05</span>Review & hand over</li>
              </ol>
              <Link className="button button-dark" href="/process">See our process <span>→</span></Link>
            </div>
          </div>
        </section>

        <section className="closing-cta">
          <div className="container closing-cta-inner">
            <p className="eyebrow eyebrow-light">Start a conversation</p>
            <h2>Have a site, an idea, or a<br />space ready for change?</h2>
            <Link className="button button-accent" href="/contact">Discuss your project <span>↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

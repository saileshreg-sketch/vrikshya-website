type InnerHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  index?: string;
};

export function InnerHero({ eyebrow, title, intro, index = "VDB" }: InnerHeroProps) {
  return (
    <section className="inner-hero">
      <div className="inner-hero-lines" aria-hidden="true" />
      <div className="container inner-hero-grid">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <div>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <span className="inner-index" aria-hidden="true">{index}</span>
      </div>
    </section>
  );
}

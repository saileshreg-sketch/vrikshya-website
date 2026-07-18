export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  suitable: string;
  includes: string[];
  steps: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "architecture-planning",
    title: "Architecture & Planning",
    short: "Site-responsive planning shaped around function, climate, budget, and approvals.",
    intro: "We turn your requirements and site conditions into clear, buildable architecture. Every proposal balances daily use, spatial quality, climate response, cost awareness, and the realities of construction in Nepal.",
    suitable: "New homes, villas, residential-commercial buildings, hospitality projects, and institutional spaces.",
    includes: ["Site and requirement study", "Concept planning and massing", "Floor plans, elevations, and sections", "3D visualization", "Municipality drawing coordination", "Detailed architectural drawings", "Material and finish guidance"],
    steps: ["Brief & site study", "Concept options", "Design development", "Detailed documentation", "Coordination & approvals"],
    faqs: [
      { q: "Can you design for a fixed construction budget?", a: "Yes. Sharing a realistic budget early helps us align area, structure, materials, and priorities before the design becomes too detailed." },
      { q: "Do you prepare municipality drawings?", a: "We can prepare and coordinate the required architectural drawing package. Final requirements depend on the project location and local authority." },
    ],
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    short: "Coordinated space planning, materials, lighting, furniture, and detailing.",
    intro: "Our interior work connects atmosphere with everyday function. We shape layouts, lighting, materials, built-in furniture, and details as one coherent experience rather than a collection of decorative choices.",
    suitable: "Homes, apartments, offices, restaurants, resort spaces, reception areas, and retail interiors.",
    includes: ["Space planning", "Concept and mood direction", "Ceiling and lighting layouts", "Material and color selection", "Custom furniture details", "3D visualization", "Working drawings and site coordination"],
    steps: ["Measure & understand", "Concept direction", "Layout & visualization", "Detailed drawings", "Selection & execution support"],
    faqs: [
      { q: "Can you work with my existing building?", a: "Yes. We document the existing space first, then develop a design around its structure, services, light, and practical limitations." },
      { q: "Do you also execute the interior work?", a: "Yes. You can appoint us for design only or for coordinated design and execution, depending on the project scope." },
    ],
  },
  {
    slug: "design-build",
    title: "Design & Build",
    short: "One coordinated team from first design decisions through construction and handover.",
    intro: "Design & Build gives you one responsible team for design development, costing, coordination, construction, and handover. It reduces gaps between drawings and site decisions while protecting the quality of the original concept.",
    suitable: "Clients who want a streamlined process, clear responsibility, and close coordination from concept to completion.",
    includes: ["Architecture and interior design", "Preliminary budgeting", "Detailed drawings and specifications", "Construction planning", "Contractor and supplier coordination", "Site execution and quality review", "Progress communication and handover"],
    steps: ["Consult & define", "Design & estimate", "Detail & schedule", "Construct & report", "Inspect & hand over"],
    faqs: [
      { q: "Why choose Design & Build?", a: "It creates a single line of responsibility between design and execution, helping decisions move faster and reducing coordination gaps." },
      { q: "Is the price fixed from the beginning?", a: "A reliable price follows a defined scope, drawings, specifications, and site review. We first establish these clearly, then prepare the appropriate costing structure." },
    ],
  },
  {
    slug: "construction",
    title: "Construction & Execution",
    short: "Complete site execution—from planning and procurement to quality control and handover.",
    intro: "We build the project, not only coordinate it. Vrikshya takes responsibility for construction planning, procurement, trade management, site execution, workmanship, progress, and completion while protecting the approved design intent.",
    suitable: "Residential, commercial, hospitality, and institutional projects requiring accountable construction delivery and a clear path to handover.",
    includes: ["Scope and drawing review", "Construction planning and scheduling", "Material procurement", "Contractor and trade management", "Full site execution", "Quality and progress control", "Completion and handover"],
    steps: ["Confirm scope", "Plan & procure", "Mobilize site", "Build & control", "Complete & hand over"],
    faqs: [
      { q: "Can you construct from drawings prepared by another consultant?", a: "Yes, after reviewing the drawing set, specifications, site conditions, and responsibilities for missing or revised information. For the strongest continuity, Vrikshya can also provide the complete design-and-build service." },
      { q: "How do you communicate progress?", a: "The communication format is agreed at the start and may include scheduled site meetings, milestone reviews, progress photographs, and cost updates." },
    ],
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation & Remodeling",
    short: "Practical transformation of existing homes, businesses, and hospitality spaces.",
    intro: "Renovation begins with understanding what can be retained, what must change, and where investment will create the most value. We coordinate the existing condition, new design, services, materials, and staged site work.",
    suitable: "Existing homes, commercial spaces, restaurants, resorts, offices, façades, and adaptive reuse projects.",
    includes: ["Existing-condition survey", "Reuse and intervention strategy", "Layout and façade improvement", "Interior and material design", "Services coordination", "Phased execution planning", "Site execution support"],
    steps: ["Survey existing", "Prioritize changes", "Design interventions", "Plan site work", "Renovate & review"],
    faqs: [
      { q: "Can renovation happen while part of the building remains in use?", a: "Sometimes. We assess access, safety, noise, services, and sequencing before recommending a practical phased plan." },
      { q: "How do you manage unknown existing conditions?", a: "We document visible conditions and identify risk areas early. Some hidden conditions only become clear during opening-up work, so the scope should include a sensible contingency." },
    ],
  },
];

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Our process" },
  { href: "/contact", label: "Contact" },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  location: string;
  status: string;
  service: string;
  image: string;
  gallery: string[];
  summary: string;
  challenge: string;
  response: string;
  scope: string[];
};

export const projects: Project[] = [
  {
    slug: "kalanki-residence",
    title: "Kalanki Residence",
    category: "Residential",
    tags: ["Residential"],
    location: "Kalanki, Kathmandu",
    status: "Design & visualization",
    service: "Architecture & planning",
    image: "/images/projects/kalanki-main.webp",
    gallery: ["/images/projects/kalanki-main.webp", "/images/projects/kalanki-west.webp", "/images/projects/modern-floorplans.webp"],
    summary: "A contemporary family residence composed with brick, stone, shaded terraces, and generous openings.",
    challenge: "Organize a substantial residential programme while giving the building a clear identity, comfortable outdoor spaces, privacy, and balanced daylight.",
    response: "Layered volumes, deep overhangs, screened brickwork, and warm soffits create shade and texture while keeping the overall composition calm and coherent.",
    scope: ["Architectural planning", "Façade development", "Material direction", "3D visualization", "Drawing coordination"],
  },
  {
    slug: "chandragiri-residence",
    title: "Chandragiri Residence",
    category: "Residential",
    tags: ["Residential", "Construction"],
    location: "Chandragiri, Kathmandu",
    status: "Completed",
    service: "Design & build",
    image: "/images/projects/chandragiri-completed.webp",
    gallery: ["/images/projects/chandragiri-render.webp", "/images/projects/chandragiri-completed.webp"],
    summary: "A completed urban residence where exposed brick, white bands, balconies, and a screened stair volume shape the street elevation.",
    challenge: "Translate the approved design into a practical home on a compact site while coordinating structure, façade details, openings, and site execution.",
    response: "The built outcome retains the key proportions and material character of the proposal, using brickwork and strong horizontal bands to create depth and privacy.",
    scope: ["Architecture", "Design development", "Construction execution", "Material and quality control", "Project handover"],
  },
  {
    slug: "kirtipur-residence",
    title: "Kirtipur Residence",
    category: "Residential",
    tags: ["Residential", "Construction"],
    location: "Kirtipur, Kathmandu",
    status: "Completed & handed over",
    service: "Design & build",
    image: "/images/projects/kirtipur-completed.webp",
    gallery: ["/images/projects/kirtipur-render.webp", "/images/projects/kirtipur-completed.webp"],
    summary: "A narrow urban residence developed and delivered with a strong vertical composition and carefully placed daylight openings.",
    challenge: "Fit a comfortable multi-level home on a constrained plot while bringing light deep into the plan and maintaining privacy from the street.",
    response: "A tall glazed stair volume, framed openings, warm cladding, and a protected entrance create a distinctive yet practical response to the site.",
    scope: ["Architecture", "Technical drawings", "Construction", "Site coordination", "Final handover"],
  },
  {
    slug: "balkhu-residence",
    title: "Balkhu Residence",
    category: "Residential",
    tags: ["Residential", "Interiors"],
    location: "Balkhu, Kathmandu",
    status: "Design & visualization",
    service: "Architecture & interior design",
    image: "/images/projects/balkhu-exterior.webp",
    gallery: ["/images/projects/balkhu-exterior.webp", "/images/projects/balkhu-front.webp", "/images/projects/balkhu-dining.webp", "/images/projects/balkhu-bathroom.webp", "/images/projects/balkhu-bedroom-1.webp", "/images/projects/balkhu-bedroom-2.webp", "/images/projects/balkhu-bedroom-3.webp"],
    summary: "A generous family home and interior study combining warm materials, pitched roofs, verandas, and crafted living spaces.",
    challenge: "Create a cohesive architectural and interior language across a large residence with varied family, guest, and outdoor spaces.",
    response: "Stone, warm plaster, timber, natural light, and tailored furniture details connect the exterior character with comfortable, individual interior rooms.",
    scope: ["Architectural design", "Interior design", "Material palette", "Furniture direction", "3D visualization"],
  },
  {
    slug: "pharping-residence",
    title: "Pharping Residence",
    category: "Residential",
    tags: ["Residential"],
    location: "Pharping, Kathmandu",
    status: "Design & visualization",
    service: "Architecture & planning",
    image: "/images/projects/pharping.webp",
    gallery: ["/images/projects/pharping.webp", "/images/projects/modern-floorplans.webp"],
    summary: "A compact residence designed around an efficient footprint, layered balconies, and durable brick and plaster finishes.",
    challenge: "Balance family requirements, privacy, daylight, and open terraces within a narrow urban frontage.",
    response: "A simple planning grid and carefully framed openings give each level useful light and outdoor space while maintaining a composed street elevation.",
    scope: ["Space planning", "Architecture", "Façade design", "3D visualization", "Floor-plan development"],
  },
  {
    slug: "dakshinkali-residence",
    title: "Dakshinkali Residence",
    category: "Residential",
    tags: ["Residential"],
    location: "Dakshinkali, Kathmandu",
    status: "Design & visualization",
    service: "Architecture & planning",
    image: "/images/projects/dakshinkali.webp",
    gallery: ["/images/projects/dakshinkali.webp"],
    summary: "A garden residence with softened corners, pitched roofs, terraces, and a welcoming relationship to the landscape.",
    challenge: "Develop a distinctive multi-level home that remains warm and domestic within a generous green setting.",
    response: "Pitched roof forms, brick accents, rounded openings, and planted terraces create a relaxed architectural identity with strong indoor-outdoor connections.",
    scope: ["Architecture", "Site response", "Façade development", "Material direction", "3D visualization"],
  },
  {
    slug: "sanepa-residence",
    title: "Sanepa Residence",
    category: "Residential",
    tags: ["Residential"],
    location: "Sanepa, Lalitpur",
    status: "Design & visualization",
    service: "Architecture & planning",
    image: "/images/projects/sanepa.webp",
    gallery: ["/images/projects/sanepa.webp"],
    summary: "A compact contemporary home using brick, charcoal frames, and a rooftop pergola to give a restrained façade depth and rhythm.",
    challenge: "Use a narrow frontage efficiently while bringing daylight into the stair and living spaces without compromising privacy.",
    response: "Tall stair glazing and a clear frame-and-infill composition make the house feel open, ordered, and proportionate to its urban setting.",
    scope: ["Architectural planning", "Façade design", "Daylight studies", "Material direction", "3D visualization"],
  },
  {
    slug: "budanilkantha-residence",
    title: "Budanilkantha Residence",
    category: "Residential",
    tags: ["Residential"],
    location: "Budanilkantha, Kathmandu",
    status: "Design & visualization",
    service: "Architecture & planning",
    image: "/images/projects/budanilkantha.webp",
    gallery: ["/images/projects/budanilkantha.webp"],
    summary: "A contemporary urban residence defined by a tall glazed stair, timber screens, framed balconies, and integrated landscape lighting.",
    challenge: "Create privacy and visual depth on a compact street-facing plot while retaining generous light across multiple levels.",
    response: "Layered frames, vertical glazing, controlled openings, and warm lighting balance a strong street presence with comfortable interior conditions.",
    scope: ["Architecture", "Façade development", "Lighting intent", "Material palette", "3D visualization"],
  },
  {
    slug: "nepalgunj-residence",
    title: "Nepalgunj Residence",
    category: "Residential",
    tags: ["Residential"],
    location: "Nepalgunj, Banke",
    status: "Design & visualization",
    service: "Architecture & planning",
    image: "/images/projects/nepalgunj.webp",
    gallery: ["/images/projects/nepalgunj.webp"],
    summary: "A climate-conscious residence combining a sheltered entrance, balcony, brick massing, and a distinctive sloped-roof volume.",
    challenge: "Create shade and comfortable transitions for a warm climate while giving the house a contemporary identity on an open plot.",
    response: "Deep roof edges, recessed openings, brick masses, and covered outdoor zones help moderate sun exposure while shaping the family spaces.",
    scope: ["Climate-responsive planning", "Architecture", "Façade design", "Material direction", "3D visualization"],
  },
  {
    slug: "hotel-harmony",
    title: "Hotel Harmony",
    category: "Hospitality",
    tags: ["Hospitality", "Interiors"],
    location: "Nepal",
    status: "Interior design",
    service: "Interior design & visualization",
    image: "/images/projects/hotel-harmony-1.webp",
    gallery: ["/images/projects/hotel-harmony-1.webp", "/images/projects/hotel-harmony-2.webp"],
    summary: "A hospitality reception and lounge concept shaped by warm timber, integrated lighting, soft forms, and a clear guest arrival sequence.",
    challenge: "Bring the reception, waiting, lighting, identity, and circulation together within one welcoming and memorable interior.",
    response: "Layered timber details, soft green seating, warm accent light, and a sculpted reception desk establish a comfortable contemporary character.",
    scope: ["Space planning", "Reception design", "Furniture and finish direction", "Lighting concept", "3D visualization"],
  },
  {
    slug: "mokshyadham-interiors",
    title: "Mokshyadham Interiors",
    category: "Hospitality",
    tags: ["Hospitality", "Interiors"],
    location: "Nepal",
    status: "Design development",
    service: "Interior design & coordination",
    image: "/images/projects/mokshyadham-lobby.webp",
    gallery: ["/images/projects/mokshyadham-lobby.webp", "/images/projects/mokshyadham-interior.webp", "/images/projects/mokshyadham-detail.webp", "/images/projects/mokshyadham-exterior.webp"],
    summary: "A warm hospitality lobby and reception study rooted in carved timber, brick, stone, greenery, and Nepali craft references.",
    challenge: "Create a welcoming arrival space with a strong local identity while keeping reception, waiting, circulation, and service areas clear.",
    response: "Crafted timber frames, latticework, brass bells, terracotta tile, green upholstery, and soft light bring atmosphere without overwhelming the daily function.",
    scope: ["Lobby planning", "Reception design", "Material and furniture direction", "Lighting coordination", "3D visualization"],
  },
  {
    slug: "meditation-centre",
    title: "Meditation Centre",
    category: "Construction",
    tags: ["Construction"],
    location: "Kathmandu Valley",
    status: "Under construction",
    service: "Design & build",
    image: "/images/projects/meditation-construction-1.webp",
    gallery: ["/images/projects/meditation-construction-1.webp", "/images/projects/meditation-construction-2.webp", "/images/projects/meditation-roof.webp"],
    summary: "An active design-and-build project with curved masonry, stone foundations, roof work, and carefully managed site execution.",
    challenge: "Deliver carefully shaped masonry and roof elements while coordinating real site conditions, workmanship, materials, and sequencing.",
    response: "Vrikshya carries the design intent into construction, managing the curved forms, openings, foundation work, roofing, materials, and workmanship as the project advances.",
    scope: ["Architectural design", "Construction planning", "Site execution", "Material and workmanship control", "Progress documentation"],
  },
];

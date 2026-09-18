import portrait from "../assets/mjx-portrait.webp";

const disciplines = [
  {
    number: "01",
    title: "Agentic systems",
    body: "AI workflows and product experiences designed around dependable tool use, thoughtful guardrails, and real human context.",
    tags: ["LLM workflows", "RAG", "Evaluation"],
  },
  {
    number: "02",
    title: "Product engineering",
    body: "End-to-end digital products with sturdy backend foundations and interfaces that stay out of the user’s way.",
    tags: ["React / Next.js", "Node / Go / Java", "System design"],
  },
  {
    number: "03",
    title: "Platform delivery",
    body: "Production-minded delivery across data, integrations, deployment, and the operational details that make software last.",
    tags: ["PostgreSQL", "Docker", "Cloud / CI"],
  },
];

export default function AboutMe() {
  return (
    <section className="section-shell about-section" id="about">
      <div className="about-lead">
        <p className="section-kicker">How I work</p>
        <h2>Engineering with a product pulse.</h2>
      </div>

      <div className="about-story">
        <div className="portrait-wrap">
          <img src={portrait} alt="Mrityunjay Shrivastava" loading="lazy" />
          <span>Builder · Collaborator · Trekker</span>
        </div>
        <div className="story-copy">
          <p className="story-large">
            I turn uncertain ideas into clear, dependable products — with enough technical depth to make them scale and enough empathy to make them useful.
          </p>
          <p>
            I currently build software at Hughes Systique Corporation, with a focus on agentic AI platforms and modern product systems. Before that, I ran a small web studio, shipped work for international clients, and learned that communication is every bit as important as code.
          </p>
          <p>
            My preferred partnerships are close, candid, and outcome-led. I ask questions early, write things down, and stay accountable from the first sketch through production.
          </p>
        </div>
      </div>

      <div className="discipline-grid">
        {disciplines.map((discipline) => (
          <article className="discipline-card" key={discipline.title}>
            <span>{discipline.number}</span>
            <h3>{discipline.title}</h3>
            <p>{discipline.body}</p>
            <div>{discipline.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

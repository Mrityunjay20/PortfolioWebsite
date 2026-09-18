import { Link } from "react-router-dom";
import { githubLink, linkedinLink } from "../utils/links";
import HeroCanvas from "./three/HeroCanvas";

const proofPoints = [
  ["12+", "client projects"],
  ["04", "international clients"],
  ["02", "Himalayan trails"],
];

export default function HeroSection() {
  return (
    <main className="hero-shell">
      <div className="hero-grid" aria-hidden="true" />
      <section className="hero-copy" aria-labelledby="hero-title">
        <p className="eyebrow">
          <span className="status-dot" /> Software engineer · Applied AI · India
        </p>
        <h1 id="hero-title">
          I build ambitious software that feels <em>effortless.</em>
        </h1>
        <p className="hero-intro">
          I’m Mrityunjay — a product-minded engineer building agentic AI platforms,
          resilient backends, and digital products for teams that care about craft.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="mailto:mjxworks@gmail.com">
            Start a project <span aria-hidden="true">↗</span>
          </a>
          <Link className="button button-quiet" to="/projects">
            Explore my work <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="hero-socials" aria-label="Social profiles">
          <a href={githubLink} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={linkedinLink} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </section>

      <aside className="hero-visual" aria-label="Interactive three-dimensional generative form">
        <div className="visual-meta visual-meta-top">
          <span>Digital systems</span>
          <span>01 / 03</span>
        </div>
        <HeroCanvas />
        <div className="visual-caption">
          <span className="coordinate">28.4595° N · 77.0266° E</span>
          <span>Drag to explore</span>
        </div>
      </aside>

      <div className="proof-strip" aria-label="Selected facts">
        {proofPoints.map(([value, label]) => (
          <div className="proof-point" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
        <p className="proof-note">Available for thoughtful remote collaborations worldwide.</p>
      </div>
    </main>
  );
}

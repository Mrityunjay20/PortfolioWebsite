import ContactMe from "../components/ContactMe";
import { linkedinLink } from "../utils/links";

const timeline = [
  {
    period: "Jan 2025 — now",
    company: "Hughes Systique Corporation",
    role: "Software Engineer",
    location: "Gurugram · India",
    body: "Building modern software systems across backend, product, and agentic AI work in an enterprise engineering environment.",
    stack: ["Go", "Node.js", "React", "PostgreSQL", "Applied AI"],
  },
  {
    period: "Jan — Dec 2024",
    company: "Hughes Systique Corporation",
    role: "Software Engineer Intern",
    location: "Gurugram · India",
    body: "Worked across production-oriented full-stack systems and built foundations in enterprise Java, Spring, React, and relational data.",
    stack: ["Java", "Spring Boot", "React", "MySQL"],
  },
  {
    period: "Oct 2022 — May 2023",
    company: "Tangle",
    role: "Software Development Intern",
    location: "Remote",
    body: "Shipped product features across a JavaScript stack while learning how a small remote team moves from idea to release.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
];

const leadership = [
  ["Vice Chairperson", "MUJ ACM SIGBED", "Led a 60+ member team and helped deliver Jaipur-scale IoT events with 800+ participants."],
  ["Student Lead", "ACM COMPUTE", "Directed media delivery for ACM India’s flagship computer-science education conference."],
  ["Founder", "Iniseria", "Built a student web studio that delivered 12+ projects, including four international client engagements."],
];

export default function ExperiencePage() {
  return (
    <main className="page-shell experience-page">
      <header className="page-intro">
        <p className="section-kicker">Experience · The work behind the work</p>
        <h1>Built by staying close to the problem.</h1>
        <p>A concise record of the teams, systems, and communities that shaped how I engineer.</p>
      </header>

      <section className="timeline" aria-label="Professional experience">
        {timeline.map((item, index) => (
          <article className="timeline-row" key={`${item.company}-${item.period}`}>
            <span className="timeline-number">0{index + 1}</span>
            <time>{item.period}</time>
            <div className="timeline-main">
              <p>{item.role}</p>
              <h2>{item.company}</h2>
              <small>{item.location}</small>
            </div>
            <div className="timeline-detail">
              <p>{item.body}</p>
              <div>{item.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </div>
          </article>
        ))}
      </section>

      <section className="leadership-section">
        <div className="section-heading split-heading">
          <div><p className="section-kicker">Leadership</p><h2>Ownership beyond a job title.</h2></div>
          <p>I learned to lead in student communities, client rooms, and small teams where clarity creates momentum.</p>
        </div>
        <div className="leadership-grid">
          {leadership.map(([role, organisation, description], index) => (
            <article key={role}>
              <span>0{index + 1}</span><p>{role}</p><h3>{organisation}</h3><small>{description}</small>
            </article>
          ))}
        </div>
        <a className="text-link" href={linkedinLink} target="_blank" rel="noreferrer">Full professional record on LinkedIn <span>↗</span></a>
      </section>
      <ContactMe />
    </main>
  );
}

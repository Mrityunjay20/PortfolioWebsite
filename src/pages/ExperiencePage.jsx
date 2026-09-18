import ContactMe from "../components/ContactMe";
import { linkedinLink } from "../utils/links";

const timeline = [
  {
    period: "Jul 2026 — present",
    company: "Hughes Systique Corporation",
    role: "Engineer | Agentic Platform",
    location: "Gurugram · On-site",
    body: "Designed an enterprise LLM gateway that gives agentic applications secure, OpenAI-compatible access to multiple model providers, with central guardrails, PII redaction, dynamic routing, service authentication, configuration caching, and request observability.",
    stack: ["Python", "FastAPI", "LLM Gateway", "Guardrails", "Observability"],
  },
  {
    period: "Dec 2024 — Jun 2026",
    company: "Hughes Systique Corporation",
    role: "Associate Software Engineer",
    location: "Gurugram · On-site",
    body: "Developed software-defined communication systems for the Indian Defence Forces, focusing on waveform modelling and simulation. Built tooling for model-driven waveform development aligned with IRSA and SCA 4.1 standards.",
    stack: ["Core Java", "Waveform Modelling", "IRSA", "SCA 4.1"],
  },
  {
    period: "Aug — Dec 2024",
    company: "Hughes Systique Corporation",
    role: "Graduate Engineer Trainee",
    location: "Gurugram · On-site",
    body: "Helped modernise critical legacy applications: validated an Oracle-to-AlloyDB migration, supported a move to Google Cloud, built Bitbucket CI/CD pipelines, and created an internal React tool that turned a large codebase into interactive visual maps.",
    stack: ["Java", "React", "AlloyDB", "Google Cloud", "Bitbucket CI/CD"],
  },
  {
    period: "Apr — Jul 2024",
    company: "Indie Stori",
    role: "Web Developer · Freelance",
    location: "Gurugram · Remote",
    body: "Led the company’s digital transformation by independently delivering a full-stack commerce platform. Integrated payments, shipping, email, and order tracking to automate 90% of core workflows and support 800+ daily active users.",
    stack: ["React", "NestJS", "AWS", "Razorpay", "Shiprocket"],
  },
  {
    period: "Oct 2022 — May 2023",
    company: "Tangle",
    role: "Software Engineer Intern",
    location: "Delhi · Remote",
    body: "Built the company’s first service website end to end with the MERN stack, including its interfaces, APIs, and data architecture. The product handled peaks of 15,000 monthly users and added real-time collaboration through WebSockets.",
    stack: ["React", "Tailwind CSS", "Node.js", "MongoDB", "WebSockets"],
  },
  {
    period: "Dec 2021 — Feb 2022",
    company: "PsychX",
    role: "Social Media Designer · Intern",
    location: "Remote",
    body: "Created social media design work for a psychology-focused platform, building early experience in visual storytelling, clear communication, and digital brand systems.",
    stack: ["Figma", "Canva", "Visual Design"],
  },
];

const leadership = [
  ["Vice Chairperson · 2022—23", "MUJ ACM SIGBED", "Led a 60+ member team across planning, logistics, sponsorships, and delivery for Jaipur-scale IoT events that reached 2,800+ participants."],
  ["Head of Research · 2021—22", "MUJ ACM SIGBED", "Ran workshops on emerging IoT systems, built university leadership collaborations, and coordinated teams during RoboFest 2022."],
  ["Social Media Head · 2021—22", "MUJ ACM", "Grew the chapter’s Instagram reach 40× to 80,000 monthly impressions and tripled the audience to 1,800 followers."],
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

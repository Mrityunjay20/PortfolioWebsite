import { useEffect, useState } from "react";
import { githubLink } from "../utils/links";

const PINNED_ENDPOINT = "https://pinned.berrysauce.dev/get/Mrityunjay20";
const REPOS_ENDPOINT = "https://api.github.com/users/Mrityunjay20/repos?sort=updated&per_page=6";

const fallbackProjects = [
  { name: "Golang-Todoer-CLI-Tool", description: "A command-line task manager built while exploring pragmatic Go patterns.", language: "Go", stars: 0 },
  { name: "PortfolioWebsite", description: "The source behind this interactive React and Three.js portfolio.", language: "JavaScript", stars: 1 },
  { name: "LeetCode_ScoreCard", description: "A lightweight embeddable component for visualising LeetCode progress.", language: "JavaScript", stars: 2 },
];

function normalise(project) {
  return {
    name: project.name,
    description: project.description || "An open-source experiment from my engineering notebook.",
    language: project.language || "Code",
    languageColor: project.languageColor,
    stars: project.stars ?? project.stargazers_count ?? 0,
    forks: project.forks ?? project.forks_count ?? 0,
    url: project.html_url || `https://github.com/${project.author || "Mrityunjay20"}/${project.name}`,
  };
}

export default function GithubProjects({ compact = false }) {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;

    async function loadPinnedProjects() {
      try {
        const response = await fetch(PINNED_ENDPOINT);
        if (!response.ok) throw new Error("Pinned projects unavailable");
        const data = await response.json();
        if (active) {
          setProjects(data.map(normalise));
          setStatus("ready");
        }
      } catch {
        try {
          const response = await fetch(REPOS_ENDPOINT);
          if (!response.ok) throw new Error("GitHub unavailable");
          const data = await response.json();
          if (active) {
            setProjects(data.map(normalise));
            setStatus("ready");
          }
        } catch {
          if (active) {
            setProjects(fallbackProjects.map(normalise));
            setStatus("fallback");
          }
        }
      }
    }

    loadPinnedProjects();
    return () => { active = false; };
  }, []);

  const visibleProjects = compact ? projects.slice(0, 3) : projects;

  return (
    <section className={`section-shell github-section${compact ? " compact" : ""}`}>
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker">Open work · Live from GitHub</p>
          <h2>Experiments in public.</h2>
        </div>
        <p>The cards below follow whatever is pinned on my GitHub profile, so this corner stays current automatically.</p>
      </div>

      <div className="github-grid" aria-live="polite">
        {status === "loading" && [0, 1, 2].map((item) => <div className="repo-card repo-skeleton" key={item} />)}
        {status !== "loading" && visibleProjects.map((project) => (
          <article className="repo-card" key={project.name}>
            <a href={project.url} target="_blank" rel="noreferrer">
              <div className="repo-topline">
                <span className="repo-icon" aria-hidden="true">⌁</span>
                <span>Public repository</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{project.name.replaceAll("-", " ")}</h3>
              <p>{project.description}</p>
              <div className="repo-meta">
                <span><i style={{ background: project.languageColor || "#b8f24b" }} />{project.language}</span>
                <span>★ {project.stars}</span>
                <span>⑂ {project.forks}</span>
              </div>
            </a>
          </article>
        ))}
      </div>

      <a className="text-link" href={githubLink} target="_blank" rel="noreferrer">
        Browse all repositories <span>↗</span>
      </a>
    </section>
  );
}

import { NavLink } from "react-router-dom";
import { resumeLink } from "../utils/links";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
];

export default function NavBar() {
  return (
    <header className="site-header">
      <NavLink className="brand-mark" to="/" aria-label="Mrityunjay Shrivastava — home">
        <span>MJ</span>
        <span className="brand-pulse" aria-hidden="true" />
      </NavLink>

      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <a className="availability-link" href={resumeLink} target="_blank" rel="noreferrer">
        Résumé <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

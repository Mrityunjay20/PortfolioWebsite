import ContactMe from "../components/ContactMe";
import FeaturedWork from "../components/FeaturedWork";
import GithubProjects from "../components/GithubProjects";

export default function ProjectsPage() {
  return (
    <main className="page-shell projects-page">
      <header className="page-intro">
        <p className="section-kicker">Selected projects · Digital products and experiments</p>
        <h1>Work that earns its place in the world.</h1>
        <p>Client platforms, community products, and open-source explorations — each shaped around a real need.</p>
      </header>
      <FeaturedWork />
      <GithubProjects />
      <ContactMe />
    </main>
  );
}

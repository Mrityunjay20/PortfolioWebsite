import AboutMe from "../components/About";
import ContactMe from "../components/ContactMe";
import FeaturedWork from "../components/FeaturedWork";
import GithubProjects from "../components/GithubProjects";
import HeroSection from "../components/HeroSection";
import TrailStory from "../components/TrailStory";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedWork limit={3} />
      <AboutMe />
      <TrailStory />
      <GithubProjects compact />
      <ContactMe />
    </>
  );
}

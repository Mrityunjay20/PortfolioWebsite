import AboutMe from "../components/About";
import ContactMe from "../components/ContactMe";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";


export default function HomePage() {
  return (
    <div className="min-h-screen max-h-max bg-black">
      <HeroSection />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

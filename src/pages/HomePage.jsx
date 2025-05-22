import AboutMe from "../components/About";
import ContactMe from "../components/ContactMe";
import HeroSection from "../components/HeroSection";


export default function HomePage() {
  return (
    <div className="min-h-screen max-h-max bg-black">
      <HeroSection />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

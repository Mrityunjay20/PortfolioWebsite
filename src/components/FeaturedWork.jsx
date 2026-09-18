import { Link } from "react-router-dom";
import indiestoriImage from "../assets/projectss/indiestori-card.webp";
import veronicaImage from "../assets/projectss/veronica.png";
import sigbedImage from "../assets/projectss/sigbed-card.webp";

const work = [
  {
    index: "01",
    title: "KuKi Solutions",
    kind: "ESG intelligence platform",
    description: "An end-to-end compliance workflow built with an early-stage team — turning dense ESG reporting work into a clearer, more scalable digital system.",
    result: "Product design · Full-stack engineering · AI workflows",
    link: "https://kuki.co.in/",
    image: null,
    accent: "lime",
  },
  {
    index: "02",
    title: "IndieStori",
    kind: "Commerce infrastructure",
    description: "A complete e-commerce operation for a Himalayan brand, including storefront, admin tools, payments, shipping, email, and order tracking.",
    result: "React · NestJS · MySQL · VPS delivery",
    link: "https://indiestori.com/",
    image: indiestoriImage,
    accent: "teal",
  },
  {
    index: "03",
    title: "Veronica",
    kind: "Personal intelligence dashboard",
    description: "A private second-brain experience that brings tasks, habits, mood, and personal finance into one calm, responsive workspace.",
    result: "Next.js · Supabase · Product systems",
    link: "https://veronica.mjxsh.in/",
    image: veronicaImage,
    accent: "bone",
  },
  {
    index: "04",
    title: "ACM SIGBED",
    kind: "Award-winning community platform",
    description: "The digital home for a 60+ member technical community and events that reached more than 800 participants.",
    result: "Next.js · Supabase · National ACM award",
    link: "https://mujsigbed.acm.org/",
    image: sigbedImage,
    accent: "indigo",
  },
];

export default function FeaturedWork({ limit }) {
  const visibleWork = typeof limit === "number" ? work.slice(0, limit) : work;

  return (
    <section className="section-shell work-section" id="work">
      <div className="section-heading">
        <p className="section-kicker">Selected work · 2022—now</p>
        <h2>Built around outcomes, not feature lists.</h2>
        <p>From an ambiguous first conversation to a system people can rely on — I like owning the whole arc.</p>
      </div>

      <div className="work-grid">
        {visibleWork.map((item) => (
          <article className={`work-card work-${item.accent}`} key={item.title}>
            <a href={item.link} target="_blank" rel="noreferrer" aria-label={`View ${item.title}`}>
              <div className="work-card-top">
                <span>{item.index}</span>
                <span>{item.kind}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div className="work-art">
                {item.image ? (
                  <img src={item.image} alt={`${item.title} product interface`} loading="lazy" />
                ) : (
                  <div className="kuki-mark" aria-hidden="true">
                    <span>K</span><i /><span>AI</span>
                  </div>
                )}
              </div>
              <div className="work-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.result}</span>
              </div>
            </a>
          </article>
        ))}
      </div>

      {limit && (
        <Link className="text-link" to="/projects">See the complete project archive <span>→</span></Link>
      )}
    </section>
  );
}

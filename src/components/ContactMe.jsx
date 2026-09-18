import { githubLink, linkedinLink } from "../utils/links";

export default function ContactMe() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
      <p className="section-kicker">Have an ambitious brief?</p>
      <h2>Let’s make it feel inevitable.</h2>
      <p>
        I’m open to remote product engineering, applied AI work, and focused collaborations with teams anywhere in the world.
      </p>
      <a className="button button-primary contact-button" href="mailto:mjxworks@gmail.com">
        mjxworks@gmail.com <span aria-hidden="true">↗</span>
      </a>
      <div className="contact-links">
        <a href={linkedinLink} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={githubLink} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </section>
  );
}

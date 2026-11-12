import { PROOF } from "../data";
import { hero } from "../assets/img";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Sri Lanka {" "}·{" "} Portfolio 2026</p>
          <h1>Haamid<br />Hassan</h1>
          <p className="positioning">
            Marketing Strategist <i>|</i> Media &amp; Creative Professional <i>|</i> Entrepreneur
          </p>
          <p className="tagline">Building Brands. Creating Stories. Making an Impact.</p>
          <p className="lead">I bring together strategic thinking, creative direction and communication to build brands, develop ideas and create meaningful experiences. From marketing strategy and brand development to media production, modelling and acting, my work reflects a passion for business, creativity and continuous growth.</p>
          <div className="btn-row">
            <a className="btn btn-solid" href="#projects">Explore My Work</a>
            <a className="btn btn-ghost" href="#contact">Get in Touch</a>
          </div>
        </div>
        <figure className="hero-figure">
          <img src={hero} alt="Haamid Hassan in a black tuxedo and bow tie, leaning against a wooden panel" width="1100" height="1379" fetchPriority="high" />
        </figure>
      </div>
      <div className="wrap">
        <ul className="proof">
          {PROOF.map(([title, text]) => (
            <li key={title}><strong>{title}</strong><span>{text}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

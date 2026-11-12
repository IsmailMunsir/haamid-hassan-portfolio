import { ABOUT_PARAS, PILLARS } from "../data";
import { graduation } from "../assets/img";

export default function About() {
  return (
    <section className="section section-paper" id="about">
      <div className="wrap about-grid">
        <div className="about-media reveal">
          <img src={graduation} alt="Haamid Hassan at his graduation ceremony, holding his certificate" loading="lazy" width="1000" height="1333" />
          <span className="media-tag">BSc (Hons) · Anglia Ruskin University</span>
        </div>
        <div className="about-copy">
          <p className="kicker reveal">About</p>
          <h2 className="reveal">Business-minded. <em>Creatively driven.</em></h2>
          {ABOUT_PARAS.map((p) => (
            <p className="reveal" key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="pillars reveal">
            {PILLARS.map(([h, t]) => (
              <div key={h}><h3>{h}</h3><p>{t}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

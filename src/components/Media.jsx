import { useEffect, useState } from "react";
import { ACHIEVEMENTS, MEDIA_EXPERIENCE, CREDITS, MEASUREMENTS, SHOWREEL_URL } from "../data";
import { mrFitness, editorialTee, fifthFrame, lounge } from "../assets/img";

const GALLERY = [
  { src: editorialTee, credit: "Photo: Buwanesh de Silva", alt: "Editorial portrait of Haamid Hassan in a white tee and olive cargo trousers", label: "Open photo: editorial portrait", w: 1100, h: 1650 },
  { src: fifthFrame, credit: "Photo: The Fifth Frame", alt: "Studio portrait of Haamid Hassan in a black blazer under warm light", label: "Open photo: studio portrait", w: 1000, h: 1417 },
  { src: lounge, credit: null, alt: "Haamid Hassan seated in a leather armchair in a white shirt with an open collar", label: "Open photo: lounge portrait", w: 1000, h: 1500 },
];

function Showreel() {
  if (!SHOWREEL_URL) {
    return (
      <div className="showreel reveal" id="showreel">
        <div className="showreel-ph">
          <span className="play" aria-hidden="true"></span>
          <p>Showreel</p>
          <small>Acting, commercial and runway highlights. Coming soon.</small>
        </div>
      </div>
    );
  }
  const isFile = /\.(mp4|webm)$/i.test(SHOWREEL_URL);
  return (
    <div className="showreel reveal" id="showreel">
      {isFile ? (
        <video src={SHOWREEL_URL} controls preload="metadata" />
      ) : (
        <iframe
          src={SHOWREEL_URL}
          title="Haamid Hassan showreel"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default function Media() {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (!photo) return;
    const onKey = (e) => e.key === "Escape" && setPhoto(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [photo]);

  return (
    <section className="section section-ink" id="media">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker reveal">Media, Modelling &amp; Acting</p>
          <h2 className="reveal">Beyond Business. <em>Into the World of Media &amp; Creativity.</em></h2>
          <p className="section-intro reveal">Alongside my work in marketing and business, I have built professional experience in modelling, acting, presenting, announcing and voice-over performance. My work spans fashion, commercial campaigns, television commercials, short films, runway productions and international screen projects.</p>
        </div>

        <div className="feature">
          <figure className="feature-img reveal">
            <img src={mrFitness} alt="Haamid Hassan on stage wearing the Mister Fitness sash at Mister Sri Lanka 2025" loading="lazy" width="1100" height="1557" />
          </figure>
          <div className="feature-copy">
            <h3 className="sub-title reveal">Achievements &amp; recognition</h3>
            <ul className="timeline">
              {ACHIEVEMENTS.map(([year, rank, title]) => (
                <li className="reveal" key={title}>
                  <time>{year}</time>
                  <div><b>{rank}</b> {title}</div>
                </li>
              ))}
            </ul>
            <p className="note reveal">Also a multiple-time winner of school inter-house competitions in singing, short film and air rifle shooting.</p>

            <h3 className="sub-title reveal">Media experience</h3>
            <ul className="ticks reveal">
              {MEDIA_EXPERIENCE.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>

        <h3 className="sub-title reveal">Selected credits</h3>
        <div className="credits">
          {CREDITS.map(([title, rows]) => (
            <div className="credit-col reveal" key={title}>
              <h4>{title}</h4>
              <ul>
                {rows.map(([year, name]) => (
                  <li key={year + name}><span>{year}</span>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="sub-title reveal">Gallery</h3>
        <div className="gallery">
          {GALLERY.map((g) => (
            <button className="g-item reveal" key={g.src} aria-label={g.label} onClick={() => setPhoto(g)}>
              <img src={g.src} alt={g.alt} loading="lazy" width={g.w} height={g.h} />
              {g.credit && <span>{g.credit}</span>}
            </button>
          ))}
        </div>

        <div className="media-lower">
          <Showreel />
          <aside className="card reveal">
            <h4>Model profile</h4>
            <dl className="stats">
              {MEASUREMENTS.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            <h4>Professional policy</h4>
            <p>Open to fashion, editorial, commercial and runway concepts. I do not take part in couple-themed (love or romance) shoots or nude / semi-nude shoots, a personal choice that lets me give my best to every other project.</p>
          </aside>
        </div>
      </div>

      {photo && (
        <div className="lightbox" onClick={() => setPhoto(null)}>
          <button className="lb-close" aria-label="Close photo" autoFocus onClick={() => setPhoto(null)}>×</button>
          <img src={photo.src} alt={photo.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}

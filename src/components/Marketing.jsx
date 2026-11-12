import { SERVICES, CLIENTS, PROCESS } from "../data";

export default function Marketing() {
  return (
    <section className="section section-ink" id="marketing">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker reveal">Marketing &amp; Brand Strategy</p>
          <h2 className="reveal">Turning Business Goals <em>Into Brand Growth.</em></h2>
          <p className="section-intro reveal">I develop marketing strategies and creative solutions that help businesses strengthen their brand identity, connect with their target audiences and work toward business objectives. My approach combines strategic planning, audience understanding, creative communication and practical execution.</p>
        </div>

        <h3 className="sub-title reveal">Services</h3>
        <ul className="services">
          {SERVICES.map((s, i) => (
            <li className="reveal" key={s}><span className="num">{String(i + 1).padStart(2, "0")}</span>{s}</li>
          ))}
        </ul>

        <h3 className="sub-title reveal">Client &amp; project experience</h3>
        <div className="clients">
          {CLIENTS.map((c) => (
            <article className="client reveal" key={c.name}>
              <p className="client-meta">{c.meta}</p>
              <h4>{c.name}</h4>
              <p className="client-role">{c.role}</p>
              <p>{c.text}</p>
            </article>
          ))}
        </div>

        <h3 className="sub-title reveal">How I work</h3>
        <ol className="process">
          {PROCESS.map(([b, s]) => (
            <li className="reveal" key={b}><b>{b}</b><span>{s}</span></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

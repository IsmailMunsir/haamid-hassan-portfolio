import { CONTACT, TOPICS } from "../data";

const mailto = (subject) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent("Enquiry: " + subject)}`;

export default function Contact() {
  const social = [
    ["Instagram", CONTACT.instagram],
    ["Facebook", CONTACT.facebook],
    ["TikTok", CONTACT.tiktok],
  ];

  return (
    <section className="section section-ink contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <p className="kicker reveal">Contact</p>
          <h2 className="reveal">Let’s build something <em>worth remembering.</em></h2>
          <p className="reveal">For marketing and brand projects, creative collaborations, or modelling, acting and presenting bookings, get in touch and I’ll respond personally.</p>
          <ul className="contact-list reveal">
            <li><span>Email</span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><span>Phone</span><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
            {social.map(([name, s]) => (
              <li key={name}>
                <span>{name}</span>
                <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="connect reveal">
          <h3>Start a conversation</h3>
          <p className="connect-note">Choose a topic and your email app opens with the subject ready.</p>
          {TOPICS.map((t) => (
            <a className="topic" href={mailto(t)} key={t}>
              <span>{t}</span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          ))}
          <div className="btn-row">
            <a className="btn btn-solid" href={`mailto:${CONTACT.email}`}>Email Haamid</a>
            <a className="btn btn-ghost" href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

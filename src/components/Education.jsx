import { EDUCATION, SKILLS, LEADERSHIP } from "../data";

export default function Education() {
  return (
    <section className="section section-paper" id="education">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker reveal">Education &amp; Qualifications</p>
          <h2 className="reveal">Business foundations. <em>Technical depth.</em></h2>
        </div>

        <ul className="edu">
          {EDUCATION.map(([title, school]) => (
            <li className="reveal" key={title}>
              <div><h3>{title}</h3><p>{school}</p></div>
            </li>
          ))}
        </ul>

        <div className="two-col">
          <div className="reveal">
            <h3 className="sub-title dark">Skills &amp; interests</h3>
            <ul className="pills">
              {SKILLS.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="reveal">
            <h3 className="sub-title dark">Leadership &amp; volunteering</h3>
            <ul className="lead-list">
              {LEADERSHIP.map(([role, org]) => (
                <li key={org}><b>{role}</b> {org}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

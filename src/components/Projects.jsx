import { useState } from "react";
import { FILTERS, PROJECTS } from "../data";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  return (
    <section className="section section-cream" id="projects">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker reveal">Portfolio &amp; Projects</p>
          <h2 className="reveal">Selected <em>work.</em></h2>
          <p className="section-intro reveal">Marketing engagements, screen work and creative productions. Detailed case studies and approved visuals are shared on request.</p>
        </div>

        <div className="filters reveal" role="tablist" aria-label="Filter projects">
          {FILTERS.map(([key, label]) => (
            <button
              key={key}
              className={"chip" + (filter === key ? " is-active" : "")}
              role="tab"
              aria-selected={filter === key}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {PROJECTS.map((p) => (
            <article
              className="project reveal"
              key={p.title}
              hidden={filter !== "all" && !p.cat.split(" ").includes(filter)}
            >
              <p className="tag">{p.tag}</p>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <p className="meta">{p.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

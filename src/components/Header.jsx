import { useEffect, useState } from "react";
import { NAV } from "../data";
import useActiveSection from "../hooks/useActiveSection";

const IDS = NAV.map(([id]) => id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header" id="top">
      <div className="wrap header-inner">
        <a href="#home" className="brand" aria-label="Haamid Hassan – home">
          <span className="brand-mark">H</span>
          <span className="brand-name">Haamid Hassan</span>
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
        </button>
        <nav id="site-nav" className={"site-nav" + (open ? " open" : "")} aria-label="Main">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "is-current" : undefined} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Get in Touch</a>
        </nav>
      </div>
    </header>
  );
}

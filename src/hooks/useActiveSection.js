import { useEffect, useState } from "react";

// Returns the id of the section currently in the middle of the viewport.
export default function useActiveSection(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const s = document.getElementById(id);
      if (s) spy.observe(s);
    });
    return () => spy.disconnect();
  }, [ids]);
  return active;
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Marketing from "./components/Marketing";
import Projects from "./components/Projects";
import Media from "./components/Media";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Marketing />
        <Projects />
        <Media />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

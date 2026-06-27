import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Products from "./components/Products";
import Manufacturing from "./components/Manufacturing";
import Capacity from "./components/Capacity";
import Values from "./components/Values";
import Why from "./components/Why";
import Clients from "./components/Clients";
import Future from "./components/Future";
import Section from "./components/Section";
import Footer from "./components/Footer";

/**
 * Section scaffolding — ordered exactly as specified.
 * These are intentionally placeholder shells; content is built in later steps.
 */
const SECTIONS = [
  {
    id: "contact",
    index: "10",
    eyebrow: "Contact",
    title: "Let's build something that lasts",
    placeholder: "Contact details and the project enquiry form will live here.",
    tone: "warm" as const,
  },
];

export default function App() {
  return (
    <>
      <a className='skip-link' href='#main'>
        Skip to content
      </a>
      <Nav />
      <main id='main'>
        <Hero />
        <About />
        <Journey />
        <Products />
        <Manufacturing />
        <Capacity />
        <Values />
        <Why />
        <Clients />
        <Future />
        {SECTIONS.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            index={section.index}
            eyebrow={section.eyebrow}
            title={section.title}
            placeholder={section.placeholder}
            tone={section.tone}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

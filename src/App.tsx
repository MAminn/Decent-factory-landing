import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Products from "./components/Products";
import Section from "./components/Section";
import Footer from "./components/Footer";

/**
 * Section scaffolding — ordered exactly as specified.
 * These are intentionally placeholder shells; content is built in later steps.
 */
const SECTIONS = [
  {
    id: "manufacturing",
    index: "04",
    eyebrow: "Manufacturing",
    title: "Every stage, under one roof",
    placeholder:
      "The production process and facility breakdown will live here.",
    tone: "warm" as const,
  },
  {
    id: "capacity",
    index: "05",
    eyebrow: "Capacity",
    title: "Scale that grows with you",
    placeholder:
      "Monthly capacity, team size, and scalability figures will live here.",
    tone: "light" as const,
  },
  {
    id: "values",
    index: "06",
    eyebrow: "Values",
    title: "What we stand for",
    placeholder: "Commitment, Quality, and Flexibility will live here.",
    tone: "warm" as const,
  },
  {
    id: "why",
    index: "07",
    eyebrow: "Why Decent",
    title: "Reasons to partner with us",
    placeholder: "The differentiators list will live here.",
    tone: "light" as const,
  },
  {
    id: "clients",
    index: "08",
    eyebrow: "Clients & Partners",
    title: "Trusted by leading names",
    placeholder: "Client and fabric-partner logos will live here.",
    tone: "warm" as const,
  },
  {
    id: "future",
    index: "09",
    eyebrow: "The Future",
    title: "Where we are headed",
    placeholder: "Scaling, exports, and new product lines will live here.",
    tone: "light" as const,
  },
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

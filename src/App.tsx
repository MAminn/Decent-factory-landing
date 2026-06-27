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
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <Contact />
      </main>
      <Footer />
    </>
  );
}

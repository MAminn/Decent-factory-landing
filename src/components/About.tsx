import { company, founders, missionVision } from "../data/decent";
import "./About.css";

export default function About() {
  return (
    <section
      id='about'
      className='section section--light about'
      aria-labelledby='about-title'>
      <div className='container'>
        <header className='section__head about__head'>
          <span className='section__index' aria-hidden='true'>
            01
          </span>
          <p className='eyebrow'>About</p>
        </header>

        <div className='about__grid'>
          <h2 className='about__lead' id='about-title'>
            Founded in {company.established}, Decent was built on a simple
            belief — that garment manufacturing deserves a higher&nbsp;standard.
          </h2>

          <div className='about__body'>
            <p>
              We are a bottom-wear specialist with a clear ambition: to be a
              globally recognized garment manufacturer, expanding into
              international markets while preserving the quality, craftsmanship,
              and integrity that define&nbsp;us.
            </p>
            <p className='about__tagline'>{company.tagline}</p>

            <p className='about__credit'>
              <span aria-hidden='true'>—</span> Founded by{" "}
              {founders.map((name, i) => (
                <span key={name}>
                  <strong>{name}</strong>
                  {i < founders.length - 1 ? " & " : ""}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className='about__mv'>
          <div className='about__mv-col'>
            <p className='eyebrow about__mv-label'>Mission</p>
            <p className='about__mv-text'>{missionVision.mission}</p>
          </div>
          <div className='about__mv-col'>
            <p className='eyebrow about__mv-label'>Vision</p>
            <p className='about__mv-text'>{missionVision.vision}</p>
          </div>
        </div>

        <dl className='about__stats' aria-label='Key facts'>
          <div className='about__stat'>
            <dt>Established</dt>
            <dd>{company.established}</dd>
          </div>
          <div className='about__stat'>
            <dt>Specialism</dt>
            <dd>Bottom-wear</dd>
          </div>
          <div className='about__stat'>
            <dt>Based in</dt>
            <dd>Egypt</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

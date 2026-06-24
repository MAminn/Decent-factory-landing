import { company } from "../data/decent";
import "./Hero.css";

export default function Hero() {
  return (
    <section className='hero' id='top' aria-labelledby='hero-wordmark'>
      <div className='hero__bg' aria-hidden='true' />

      <div className='container hero__inner'>
        <p className='eyebrow hero__eyebrow'>Garment Manufacturing · Egypt</p>

        <h1 className='hero__wordmark' id='hero-wordmark'>
          DECENT
        </h1>

        <p className='hero__tagline'>{company.tagline}</p>

        <div className='hero__meta'>
          <span className='hero__est'>Est. {company.established}</span>
          <span className='hero__rule' aria-hidden='true' />
          <span className='hero__discipline'>Bottom-wear specialists</span>
        </div>

        <div className='hero__actions'>
          <a className='btn btn--primary' href='#contact'>
            Start a Project
            <span aria-hidden='true'>→</span>
          </a>
          <a className='btn btn--ghost' href='#about'>
            Discover Decent
          </a>
        </div>
      </div>

      <a className='hero__scroll' href='#about' aria-label='Scroll to About'>
        <span>Scroll</span>
        <span className='hero__scroll-line' aria-hidden='true' />
      </a>
    </section>
  );
}

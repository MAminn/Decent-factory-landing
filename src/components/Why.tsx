import { whyDecent } from "../data/decent";
import "./Why.css";

export default function Why() {
  return (
    <section
      id='why'
      className='section section--light why'
      aria-labelledby='why-title'>
      <div className='container'>
        <header className='section__head'>
          <span className='section__index' aria-hidden='true'>
            07
          </span>
          <p className='eyebrow'>Why Decent</p>
          <h2 className='section__title' id='why-title'>
            Reasons to partner with us
          </h2>
        </header>

        <ol className='why__list'>
          {whyDecent.map((reason, i) => (
            <li className='why__row' key={reason}>
              <span className='why__num' aria-hidden='true'>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className='why__text'>{reason}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

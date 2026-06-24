import { journey } from "../data/decent";
import "./Journey.css";

export default function Journey() {
  return (
    <section
      id='journey'
      className='section section--warm journey'
      aria-labelledby='journey-title'>
      <div className='container'>
        <header className='section__head'>
          <span className='section__index' aria-hidden='true'>
            02
          </span>
          <p className='eyebrow'>Our Journey</p>
          <h2 className='section__title' id='journey-title'>
            From one line to a campus
          </h2>
          <p className='journey__intro'>
            A steady climb from a single rented production line to a multi-floor
            manufacturing campus — one deliberate step at a time.
          </p>
        </header>

        <ol
          className='journey__timeline'
          aria-label='Company milestones 2017 to 2025'>
          {journey.map((milestone, i) => (
            <li
              key={milestone.year}
              className={`journey__item journey__item--${i % 2 === 0 ? "up" : "down"}`}
              style={{ "--i": i } as React.CSSProperties}>
              <span className='journey__node' aria-hidden='true' />
              <div className='journey__card'>
                <span className='journey__year'>{milestone.year}</span>
                <p className='journey__label'>{milestone.label}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

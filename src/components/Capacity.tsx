import { capacity, company } from "../data/decent";
import "./Capacity.css";

/**
 * Display segmentation of the confirmed `capacity` strings.
 * `full` carries the exact confirmed value for assistive tech; `figure`/`detail`
 * are purely presentational splits of that same string — no new copy is introduced.
 */
const STATS = [
  {
    label: "Current capacity",
    figure: "100K",
    detail: "pieces/month",
    full: capacity.current,
  },
  { label: "Team", figure: "600+", detail: "personnel", full: capacity.team },
  {
    label: "Scalable to",
    figure: "180K",
    detail: "pieces/month within 2 years",
    full: capacity.scalable,
  },
] as const;

export default function Capacity() {
  return (
    <section
      id='capacity'
      className='section section--light capacity'
      aria-labelledby='capacity-title'>
      <div className='container'>
        <header className='section__head'>
          <span className='section__index' aria-hidden='true'>
            05
          </span>
          <p className='eyebrow'>Capacity</p>
          <h2 className='section__title' id='capacity-title'>
            Scale that grows with you
          </h2>
        </header>

        <dl className='capacity__band'>
          {STATS.map((stat) => (
            <div className='capacity__stat' key={stat.label}>
              <dt className='capacity__label'>{stat.label}</dt>
              <dd className='capacity__value' aria-label={stat.full}>
                <span className='capacity__figure' aria-hidden='true'>
                  {stat.figure}
                </span>
                <span className='capacity__detail' aria-hidden='true'>
                  {stat.detail}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <p className='capacity__support'>{company.tagline}</p>
      </div>
    </section>
  );
}

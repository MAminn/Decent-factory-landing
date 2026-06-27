import { future } from "../data/decent";
import "./Future.css";

export default function Future() {
  return (
    <section
      id='future'
      className='section section--light future'
      aria-labelledby='future-title'>
      <div className='container'>
        <header className='section__head'>
          <span className='section__index' aria-hidden='true'>
            09
          </span>
          <p className='eyebrow'>The Future</p>
          <h2 className='section__title' id='future-title'>
            Where we are headed
          </h2>
        </header>

        <ol className='future__roadmap'>
          {future.map((item, i) => (
            <li className='future__step' key={item.title}>
              <span className='future__num' aria-hidden='true'>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className='future__title'>{item.title}</h3>
              <p className='future__body'>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

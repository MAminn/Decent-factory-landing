import { values } from "../data/decent";
import "./Values.css";

export default function Values() {
  return (
    <section
      id='values'
      className='section section--warm values'
      aria-labelledby='values-title'>
      <div className='container'>
        <header className='section__head'>
          <span className='section__index' aria-hidden='true'>
            06
          </span>
          <p className='eyebrow'>Values</p>
          <h2 className='section__title' id='values-title'>
            What we stand for
          </h2>
          <p className='values__intro'>
            Everything we do is guided by three core principles — the standards
            that shape every order, every line, and every relationship.
          </p>
        </header>

        <ol className='values__grid'>
          {values.map((value, i) => (
            <li className='value' key={value.title}>
              <span className='value__num' aria-hidden='true'>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className='value__title'>{value.title}</h3>
              <p className='value__body'>{value.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

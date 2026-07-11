import { process, facility } from "../data/decent";
import "./Manufacturing.css";

export default function Manufacturing() {
  return (
    <section
      id='manufacturing'
      className='section section--warm mfg'
      aria-labelledby='manufacturing-title'>
      <div className='container'>
        <header className='section__head'>
          <span className='section__index' aria-hidden='true'>
            04
          </span>
          <p className='eyebrow'>Manufacturing</p>
          <h2 className='section__title' id='manufacturing-title'>
            Every stage, under one roof
          </h2>
          <p className='mfg__intro'>
            From the first cut to final inspection, Decent runs the complete
            production cycle in-house — six controlled stages, one continuous
            standard.
          </p>
        </header>

        {/* a) Process flow */}
        <div className='mfg__block' aria-labelledby='mfg-process-title'>
          <h3 className='mfg__subhead' id='mfg-process-title'>
            The Process
          </h3>
          <ol
            className='flow'
            aria-label='Production process, six stages in order'>
            {process.map((stage, i) => (
              <li
                key={stage}
                className='flow__step'
                style={{ "--i": i } as React.CSSProperties}>
                <span className='flow__num' aria-hidden='true'>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className='flow__name'>{stage}</span>
                {i < process.length - 1 && (
                  <span className='flow__arrow' aria-hidden='true'>
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* b) Facility */}
        <div
          className='mfg__block facility'
          aria-labelledby='mfg-facility-title'>
          <h3 className='mfg__subhead' id='mfg-facility-title'>
            The Facility
          </h3>

          <div className='facility__grid'>
            <div className='facility__intro'>
              <p className='facility__lead'>
                A purpose-built, four-storey factory and a separate annex —
                engineered around bottom-wear, with every stage of production
                under one roof.
              </p>

              {/* c) Image slot — approved factory photography */}
              <div
                className='facility__media'
                data-image-slot='manufacturing-facility'>
                <img
                  className='facility__img'
                  src='/facility-factory-floor.png'
                  alt="Interior of Decent's garment factory floor, with rows of industrial sewing stations receding toward tall daylit windows"
                  width={1448}
                  height={1086}
                  loading='lazy'
                  decoding='async'
                />
              </div>
            </div>

            <ol className='facility__list'>
              {facility.map((item) => (
                <li key={item.floor} className='facility__row'>
                  <span className='facility__floor'>{item.floor}</span>
                  <span className='facility__use'>{item.use}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* c) Training Academy */}
        <div className='mfg__block academy' aria-labelledby='mfg-academy-title'>
          <h3 className='mfg__subhead' id='mfg-academy-title'>
            Training Academy
          </h3>

          <div className='academy__grid'>
            <div className='academy__intro'>
              <p className='facility__lead'>Talent, trained in-house.</p>
              <p className='academy__body'>
                An in-house workforce development programme on the 4th floor —
                upholding quality standards and building a reliable talent
                pipeline.
              </p>
            </div>

            <div
              className='facility__media'
              data-image-slot='manufacturing-academy'>
              <img
                className='facility__img'
                src='/training-academy-exterior.png'
                alt="Exterior of Decent's four-storey factory and annex buildings"
                width={1672}
                height={941}
                loading='lazy'
                decoding='async'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

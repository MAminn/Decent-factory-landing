import { leadership } from "../data/decent";
import "./Leadership.css";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Leadership() {
  const { ceo, team } = leadership;

  return (
    <section
      id='leadership'
      className='section section--warm leadership'
      aria-labelledby='leadership-title'>
      <div className='container'>
        <header className='section__head'>
          <span className='section__index' aria-hidden='true'>
            10
          </span>
          <p className='eyebrow'>Leadership</p>
          <h2 className='section__title' id='leadership-title'>
            The people behind the standard
          </h2>
        </header>

        {/* CEO feature */}
        <div className='ceo'>
          <figure className='ceo__portrait'>
            <img
              className='ceo__img'
              src={ceo.image}
              alt={`Portrait of ${ceo.name}, ${ceo.role}`}
              width={1122}
              height={1402}
              loading='lazy'
              decoding='async'
            />
          </figure>

          <div className='ceo__body'>
            <blockquote className='ceo__quote'>
              &ldquo;{ceo.quote}&rdquo;
            </blockquote>
            <p className='ceo__message'>{ceo.message}</p>
            <p className='ceo__attribution'>
              <span className='ceo__name'>{ceo.name}</span>
              <span className='ceo__role'>{ceo.role}</span>
            </p>
          </div>
        </div>

        {/* Team grid */}
        <ul
          className='team'
          role='region'
          aria-label='Leadership portraits'
          tabIndex={0}>
          {team.map((member) => (
            <li className='team__card' key={member.name}>
              {member.image ? (
                <div className='team__media'>
                  <img
                    className='team__img'
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    width={1122}
                    height={1402}
                    loading='lazy'
                    decoding='async'
                  />
                </div>
              ) : (
                <div className='team__media team__media--monogram'>
                  <span className='team__monogram' aria-hidden='true'>
                    {initials(member.name)}
                  </span>
                </div>
              )}
              <div className='team__meta'>
                <span className='team__name'>{member.name}</span>
                <span className='team__role'>{member.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

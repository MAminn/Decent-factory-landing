import { company, contact } from "../data/decent";
import "./Contact.css";

export default function Contact() {
  const primaryTelHref = `tel:${contact.phones[0].number.replace(/\s+/g, "")}`;

  return (
    <section
      id='contact'
      className='section section--warm contact'
      aria-labelledby='contact-title'>
      <div className='container'>
        <header className='section__head'>
          <span className='section__index' aria-hidden='true'>
            10
          </span>
          <p className='eyebrow'>Contact</p>
        </header>

        <div className='contact__grid'>
          <div className='contact__lead'>
            <h2 className='contact__statement' id='contact-title'>
              Let&rsquo;s build something that lasts.
            </h2>
            <a className='btn btn--primary contact__cta' href={primaryTelHref}>
              Start a Project
              <span aria-hidden='true'>→</span>
            </a>
            <p className='contact__tagline'>{company.tagline}</p>
          </div>

          <div className='contact__details'>
            <div className='contact__group'>
              <h3 className='contact__label'>Phone</h3>
              <ul>
                {contact.phones.map((phone) => (
                  <li key={phone.number}>
                    <a
                      className='contact__link'
                      href={`tel:${phone.number.replace(/\s+/g, "")}`}>
                      {phone.label}: {phone.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='contact__group'>
              <h3 className='contact__label'>Email</h3>
              <ul>
                {contact.emails.map((email) => (
                  <li key={email}>
                    <a className='contact__link' href={`mailto:${email}`}>
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='contact__group'>
              <h3 className='contact__label'>Locations</h3>
              <ul>
                {contact.locations.map((location) => (
                  <li key={location} className='contact__location'>
                    {location}
                  </li>
                ))}
              </ul>
            </div>

            <div className='contact__group'>
              <h3 className='contact__label'>Online</h3>
              <ul>
                <li>
                  <a
                    className='contact__link'
                    href={`https://${contact.website}`}
                    target='_blank'
                    rel='noreferrer'>
                    {contact.website}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

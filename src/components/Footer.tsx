import { company, contact, founders } from "../data/decent";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='container footer__inner'>
        <div className='footer__brand'>
          <img
            src='/logo-decent-white.png'
            alt='Decent'
            className='footer__logo-img'
            width={320}
            height={64}
          />
          <p className='footer__tagline'>{company.tagline}</p>
          <p className='footer__est'>Est. {company.established} · Egypt</p>
        </div>

        <div className='footer__col'>
          <h3 className='footer__heading'>Contact</h3>
          <ul>
            {contact.phones.map((phone) => (
              <li key={phone.number}>
                <a href={`tel:${phone.number.replace(/\s+/g, "")}`}>
                  {phone.label}: {phone.number}
                </a>
              </li>
            ))}
            {contact.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            ))}
            <li>
              <a
                href={`https://${contact.website}`}
                target='_blank'
                rel='noreferrer'>
                {contact.website}
              </a>
            </li>
          </ul>
        </div>

        <div className='footer__col'>
          <h3 className='footer__heading'>Locations</h3>
          <ul>
            {contact.locations.map((location) => (
              <li key={location}>{location}</li>
            ))}
          </ul>
        </div>

        <div className='footer__col'>
          <h3 className='footer__heading'>Founders</h3>
          <ul>
            {founders.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className='container footer__bottom'>
        <span>
          © {year} {company.name}. All rights reserved.
        </span>
        <span>Crafted in Egypt.</span>
      </div>
    </footer>
  );
}

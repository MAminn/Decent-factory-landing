import { clients, partners } from "../data/decent";
import "./Clients.css";

export default function Clients() {
  return (
    <section
      id='clients'
      className='section section--warm clients'
      aria-labelledby='clients-title'>
      <div className='container'>
        <header className='section__head'>
          <span className='section__index' aria-hidden='true'>
            08
          </span>
          <p className='eyebrow'>Clients &amp; Partners</p>
          <h2 className='section__title' id='clients-title'>
            Trusted by leading names
          </h2>
        </header>

        {/* a) Clients — text-based logo lockups (logo SVGs can replace text later) */}
        <ul className='clients__grid' aria-label='Clients'>
          {clients.map((name) => (
            <li className='clients__cell' key={name} data-logo-slot={name}>
              <span className='clients__name'>{name}</span>
            </li>
          ))}
        </ul>

        {/* b) Partners / key suppliers */}
        <div className='clients__partners' aria-labelledby='partners-title'>
          <h3 className='clients__subhead' id='partners-title'>
            Key Suppliers
          </h3>
          <ul
            className='partners__row'
            aria-label='Fabric partners and suppliers'>
            {partners.map((name) => (
              <li className='partners__cell' key={name} data-logo-slot={name}>
                <span className='partners__name'>{name}</span>
              </li>
            ))}
          </ul>
          <p className='clients__support'>
            Our partnerships with leading fabric suppliers ensure premium raw
            materials and a stable supply chain.
          </p>
        </div>
      </div>
    </section>
  );
}

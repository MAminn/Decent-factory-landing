import { company } from "../data/decent";
import "./Nav.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Capacity", href: "#capacity" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Nav() {
  return (
    <header className='nav'>
      <div className='container nav__inner'>
        <a
          className='nav__logo'
          href='#top'
          aria-label={`${company.name} — home`}>
          DECENT
        </a>

        <nav className='nav__links' aria-label='Primary'>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className='nav__cta' href='#contact'>
          Start a Project
        </a>
      </div>
    </header>
  );
}

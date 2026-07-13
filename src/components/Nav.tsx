import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on Escape + lock body scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Move focus into the drawer for keyboard users.
    drawerRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className='nav'>
      <div className='container nav__inner'>
        <a
          className='nav__logo'
          href='#top'
          aria-label={`${company.name} — home`}>
          <img
            src='/logo-decent-white.png'
            alt='Decent'
            className='nav__logo-img'
            width={280}
            height={56}
          />
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

        <button
          ref={toggleRef}
          type='button'
          className='nav__toggle'
          aria-expanded={open}
          aria-controls='nav-drawer'
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}>
          <span
            className={`nav__burger ${open ? "is-open" : ""}`}
            aria-hidden='true'>
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`nav__overlay ${open ? "is-open" : ""}`}
        hidden={!open}
        onClick={close}
        aria-hidden='true'
      />
      <div
        id='nav-drawer'
        ref={drawerRef}
        className={`nav__drawer ${open ? "is-open" : ""}`}
        role='dialog'
        aria-modal='true'
        aria-label='Site menu'
        hidden={!open}>
        <nav aria-label='Mobile'>
          <ul className='nav__drawer-links'>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className='nav__drawer-cta' href='#contact' onClick={close}>
          Start a Project
          <span aria-hidden='true'>→</span>
        </a>
      </div>
    </header>
  );
}

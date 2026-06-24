import type { ReactNode } from "react";
import "./Section.css";

interface SectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  placeholder: string;
  /** alternate surface tone for visual rhythm */
  tone?: "light" | "warm";
  children?: ReactNode;
}

/**
 * Styled scaffolding for a landing-page section.
 * Renders heading + spacing + container with a placeholder line.
 * Real content is added in later steps via `children`.
 */
export default function Section({
  id,
  index,
  eyebrow,
  title,
  placeholder,
  tone = "light",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section section--${tone}`}
      aria-labelledby={`${id}-title`}>
      <div className='container'>
        <header className='section__head'>
          <span className='section__index' aria-hidden='true'>
            {index}
          </span>
          <p className='eyebrow'>{eyebrow}</p>
          <h2 className='section__title' id={`${id}-title`}>
            {title}
          </h2>
          <p className='section__placeholder'>{placeholder}</p>
        </header>

        {children}
      </div>
    </section>
  );
}

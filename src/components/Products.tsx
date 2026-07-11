import { productLines } from "../data/decent";
import "./Products.css";

/**
 * Approved garment photography, reused per production line.
 * All sources live in /public and are 1122×1402 (exact 4:5).
 * Alt text describes the garment, never the line name.
 */
const LINE_MEDIA: Record<string, { src: string; alt: string }[]> = {
  "Gabardine & Slit-Pocket Line": [
    { src: "/product-chinos.png", alt: "Folded khaki chino trousers" },
    {
      src: "/product-pants-trousers.png",
      alt: "Folded mid-grey tailored trousers",
    },
    {
      src: "/product-casual-formal.png",
      alt: "Charcoal formal and beige casual trousers laid side by side",
    },
    { src: "/product-shorts.png", alt: "Folded taupe chino shorts" },
  ],
  "Denim & Five-Pocket Line": [
    {
      src: "/product-jeans-denim.png",
      alt: "Folded dark indigo five-pocket jeans",
    },
    {
      src: "/product-all-bottomwear.png",
      alt: "An assortment of folded bottom-wear in beige, indigo and taupe",
    },
  ],
};

export default function Products() {
  return (
    <section
      id='products'
      className='section section--light products'
      aria-labelledby='products-title'>
      <div className='container'>
        <header className='section__head'>
          <span className='section__index' aria-hidden='true'>
            03
          </span>
          <p className='eyebrow'>Products</p>
          <h2 className='section__title' id='products-title'>
            Bottom-wear, perfected
          </h2>
          <p className='products__intro'>
            A focused bottom-wear specialism, produced across two dedicated
            production lines — engineered for fit, finish, and longevity.
          </p>
        </header>

        <div className='products__lines'>
          {productLines.map((line, i) => {
            const media = LINE_MEDIA[line.name] ?? [];
            return (
              <article
                key={line.name}
                className='line'
                aria-labelledby={`line-${i}-title`}>
                <div className='line__head'>
                  <span className='line__index' aria-hidden='true'>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className='line__name' id={`line-${i}-title`}>
                    {line.name}
                  </h3>
                  <p className='line__description'>{line.description}</p>
                </div>

                <ul className='line__categories'>
                  {line.categories.map((category) => (
                    <li className='line__category' key={category}>
                      {category}
                    </li>
                  ))}
                </ul>

                <ul className='line__media'>
                  {media.map((item) => (
                    <li className='line__media-item' key={item.src}>
                      <img
                        className='line__img'
                        src={item.src}
                        alt={item.alt}
                        width={1122}
                        height={1402}
                        loading='lazy'
                        decoding='async'
                      />
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { products } from "../data/decent";
import "./Products.css";

/**
 * Approved garment photography, mapped by product name (matches products[] order).
 * Files live in /public; all six sources are 1122×1402 (exact 4:5).
 */
const PRODUCT_MEDIA: Record<string, { src: string; alt: string }> = {
  "Pants & Trousers": {
    src: "/product-pants-trousers.png",
    alt: "Folded mid-grey tailored trousers",
  },
  "Jeans & Denim": {
    src: "/product-jeans-denim.png",
    alt: "Folded dark indigo five-pocket jeans",
  },
  Shorts: {
    src: "/product-shorts.png",
    alt: "Folded taupe chino shorts",
  },
  Chinos: {
    src: "/product-chinos.png",
    alt: "Folded khaki chino trousers",
  },
  "Casual & Formal Bottoms": {
    src: "/product-casual-formal.png",
    alt: "Charcoal formal and beige casual trousers laid side by side",
  },
  "All other bottom-wear categories": {
    src: "/product-all-bottomwear.png",
    alt: "An assortment of folded bottom-wear in beige, indigo and taupe",
  },
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
            A focused specialism across every category of bottom-wear —
            engineered for fit, finish, and longevity.
          </p>
        </header>

        <ul className='products__grid'>
          {products.map((product, i) => {
            const media = PRODUCT_MEDIA[product];
            return (
              <li key={product} className='product'>
                <figure className='product__figure'>
                  <div className='product__media' data-image-slot={product}>
                    <img
                      className='product__img'
                      src={media.src}
                      alt={media.alt}
                      width={1122}
                      height={1402}
                      loading='lazy'
                      decoding='async'
                    />
                    <span className='product__index' aria-hidden='true'>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <figcaption className='product__caption'>
                    <span className='product__name'>{product}</span>
                    <span className='product__arrow' aria-hidden='true'>
                      →
                    </span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

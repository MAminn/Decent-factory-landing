import { products } from "../data/decent";
import "./Products.css";

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
          {products.map((product, i) => (
            <li key={product} className='product'>
              <figure className='product__figure'>
                {/* Image slot — garment photography drops in here later */}
                <div
                  className='product__media'
                  role='img'
                  aria-label={`${product} — photography to follow`}
                  data-image-slot={product}>
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
          ))}
        </ul>
      </div>
    </section>
  );
}

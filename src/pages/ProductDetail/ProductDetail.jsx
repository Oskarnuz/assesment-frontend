import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../ProductDetail/ProductDetail.module.css";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading product data...</div>;
  }

  return (
    <main className="contenedor">
      <section className={styles.product}>
        <h1>Product {id}</h1>
        {error && <div>Error fetching product data: {error}</div>}
        {product && (
          <div className={styles.product__ctn}>
            <div className={styles.product__mix}>
              <img className={styles.product__img} alt="" src={product.image} />
              <p
                className={`${styles.product__rating} ${
                  product.rating.rate > 4 ? styles.highRating : styles.lowRating
                }`}
              >
                Rating: {product.rating.rate}{" "}
                <span>{product.rating.count} reviews</span>
              </p>
            </div>
            <div className={styles.product__info}>
              <p className={styles.product__title}>{product.title}</p>
              <p className={styles.product__price}>
                Price: <span>${product.price}</span>
              </p>
              <p className={styles.product__category}>
                Category: <span>{product.category}</span>
              </p>
              <p className={styles.product__description}>
                {product.description}
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default ProductDetail;

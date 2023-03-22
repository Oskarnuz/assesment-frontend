import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../ProductCard/ProductCard.module.css";

const ProductCard = ({ id, title, image }) => {
  const [countdown, setCountdown] = useState({
    minutes: Math.floor(Math.random() * 5),
    seconds: Math.floor(Math.random() * 59),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const seconds = prevCountdown.seconds - 1;
        const minutes = prevCountdown.minutes - (seconds < 0 ? 1 : 0);

        return {
          minutes: minutes < 0 ? 0 : minutes,
          seconds: seconds < 0 ? 0 : seconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { minutes, seconds } = countdown;
  const isExpired = minutes === 0 && seconds === 0;

  return (
    <section className={styles.card}>
      <div className={styles.card__product}>
        <img className={styles.card__img} alt="product" src={image} />
        <p>{title}</p>
      </div>
      <div className={styles.card__timer}>
        <p>
          {`${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}
        </p>
        <Link to={`/product-detail/${id}`}>
          {isExpired ? (
            <button
              className={`${styles["card__button--disabled"]} ${styles["card__button"]}`}
              type="submit"
              disabled
            >
              Time Expired
            </button>
          ) : (
            <button className={styles.card__button} type="submit">
              View Details
            </button>
          )}
        </Link>
      </div>
    </section>
  );
};

export default ProductCard;


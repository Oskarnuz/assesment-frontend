import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../ProductCard/ProductCard.module.css";

const ProductCard = ({ image, title, id }) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: Math.floor(Math.random() * 5),
    seconds: Math.floor(Math.random() * 59),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds === 0 && prevTime.minutes === 0) {
          clearInterval(interval);
          
          return prevTime;
        } else if (prevTime.seconds === 0) {
          
          return {
            minutes: prevTime.minutes - 1,
            seconds: 59,
          };
        } else {

          return {
            ...prevTime,
            seconds: prevTime.seconds - 1,
          };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { minutes, seconds } = timeLeft;
  const min = `0${minutes}`.slice(-2);
  const sec = `0${seconds}`.slice(-2);

  return (
    <section className={styles.card}>
      <div className={styles.card__product}>
        <img className={styles.card__img} alt="product" src={image} />
        <p>{title}</p>
      </div>
      <div className={styles.card__timer}>
        <p>
          {min}:{sec}
        </p>
        <Link to={`/product-detail/${id}`}>
          {seconds === 0 && minutes === 0 ? (
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

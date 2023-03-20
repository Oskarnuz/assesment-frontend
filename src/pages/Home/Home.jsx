import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from '../Home/Home.module.css'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className={styles.home}>
      <h2 className={styles.home__title}>PRODUCTS</h2>
      <div className={styles.home__list}>
        { products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
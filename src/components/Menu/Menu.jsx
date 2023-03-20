import { Link } from 'react-router-dom';
import styles from '../Menu/Menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Link className={styles.menu__link} to="/">H<i>o</i>me</Link>
      <Link className={styles.menu__link} to="/about">Ab<i>o</i>ut</Link>
    </nav>
  );
}
 
export default Menu;


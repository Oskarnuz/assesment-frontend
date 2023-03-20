import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Menu from './components/Menu/Menu';

const App = () => (
  <>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
    </Routes>
  </>
);

export default App;
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import AddProduct from './pages/Products/Add';


export const AppRoutes = () => {

  return (
    <Routes >
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/add" element={<AddProduct />} />
    </Routes>

  );
};

export default AppRoutes;

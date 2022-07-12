import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../../pages/AdminPage/AdminPage';
import AuthPage from '../../pages/AuthPage/AuthPage';
import ProductPage from '../../pages/ProductPage/ProductPage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import ShoppingCartPage from '../../pages/ShoppingCartPage/ShoppingCartPage';
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage';
import BrandsPage from '../../pages/BrandsPage/BrandsPage';
import MaterialsPage from '../../pages/MaterialsPage/MaterialsPage';
import CategoryPage from '../../pages/CategoryPage/CategoryPage';
import BrandPage from '../../pages/BrandPage/BrandPage';
import MaterialPage from '../../pages/MaterialPage/MaterialPage';

interface Props {}

const AppRouter: FC<Props> = (props) => {
  // TODO: make auth
  const isAuth = false;

  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      {isAuth && <Route path="/admin" element={<AdminPage />} />}
      {isAuth && <Route path="/cart" element={<ShoppingCartPage />} />}
      <Route path="/login" element={<AuthPage />} />
      <Route path="/registration" element={<AuthPage />} />
      <Route path="/category" element={<CategoriesPage />} />
      <Route path="/brand" element={<BrandsPage />} />
      <Route path="/material" element={<MaterialsPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/brand/:id" element={<BrandPage />} />
      <Route path="/material/:id" element={<MaterialPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/*" element={<ShopPage />} />
    </Routes>
  );
};

export default AppRouter;

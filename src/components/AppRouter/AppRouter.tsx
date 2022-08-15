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
import UnderConstruction from '../UnderConstruction/UnderConstruction';

interface Props {}

const AppRouter: FC<Props> = (props) => {
  // TODO: make auth, admin and cart
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

      <Route path="/dagger" element={<UnderConstruction />} />
      <Route path="/sword" element={<UnderConstruction />} />
      <Route path="/souvenir" element={<UnderConstruction />} />
      <Route path="/related" element={<UnderConstruction />} />
      <Route path="/workshop" element={<UnderConstruction />} />
      <Route path="/about" element={<UnderConstruction />} />
      <Route path="/payment" element={<UnderConstruction />} />
      <Route path="/news" element={<UnderConstruction />} />
      <Route path="/contacts" element={<UnderConstruction />} />
      <Route path="/moscow" element={<UnderConstruction />} />
      <Route path="/steel" element={<UnderConstruction />} />
      <Route path="/privacy" element={<UnderConstruction />} />
      <Route path="/returns" element={<UnderConstruction />} />
      <Route path="/sitemap" element={<UnderConstruction />} />
      <Route path="/certificates" element={<UnderConstruction />} />
      <Route path="/partners" element={<UnderConstruction />} />
      <Route path="/sales" element={<UnderConstruction />} />
      <Route path="/account" element={<UnderConstruction />} />
      <Route path="/orders" element={<UnderConstruction />} />
      <Route path="/bookmarks" element={<UnderConstruction />} />
      <Route path="/newsletter" element={<UnderConstruction />} />
      <Route path="/methods" element={<UnderConstruction />} />
      <Route path="/rules" element={<UnderConstruction />} />
      <Route path="/terms" element={<UnderConstruction />} />
      <Route path="/top-sellers" element={<UnderConstruction />} />
      <Route path="/details" element={<UnderConstruction />} />
      <Route path="/new-products" element={<UnderConstruction />} />

      <Route path="/*" element={<ShopPage />} />
    </Routes>
  );
};

export default AppRouter;

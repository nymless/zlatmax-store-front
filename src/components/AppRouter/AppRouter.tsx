import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../../pages/AdminPage/AdminPage';
import ProductPage from '../../pages/ProductPage/ProductPage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import ShoppingCartPage from '../../pages/ShoppingCartPage/ShoppingCartPage';
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage';
import BrandsPage from '../../pages/BrandsPage/BrandsPage';
import MaterialsPage from '../../pages/MaterialsPage/MaterialsPage';
import CategoryPage from '../../pages/CategoryPage/CategoryPage';
import BrandPage from '../../pages/BrandPage/BrandPage';
import MaterialPage from '../../pages/MaterialPage/MaterialPage';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';
import { AppRouts } from '../../variables/AppRouts';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';

interface Props {}

const AppRouter: FC<Props> = (props) => {
  // TODO: make api, admin and cart
  const isAuth = false;

  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      {isAuth && <Route path={AppRouts.ADMIN} element={<AdminPage />} />}
      {isAuth && <Route path={AppRouts.CART} element={<ShoppingCartPage />} />}
      <Route path={AppRouts.LOGIN} element={<LoginPage />} />
      <Route path={AppRouts.REGISTRATION} element={<RegistrationPage />} />
      <Route path={AppRouts.CATEGORY} element={<CategoriesPage />} />
      <Route path={AppRouts.BRAND} element={<BrandsPage />} />
      <Route path={AppRouts.MATERIAL} element={<MaterialsPage />} />
      <Route path={AppRouts.CATEGORY + '/:id'} element={<CategoryPage />} />
      <Route path={AppRouts.BRAND + '/:id'} element={<BrandPage />} />
      <Route path={AppRouts.MATERIAL + '/:id'} element={<MaterialPage />} />
      <Route path={AppRouts.PRODUCT + '/:id'} element={<ProductPage />} />

      <Route path={AppRouts.DAGGER} element={<UnderConstruction />} />
      <Route path={AppRouts.SWORD} element={<UnderConstruction />} />
      <Route path={AppRouts.SOUVENIR} element={<UnderConstruction />} />
      <Route path={AppRouts.RELATED} element={<UnderConstruction />} />
      <Route path={AppRouts.WORKSHOP} element={<UnderConstruction />} />
      <Route path={AppRouts.ABOUT} element={<UnderConstruction />} />
      <Route path={AppRouts.PAYMENT} element={<UnderConstruction />} />
      <Route path={AppRouts.NEWS} element={<UnderConstruction />} />
      <Route path={AppRouts.CONTACTS} element={<UnderConstruction />} />
      <Route path={AppRouts.MOSCOW} element={<UnderConstruction />} />
      <Route path={AppRouts.STEEL} element={<UnderConstruction />} />
      <Route path={AppRouts.PRIVACY} element={<UnderConstruction />} />
      <Route path={AppRouts.RETURNS} element={<UnderConstruction />} />
      <Route path={AppRouts.SITEMAP} element={<UnderConstruction />} />
      <Route path={AppRouts.CERTIFICATES} element={<UnderConstruction />} />
      <Route path={AppRouts.PARTNERS} element={<UnderConstruction />} />
      <Route path={AppRouts.SALES} element={<UnderConstruction />} />
      <Route path={AppRouts.ACCOUNT} element={<UnderConstruction />} />
      <Route path={AppRouts.ORDERS} element={<UnderConstruction />} />
      <Route path={AppRouts.BOOKMARKS} element={<UnderConstruction />} />
      <Route path={AppRouts.NEWSLETTER} element={<UnderConstruction />} />
      <Route path={AppRouts.METHODS} element={<UnderConstruction />} />
      <Route path={AppRouts.RULES} element={<UnderConstruction />} />
      <Route path={AppRouts.TERMS} element={<UnderConstruction />} />
      <Route path={AppRouts.TOP_SELLERS} element={<UnderConstruction />} />
      <Route path={AppRouts.DETAILS} element={<UnderConstruction />} />
      <Route path={AppRouts.NEW_PRODUCTS} element={<UnderConstruction />} />
      <Route path={AppRouts.SPECIAL_OFFERS} element={<UnderConstruction />} />
      <Route path={AppRouts.BUY} element={<UnderConstruction />} />
      <Route path={AppRouts.ARTICLES} element={<UnderConstruction />} />
      <Route path={AppRouts.RECOVER} element={<UnderConstruction />} />
      <Route
        path={AppRouts.ARTICLES + '/:id'}
        element={<UnderConstruction />}
      />

      <Route path="/*" element={<ShopPage />} />
    </Routes>
  );
};

export default AppRouter;

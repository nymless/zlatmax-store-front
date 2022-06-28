import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ProductSelectors } from "../../hooks/useProductSelectors";
import AdminPage from "../../pages/AdminPage/AdminPage";
import AuthPage from "../../pages/AuthPage/AuthPage";
import CategoryPage from "../../pages/CategoryPage/CategoryPage";
import ManufacturerPage from "../../pages/BrandPage/BrandPage";
import MaterialPage from "../../pages/MaterialPage/MaterialPage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import ShopPage from "../../pages/ShopPage/ShopPage";
import ShoppingCartPage from "../../pages/ShoppingCartPage/ShoppingCartPage";

interface Props {
  selectors: ProductSelectors;
}

const AppRouter: FC<Props> = (props) => {
  // TODO: state
  const isAuth = false;

  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      {isAuth && <Route path="/admin" element={<AdminPage />} />}
      {isAuth && <Route path="/shopping-cart" element={<ShoppingCartPage />} />}
      <Route path="/login" element={<AuthPage />} />
      <Route path="/registration" element={<AuthPage />} />
      <Route
        path="/category"
        element={<CategoryPage selectors={props.selectors} />}
      />
      <Route
        path="/brand"
        element={<ManufacturerPage selectors={props.selectors} />}
      />
      <Route
        path="/material"
        element={<MaterialPage selectors={props.selectors} />}
      />
      <Route
        path="/product"
        element={<ProductsPage selectors={props.selectors} />}
      />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/*" element={<ShopPage />} />
    </Routes>
  );
};

export default AppRouter;
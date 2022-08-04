import { Gallery, Info, Product, Review } from '../models/models';

export type GetProductsParams = {
  typeId?: string;
  price?: string[];
  categoryId?: string;
  brandId?: string;
  bladeId?: string;
  handleId?: string;
  handguardId?: string;
  gildingId?: string;
  totalLength?: string[];
  bladeLength?: string[];
  bladeWidth?: string[];
  rating?: string;
  limit?: string;
  page?: string;
};

export interface RangesForFormSliders {
  price: { min: number; max: number };
  totalLength: { min: number; max: number };
  bladeLength: { min: number; max: number };
  bladeWidth: { min: number; max: number };
}

export interface ProductWithMaterials extends Product {
  bladeMaterialName: string;
  handleMaterialName: string;
  handguardMaterialName: string;
}

export type GetProductsResponse = {
  rows: ProductWithMaterials[];
  count: number;
  ranges: RangesForFormSliders;
};

export interface ProductModelForProductPage extends ProductWithMaterials {
  bladePrice: number;
  handlePrice: number;
  handguardPrice: number;
  info: Info[];
  gallery: Gallery[];
}

export type FavoriteData = {
  userId: number;
  productId: number;
};

export type CartData = {
  userId: number;
  productId: number;
};

export type OrderData = {
  userId: number;
  paymentTypeId: number;
  createdAt: Date;
  totalPrice: number;
  status: 'pending';
  products: Product[];
};

export type GetReviewsResponse = {
  rows: Review[];
  count: number;
};

export type GetReviewsParams = {
  productId?: number;
  limit?: number;
  page?: number;
};

export type GetCitiesParams = {
  countryId?: number;
};

export type GetShippingParams = {
  cityId?: number;
};

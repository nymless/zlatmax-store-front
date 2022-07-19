import { Gallery, Info, Product, ProductModel } from '../models/models';

export type GetProductsParams = {
  productModelId?: number;
  typeId?: number;
  price?: number;
  categoryId?: number;
  brandId?: number;
  bladeId?: number;
  handleId?: number;
  handguardId?: number;
  gildingId?: number;
  totalLength?: number;
  bladeLength?: number;
  bladeWidth?: number;
  rating?: number;
  page?: number;
  limit?: number;
};

export interface RangesForFormSliders {
  price: { min: number; max: number };
  totalLength: { min: number; max: number };
  bladeLength: { min: number; max: number };
  bladeWidth: { min: number; max: number };
}

export interface ProductWithParts extends Product {
  bladeMaterial: string;
  bladePrice: number;
  handleMaterial: string;
  handlePrice: number;
  handguardMaterial: string;
  handguardPrice: number;
  productModel: ProductModelForProductPage;
}

export type GetProductsResponse = {
  rows: ProductWithParts[];
  count: number;
  ranges: RangesForFormSliders;
};

export interface ProductModelForProductPage extends ProductModel {
  info: Info[];
  gallery: Gallery[];
  seriesName?: string;
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

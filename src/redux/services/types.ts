export interface Type {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  img: string;
}

export interface Brand {
  id: number;
  name: string;
  img: string;
}

export interface Blade {
  id: number;
  name: string;
  img: string;
}

export interface GildingType {
  id: number;
  name: string;
}

export interface Handle {
  id: number;
  name: string;
}

export interface Handguard {
  id: number;
  name: string;
}

export interface ProductModel {
  id: number;
  typeId: number;
  categoryId: number;
  brandId: number;
  name: string;
  rating: number;
  img: string;
  totalLength: number;
  bladeLength: number;
  bladeWidth: number;
  defaultProductId: number;
}

export interface Product {
  id: number;
  modelId: number;
  bladeId: number;
  handleId: number;
  handguardId: number;
  price: number;
}

export interface Info {
  id: number;
  title: string;
  description: string;
  modelId: number;
}

export interface Gallery {
  id: number;
  img: string;
  modelId: number;
}

export interface Favorite {
  id: number;
  userId: number;
  modelId: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
}

export interface ProductModelForCard extends ProductModel {
  bladeMaterial: string;
  handleMaterial: string;
  handguardMaterial: string;
  price: number;
}

export interface ProductModelForPage extends ProductModel {
  info: Info[];
  gallery: Gallery[];
}

export interface Ranges {
  price: { min: number; max: number };
  totalLength: { min: number; max: number };
  bladeLength: { min: number; max: number };
  bladeWidth: { min: number; max: number };
}

export type Categories = Category[];

export type Brands = Brand[];

export type Blades = Blade[];

export type Types = Type[];

export type Handles = Handle[];

export type Handguards = Handguard[];

export type Gilding = GildingType[];

export type GetModelsParams = {
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

export type GetModelsResponse = {
  rows: ProductModelForCard[];
  count: number;
  ranges: Ranges;
};

export type Favorites = Favorite[];

export type FavoriteData = {
  modelId: number;
  userId: number;
};

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

export interface BladeMaterial {
  id: number;
  name: string;
  img: string;
}

export interface Gilding {
  id: number;
  name: string;
}

export interface HandleMaterial {
  id: number;
  name: string;
}

export interface HandguardMaterial {
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
  productModelId: number;
  bladeMaterialId: number;
  handleMaterialId: number;
  handguardMaterialId: number;
  price: number;
}

export interface ProductModelInfo {
  id: number;
  title: string;
  description: string;
  productModelId: number;
}

export interface ProductModelGallery {
  id: number;
  img: string;
  productModelId: number;
}

export interface ProductModelForProductsPage extends ProductModel {
  bladeMaterialId: Product['bladeMaterialId'];
  handleMaterialId: Product['handleMaterialId'];
  handguardMaterialId: Product['handguardMaterialId'];
  price: Product['price'];
}

export interface ProductModelForProductPage extends ProductModel {
  productModelInfos: ProductModelInfo[];
  productModelGalleries: ProductModelGallery[];
}

export interface RangesForSliders {
  price: { min: number; max: number };
  totalLength: { min: number; max: number };
  bladeLength: { min: number; max: number };
  bladeWidth: { min: number; max: number };
}

export type GetCategoriesResponse = Category[];

export type GetBrandsResponse = Brand[];

export type GetBladeMaterialsResponse = BladeMaterial[];

export type GetTypesResponse = Type[];

export type GetHandleMaterialResponse = Type[];

export type GetHandguardMaterialResponse = Type[];

export type GetGildingResponse = Type[];

export type GetProductModelsParams = {
  typeId?: number;
  price?: number;
  categoryId?: number;
  brandId?: number;
  bladeMaterialId?: number;
  handleMaterialId?: number;
  handguardMaterialId?: number;
  gildingId?: number;
  totalLength?: number;
  bladeLength?: number;
  bladeWidth?: number;
  rating?: number;
  page?: number;
  limit?: number;
};

export type GetProductModelsResponse = {
  rows: ProductModelForProductsPage[];
  count: number;
  ranges: RangesForSliders;
};

export type GetProductModelResponse = ProductModelForProductPage;

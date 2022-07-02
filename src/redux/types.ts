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
  name: string;
  rating: number;
  img: string;
  typeId: number;
  categoryId: number;
  brandId: number;
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

export interface ExtendedProductModel extends ProductModel {
  productModelInfos: ProductModelInfo[];
  productModelGalleries: ProductModelGallery[];
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
  categoryId?: number;
  brandId?: number;
  bladeMaterialId?: number;
  rating?: number;
  totalLength?: number;
  bladeLength?: number;
  bladeWidth?: number;
  page?: number;
  limit?: number;
};

export type GetProductModelsResponse = {
  rows: ProductModel[];
  count: number;
};

export type GetProductModelResponse = ExtendedProductModel;

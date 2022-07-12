export interface InitialStateSelected {
  typeId: number | null;
  categoryId: number | null;
  brandId: number | null;
  bladeMaterialId: number | null;
}

export interface InitialStateApp {
  appTypes: Record<number, string>;
  appCategories: Record<number, string>;
  appBrands: Record<number, string>;
  appBladeMaterials: Record<number, string>;
  appHandleMaterials: Record<number, string>;
  appHandguardMaterials: Record<number, string>;
  appGildingTypes: Record<number, string>;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
}

export interface Type {
  id: number;
  name: string;
}

export interface Brand {
  id: number;
  name: string;
  img: string;
}

export interface Category {
  id: number;
  name: string;
  img: string;
}

export interface Series {
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

export interface BladeMaterial {
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
  handleMaterialId: number;
  price: number;
}

export interface Handguard {
  id: number;
  handguardMaterialId: number;
  price: number;
}

export interface Blade {
  id: number;
  bladeMaterialId: number;
  price: number;
}

export interface Gilding {
  id: number;
  gildingTypeId: number;
  price: number;
}

export interface ProductModel {
  id: number;
  typeId: number;
  brandId: number;
  categoryId: number;
  seriesId: number;
  name: string;
  rating: number;
  totalLength: number;
  bladeLength: number;
  bladeWidth: number;
}

export interface Info {
  id: number;
  title: string;
  description: string;
  productModelId: number;
}

export interface Gallery {
  id: number;
  img: string;
  productModelId: number;
}

export interface Rating {
  id: number;
  userId: number;
  productModelId: number;
  rate: number;
}

export interface Review {
  id: number;
  userId: number;
  productModelId: number;
  review: string;
}

export interface Product {
  id: number;
  productModelId: number;
  handleId: number;
  handguardId: number;
  bladeId: number;
  gildingId: number;
  img: string;
  price: number;
  stock: number;
  code: string;
}

export interface Favorite {
  id: number;
  userId: number;
  productId: number;
}

export interface Order {
  id: number;
  userId: number;
  paymentTypeId: number;
  createdAt: Date;
  totalPrice: number;
  status: 'pending' | 'paid' | 'fulfilled';
}

export interface PaymentType {
  id: number;
  name: string;
}

export interface SpecialOffer {
  id: number;
  productModelId: number;
  bonusId: number;
  discountRate: number;
  bonusRate: number;
}

export interface StoreBonus {
  id: number;
  exchangeRate: number;
  bonusRate: number;
}

export interface UserBonus {
  id: number;
  bonusId: number;
  userId: number;
  count: number;
}

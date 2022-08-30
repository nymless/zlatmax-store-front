export interface User {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  role: string;
  email: string;
  img: string | null;
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
  productId: number;
  partPrice: number;
}

export interface Handguard {
  id: number;
  handguardMaterialId: number;
  productId: number;
  partPrice: number;
}

export interface Blade {
  id: number;
  bladeMaterialId: number;
  productId: number;
  partPrice: number;
}

export interface Gilding {
  id: number;
  gildingTypeId: number;
  productId: number;
  partPrice: number;
}

export interface Product {
  id: number;
  typeId: number;
  brandId: number;
  categoryId: number;
  seriesId: number;
  name: string;
  rating: number;
  img: string;
  totalLength: number;
  bladeLength: number;
  bladeWidth: number;
  bladeThickness: number;
  basePrice: number;
  defaultHandleId: number;
  defaultHandguardId: number;
  defaultBladeId: number;
  defaultGildingId: number;
  defaultPrice: number;
  code: string;
}

export interface Info {
  id: number;
  title: string | null;
  description: string;
  productId: number;
}

export interface Gallery {
  id: number;
  img: string;
  productId: number;
}

export interface Rating {
  id: number;
  userId: number;
  productId: number;
  rate: number;
}

export interface Review {
  id: number;
  productId: number;
  date: string;
  name: string;
  img: string;
  rate: number;
  review: string;
}

export interface Article {
  id: number;
  date: string;
  name: string;
  img: string;
  title: string;
  content: string;
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

export interface Country {
  id: number;
  name: string;
}

export interface City {
  id: number;
  countryId: number;
  name: string;
}

export interface Shipping {
  id: number;
  cityId: number;
  name: string;
  img: string;
  minHandlingTime: number;
  maxHandlingTime: number;
  price: number;
}

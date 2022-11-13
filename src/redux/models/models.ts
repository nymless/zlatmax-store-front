interface IGenericResource {
  id: number;
}

interface INamedResource extends IGenericResource {
  name: string;
}

export interface User extends IGenericResource {
  firstName: string;
  lastName: string;
  middleName: string | null;
  role: string;
  email: string;
  img: string | null;
}

export interface Type extends INamedResource {}

export interface Brand extends INamedResource {
  img: string;
}

export interface Category extends INamedResource {
  img: string;
}

export interface Series extends INamedResource {}

export interface HandleMaterial extends INamedResource {}

export interface HandguardMaterial extends INamedResource {}

export interface BladeMaterial extends INamedResource {
  img: string;
}

export interface GildingType extends INamedResource {}

export interface Handle extends IGenericResource {
  handleMaterialId: number;
  productId: number;
  partPrice: number;
}

export interface Handguard extends IGenericResource {
  handguardMaterialId: number;
  productId: number;
  partPrice: number;
}

export interface Blade extends IGenericResource {
  bladeMaterialId: number;
  productId: number;
  partPrice: number;
}

export interface Gilding extends IGenericResource {
  gildingTypeId: number;
  productId: number;
  partPrice: number;
}

export interface Product extends INamedResource {
  typeId: number;
  brandId: number;
  categoryId: number;
  seriesId: number;
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

export interface Info extends IGenericResource {
  title: string | null;
  description: string;
  productId: number;
}

export interface Gallery extends IGenericResource {
  img: string;
  productId: number;
}

export interface Rating extends IGenericResource {
  userId: number;
  productId: number;
  rate: number;
}

export interface Review extends INamedResource {
  productId: number;
  date: string;
  img: string;
  rate: number;
  review: string;
}

export interface Article extends INamedResource {
  date: string;
  img: string;
  title: string;
  content: string;
}

export interface Favorite extends IGenericResource {
  userId: number;
  productId: number;
}

export interface Order extends IGenericResource {
  userId: number;
  paymentTypeId: number;
  createdAt: Date;
  totalPrice: number;
  status: 'pending' | 'paid' | 'fulfilled';
}

export interface PaymentType extends INamedResource {}

export interface StoreBonus extends IGenericResource {
  exchangeRate: number;
  bonusRate: number;
}

export interface UserBonus extends IGenericResource {
  bonusId: number;
  userId: number;
  count: number;
}

export interface Country extends INamedResource {}

export interface City extends INamedResource {
  countryId: number;
}

export interface Shipping extends INamedResource {
  cityId: number;
  img: string;
  minHandlingTime: number;
  maxHandlingTime: number;
  price: number;
}

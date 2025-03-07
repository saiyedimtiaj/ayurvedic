export interface TProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  isFreeDelibery: boolean;
}

export type TFaqItems = {
  question: string;
  answer: string;
};

export interface TOrder {
  _id: string;
  name: string;
  mobile: string;
  address: string;
  productId: number;
  productName: string;
  subtotal: number;
  shipping: number;
  total: number;
  createdAt: Date;
  status: string;
}

export interface TFormData {
  name: string;
  mobile: string;
  address: string;
  productId: number;
  productName: string;
}

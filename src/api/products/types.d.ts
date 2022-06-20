export interface Price {
  $numberDecimal: string;
}

export interface Product {
  image: string;
  quantity: number;
  name: string;
  description: string;
  price: Price;
  rating: string;
  category: string[];
  _id: string;
  __v: number;
}

export interface AddProductResponse {
  msg: string;
  product: Product;
}

export interface Product {
  image: string;
  quantity: number;
  name: string;
  description: string;
  price: string;
  rating: string;
  category: string;
  _id: string;
  __v: number;
}

export interface AddProductResponse {
  msg: string;
  product: Product;
}

export interface GetProductsByCategoryResponse {
  msg: string;
  products: Product[];
}

export interface GetAllProductsResponse {
  msg: string;
  products: Product[];
}

export interface DeleteProductResponse {
  msg: string;
}

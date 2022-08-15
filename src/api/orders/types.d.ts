export interface Order {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  deliveryAddress: string;
  deliveryMethod: string;
  paymentMethod: string;
  totalCost: string;
  orderItems: OrderItem[];
  date: string;
  status: string;
  __v: number;
}

export interface ItemInCart {
  _id: string;
  image: string;
  quantity: string;
  name: string;
  description: string;
  price: string;
  rating: string;
  category: string;
  __v: number;
}

export interface OrderItem {
  itemInCart: ItemInCart;
  quantity: number;
  subtotal: number;
}

export interface CancelAnOrderResponse {
  msg: string;
}

export interface CompleteAnOrderResponse {
  msg: string;
}

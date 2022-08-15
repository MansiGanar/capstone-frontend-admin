import axios from "axios";
import {
  CANCEL_AN_ORDER_URL,
  GET_ALL_ORDERS_URL,
  GET_ORDER_BY_ID_URL,
  COMPLETE_AN_ORDER_URL,
} from "../paths";
import { CancelAnOrderResponse, CompleteAnOrderResponse, Order } from "./types";

export const completeAnOrder = async (
  orderId: string,
  token: string
): Promise<CompleteAnOrderResponse> => {
  const { data } = await axios.patch(
    `${COMPLETE_AN_ORDER_URL}${orderId}`,
    undefined,
    {
      headers: {
        "auth-token": token,
      },
    }
  );
  return data;
};

export const cancelAnOrder = async (
  orderId: string,
  token: string
): Promise<CancelAnOrderResponse> => {
  const { data } = await axios.patch(
    `${CANCEL_AN_ORDER_URL}${orderId}`,
    undefined,
    {
      headers: {
        "auth-token": token,
      },
    }
  );
  return data;
};

export const getOrderById = async (
  orderId: string,
  token: string
): Promise<Order> => {
  const { data } = await axios.get(`${GET_ORDER_BY_ID_URL}${orderId}`, {
    headers: {
      "auth-token": token,
    },
  });
  return data;
};

export const getAllOrders = async (token: string): Promise<Order[]> => {
  const { data } = await axios.get(GET_ALL_ORDERS_URL, {
    headers: {
      "auth-token": token,
    },
  });
  return data;
};

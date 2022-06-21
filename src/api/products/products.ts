import axios from "axios";
import { ADD_PRODUCT_URL, GET_PRODUCTS_BY_CATEGORY_URL } from "../paths";
import { AddProductResponse, GetProductsByCategoryResponse } from "./types";

export const addProduct = async (
  formData: FormData,
  token: string
): Promise<AddProductResponse> => {
  const { data } = await axios.post(ADD_PRODUCT_URL, formData, {
    headers: {
      "auth-token": token,
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const getProductsByCategory = async (
  category: string,
  token: string
): Promise<GetProductsByCategoryResponse> => {
  const { data } = await axios.get(
    `${GET_PRODUCTS_BY_CATEGORY_URL}${category}`,
    {
      headers: {
        "auth-token": token,
      },
    }
  );
  return data;
};

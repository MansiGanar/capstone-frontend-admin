import axios from "axios";
import { ADD_PRODUCT_URL } from "../paths";
import { AddProductResponse } from "./types";

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

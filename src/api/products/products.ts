import axios from "axios";
import {
  ADD_PRODUCT_URL,
  DELETE_PRODUCT_URL,
  EDIT_PRODUCT_URL,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY_URL,
  GET_PRODUCT_BY_ID_URL,
} from "../paths";
import {
  AddProductResponse,
  DeleteProductResponse,
  GetAllProductsResponse,
  GetProductsByCategoryResponse,
  Product,
} from "./types";

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

export const editProduct = async (
  formData: FormData,
  token: string,
  productId: string
): Promise<Product> => {
  const { data } = await axios.patch(
    `${EDIT_PRODUCT_URL}${productId}`,
    formData,
    {
      headers: {
        "auth-token": token,
        "Content-Type": "multipart/form-data",
      },
    }
  );
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

export const deleteProduct = async (
  productId: string,
  token: string
): Promise<DeleteProductResponse> => {
  console.log(productId);
  const { data } = await axios.delete(`${DELETE_PRODUCT_URL}${productId}`, {
    headers: {
      "auth-token": token,
    },
  });
  return data;
};

export const getProductById = async (
  productId: string,
  token: string
): Promise<Product> => {
  const { data } = await axios.get(`${GET_PRODUCT_BY_ID_URL}${productId}`, {
    headers: {
      "auth-token": token,
    },
  });
  return data;
};

export const getAllProducts = async (
  token: string
): Promise<GetAllProductsResponse> => {
  const { data } = await axios.get(GET_ALL_PRODUCTS, {
    headers: {
      "auth-token": token,
    },
  });
  return data;
};

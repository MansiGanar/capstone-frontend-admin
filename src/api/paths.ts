export const BASE_URL =
  "https://capstone-backend-ztv0.onrender.com/api/administrator/";
export const BASE_URL_WITHOUT_ADMIN =
  "https://capstone-backend-ztv0.onrender.com/api/";

export const REGISTER_ADMIN_URL = BASE_URL + "register";
export const LOGIN_ADMIN_URL = BASE_URL + "login";
export const GET_ADMIN_PROFILE_ADMIN_URL = BASE_URL + "profile";
export const SEND_PASSWORD_RESET_EMAIL_ADMIN_URL =
  BASE_URL_WITHOUT_ADMIN + "emails/reset-password/admin";
export const RESET_PASSWORD_ADMIN_URL =
  BASE_URL_WITHOUT_ADMIN + "emails/update-password/admin/";

export const ADD_PRODUCT_URL = BASE_URL + "products";
export const GET_PRODUCTS_BY_CATEGORY_URL = BASE_URL + "products/category/";
export const DELETE_PRODUCT_URL = BASE_URL + "products/";
export const GET_PRODUCT_BY_ID_URL = BASE_URL + "products/";
export const EDIT_PRODUCT_URL = BASE_URL + "products/edit/";
export const GET_ALL_PRODUCTS = BASE_URL + "products/all";

export const CANCEL_AN_ORDER_URL = BASE_URL + "orders/cancel/";
export const COMPLETE_AN_ORDER_URL = BASE_URL + "orders/complete/";
export const GET_ALL_ORDERS_URL = BASE_URL + "orders/all";
export const GET_ORDER_BY_ID_URL = BASE_URL + "orders/";

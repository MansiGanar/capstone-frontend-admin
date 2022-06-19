import axios from "axios";
import { LOGIN_ADMIN_URL, REGISTER_ADMIN_URL } from "../paths";
import { ILoginFormData, IRegisterFormData } from "./types";

export const registerAdmin = async (formData: IRegisterFormData) => {
  const { data } = await axios.post(REGISTER_ADMIN_URL, formData);
  return data;
};

export const loginAdmin = async (formData: ILoginFormData) => {
  const { data } = await axios.post(LOGIN_ADMIN_URL, formData);
  return data;
};

import axios from "axios";
import { REGISTER_ADMIN_URL } from "../paths";
import { IFormData } from "./types";

export const registerAdmin = async (formData: IFormData) => {
  const { data } = await axios.post(REGISTER_ADMIN_URL, formData);
  return data;
};

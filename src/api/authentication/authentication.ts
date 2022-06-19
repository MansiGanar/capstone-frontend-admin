import axios from "axios";
import {
  GET_ADMIN_PROFILE_ADMIN_URL,
  LOGIN_ADMIN_URL,
  REGISTER_ADMIN_URL,
} from "../paths";
import {
  GetProfileResponse,
  ILoginFormData,
  IRegisterFormData,
  LoginResponse,
  RegisterResponse,
} from "./types";

export const registerAdmin = async (
  formData: IRegisterFormData
): Promise<RegisterResponse> => {
  const { data } = await axios.post(REGISTER_ADMIN_URL, formData);
  return data;
};

export const loginAdmin = async (
  formData: ILoginFormData
): Promise<LoginResponse> => {
  const { data } = await axios.post(LOGIN_ADMIN_URL, formData);
  return data;
};

export const getAdminProfile = async (
  token: string
): Promise<GetProfileResponse> => {
  const { data } = await axios.get(GET_ADMIN_PROFILE_ADMIN_URL, {
    headers: {
      "auth-token": token,
    },
  });
  return data;
};

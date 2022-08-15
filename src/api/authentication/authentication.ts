import axios from "axios";
import {
  GET_ADMIN_PROFILE_ADMIN_URL,
  LOGIN_ADMIN_URL,
  REGISTER_ADMIN_URL,
  RESET_PASSWORD_ADMIN_URL,
  SEND_PASSWORD_RESET_EMAIL_ADMIN_URL,
} from "../paths";
import {
  GetProfileResponse,
  ILoginFormData,
  IRegisterFormData,
  IResetPasswordFormData,
  ISendPasswordResetEmailFormData,
  LoginResponse,
  RegisterResponse,
  ResetPasswordResponse,
  SendPasswordResetEmailResponse,
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

export const sendPasswordResetEmail = async (
  formData: ISendPasswordResetEmailFormData
): Promise<SendPasswordResetEmailResponse> => {
  const { data } = await axios.post(
    SEND_PASSWORD_RESET_EMAIL_ADMIN_URL,
    formData
  );
  return data;
};

export const resetPassword = async (
  formData: IResetPasswordFormData,
  token: string
): Promise<ResetPasswordResponse> => {
  const { data } = await axios.patch(
    `${RESET_PASSWORD_ADMIN_URL}${token}`,
    formData
  );
  return data;
};

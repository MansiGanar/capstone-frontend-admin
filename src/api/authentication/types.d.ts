export interface IRegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export type RegisterResponse = {
  token: string;
};

export type LoginResponse = {
  token: string;
};

export type GetProfileResponse = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  __v: number;
};

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

export interface ISendPasswordResetEmailFormData {
  emailId: string;
}

export interface Envelope {
  from: string;
  to: string[];
}

export interface SendPasswordResetEmailResponse {
  accepted: string[];
  rejected: any[];
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}

export interface IResetPasswordFormData {
  password: string;
}

export interface ResetPasswordResponse {
  msg: string;
}

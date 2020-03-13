import { axiosPost, axiosGet, axiosPatch, axiosDelete, Response, axiosPut } from './http';
export interface LoginRequestData {
  email: string;
  password: string;
}
export interface SignRequestData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  role: string;
  photo?: any;
}
export interface createContact {
  name: string;
  email: string;
  message: string;
}
export const getDonations = ():Promise<Response<any>> => axiosGet('api/v1/donations');
export const getStartwar = (): Promise<Response<any>> => axiosGet('todos/1');
export const loginRequest = (data: LoginRequestData) => axiosPost('api/v1/users/login', { data });
export const signupRequest = (data: SignRequestData) => axiosPost('api/v1/users/signup', { data });
export const createContact = (data: createContact) => axiosPost('api/v1/contacts', { data });

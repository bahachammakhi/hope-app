import { axiosPost, axiosGet, axiosPatch, axiosDelete, Response, axiosPut } from './http';
export interface LoginRequestData {
  email: string;
  password: string;
}
export const getStartwar = (): Promise<Response<any>> => axiosGet('todos/1');
export const loginRequest = (data: LoginRequestData) => axiosPost('api/v1/users/login', { data });

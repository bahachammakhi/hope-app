import { axiosPost, axiosGet, axiosPatch, axiosDelete, Response, axiosPut } from './http';


export const getStartwar = (): Promise<Response<any>> => axiosGet('todos/1');
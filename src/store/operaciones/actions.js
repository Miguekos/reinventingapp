import { axiosInstance } from "boot/axios";

export async function callOperacionesAbrir_operacion({ commit }, payload) {
  console.log("callOperacionesAbrir_operacion", payload);
  const response = await axiosInstance.get(
    `/operacflujo/abrir_operacion/${payload}`
  );
  console.log(response.data);
  commit("getOperacionesAbrir_operacion", response.data);
}

export async function callOperacionesFilter({ commit }, payload) {
  const response = await axiosInstance.get(`/operaciones/${payload}`);
  console.log(response.data);
  commit("getOperacionesFilter", response.data.operaciones);
}

export async function callOperacionesFilterMarca({ commit }, payload) {
  const response = await axiosInstance.get(`/operaciones/marcas/${payload}`);
  console.log(response.data);
  commit("getOperacionesFilterMarca", response.data.modmar);
}

export async function callOperacionesAdd({ commit }, payload) {
  const response = await axiosInstance.post(`/operaciones`, payload);
  console.log(response.data);
  return response.data;
}

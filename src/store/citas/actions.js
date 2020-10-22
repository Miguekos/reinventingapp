import { axiosInstance } from "boot/axios";

export async function callCitas({ commit }) {
  const response = await axiosInstance.get(`/citas/all`);
  console.log(response.data);
  commit("getCitas", response.data.citas);
}

export async function callCitasFilter({ commit }, payload) {
  const response = await axiosInstance.get(`/citas/${payload}`);
  console.log(response.data);
  commit("getCitasFilter", response.data.citas);
}

export async function callCitasAdd({ commit }, payload) {
  const response = await axiosInstance.post(`/citas`, payload);
  console.log(response.data);
  return response.data;
}

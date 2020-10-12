import { axiosInstance } from "boot/axios";

export async function callPersonas({ commit }) {
  const response = await axiosInstance.get(`/personas/natural/all`);
  console.log(response.data);
  commit("getPersonas", response.data.personas);
}

export async function callPersonasFilter({ commit }, payload) {
  const response = await axiosInstance.get(`/personas/natural/${payload}`);
  console.log(response.data);
  commit("getPersonasFilter", response.data.personas);
}

export async function callPersonasAdd({ commit }, payload) {
  const response = await axiosInstance.post(`/personas/natural`, payload);
  console.log(response.data);
  return response.data;
}

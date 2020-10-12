import { axiosInstance } from "boot/axios";

export async function callUsers({ commit }) {
  const response = await axiosInstance.get(`/users/all`);
  console.log(response.data);
  commit("getUsers", response.data.user);
}

export async function callUsersFilter({ commit }, payload) {
  const response = await axiosInstance.get(`/users/${payload}`);
  console.log(response.data);
  commit("getUsersFilter", response.data.user);
}

export async function callUsersAdd({ commit }, payload) {
  const response = await axiosInstance.post(`/users`, payload);
  console.log(response.data);
  return response.data;
}

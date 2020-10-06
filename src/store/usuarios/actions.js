import { axiosInstance } from "boot/axios";
export async function callUsers({ commit }) {
  const response = await axiosInstance.get(`/users`);
  console.log(response.data);
  commit("getUsers", response.data.user);
}

import { axiosInstance } from "boot/axios";

const state = {
  get_listar_landin: [],
  dialogCrear: false
};

const mutations = {
  get_listar_landin(state, payload) {
    state.get_listar_landin = payload;
  }
};

const actions = {
  async call_listar_landin({ commit }, payload) {
    const response = await axiosInstance.post(`comerc/listar_landin`, payload);
    commit("get_listar_landin", response.data);
  }
};

const getters = {
  get_listar_landin(state) {
    return state.get_listar_landin;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

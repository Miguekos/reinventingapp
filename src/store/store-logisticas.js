import { axiosInstance } from "boot/axios";

const state = {
  get_listar_ordcom: []
};

const mutations = {
  get_listar_ordcom(state, payload) {
    state.get_listar_ordcom = payload;
  }
};

const actions = {
  async call_listar_ordcom({ commit }, payload) {
    const response = await axiosInstance.post(`/ordcom/listar_ordcom`, payload);
    commit("get_listar_ordcom", response.data);
  }
};

const getters = {
  get_listar_ordcom(state) {
    return state.get_listar_ordcom;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

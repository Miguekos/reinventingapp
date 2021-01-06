import { axiosInstance } from "boot/axios";

const state = {
  get_listar_ordcom: [],
  dialogCrear: false,
  dialogDetalleOrden: true,
  get_listar_pendie_visado_jefatura: [],
  get_listar_pendie_visado_gerencia: []
};

const mutations = {
  get_listar_ordcom(state, payload) {
    state.get_listar_ordcom = payload;
  },
  dialogCrear(state, payload) {
    state.dialogCrear = payload;
  },
  dialogDetalleOrden(state, payload) {
    state.dialogDetalleOrden = payload;
  },
  get_listar_pendie_visado_jefatura(state, payload) {
    state.get_listar_pendie_visado_jefatura = payload;
  },
  get_listar_pendie_visado_gerencia(state, payload) {
    state.get_listar_pendie_visado_gerencia = payload;
  }
};

const actions = {
  async call_listar_ordcom({ commit }, payload) {
    const response = await axiosInstance.post(`/ordcom/listar_ordcom`, payload);
    commit("get_listar_ordcom", response.data);
  },
  async call_listar_pendie_visado_jefatura({ commit }, payload) {
    const response = await axiosInstance.post(
      `/ordcom/listar_pendie_visado`,
      payload
    );
    commit("get_listar_pendie_visado_jefatura", response.data);
  },
  async call_listar_pendie_visado_gerencia({ commit }, payload) {
    const response = await axiosInstance.post(
      `/ordcom/listar_pendie_visado`,
      payload
    );
    commit("get_listar_pendie_visado_gerencia", response.data);
  }
};

const getters = {
  get_listar_ordcom(state) {
    return state.get_listar_ordcom;
  },
  get_listar_pendie_visado_jefatura(state) {
    return state.get_listar_pendie_visado_jefatura;
  },
  get_listar_pendie_visado_gerencia(state) {
    return state.get_listar_pendie_visado_gerencia;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

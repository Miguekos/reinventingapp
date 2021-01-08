import { axiosInstance } from "boot/axios";

const state = {
  get_empresas: [],
  dialogCrear: false,
  dialogDetalleOrden: false,
  get_combo_almacen: [],
  get_rep_kardex: [],
  get_rep_invent_valori: [],
  get_listar_produc_encont: [],
  get_listar_detall_ordcom: [],
  ordenCompra: null,
  get_catalogo_tcprovee: [],
  get_tcservic: [],
  get_catalogo_tcmoneda: []
};

const mutations = {
  get_empresas(state, payload) {
    state.get_empresas = payload;
  },
  dialogCrear(state, payload) {
    state.dialogCrear = payload;
  },
  dialogDetalleOrden(state, payload) {
    state.dialogDetalleOrden = payload;
  },
  get_combo_almacen(state, payload) {
    state.get_combo_almacen = payload;
  },
  get_rep_kardex(state, payload) {
    state.get_rep_kardex = payload;
  },
  get_rep_invent_valori(state, payload) {
    state.get_rep_invent_valori = payload;
  },
  get_listar_produc_encont(state, payload) {
    state.get_listar_produc_encont = payload;
  },
  get_listar_detall_ordcom(state, payload) {
    state.get_listar_detall_ordcom = payload;
  },
  ordenCompra(state, payload) {
    state.ordenCompra = payload;
  },
  get_catalogo_tcprovee(state, payload) {
    state.get_catalogo_tcprovee = payload;
  },
  get_tcservic(state, payload) {
    state.get_tcservic = payload;
  },
  get_catalogo_tcmoneda(state, payload) {
    state.get_catalogo_tcmoneda = payload;
  }
};

const actions = {
  async call_empresas({ commit }) {
    const response = await axiosInstance.get(`/articulo/empresas`);
    commit("get_empresas", response.data);
  },
  async call_combo_almacen({ commit }) {
    const response = await axiosInstance.get(`/reportes/combo_almacen`);
    commit("get_combo_almacen", response.data);
  },
  async call_rep_kardex({ commit }, payload) {
    const response = await axiosInstance.post(`/reportes/rep_kardex`, payload);
    commit("get_rep_kardex", response.data);
  },
  async call_rep_invent_valori({ commit }, payload) {
    const response = await axiosInstance.post(
      `/reportes/rep_invent_valori`,
      payload
    );
    commit("get_rep_invent_valori", response.data);
  },
  async call_listar_produc_encont({ commit }, payload) {
    const response = await axiosInstance.post(
      `/ordcom/listar_produc_encont`,
      payload
    );
    commit("get_listar_produc_encont", response.data);
  },
  async call_listar_detall_ordcom({ commit }, payload) {
    const response = await axiosInstance.post(
      `/ordcom/listar_detall_ordcom`,
      payload
    );
    commit("get_listar_detall_ordcom", response.data);
  },
  async call_insert_ordcom({ commit }, payload) {
    const response = await axiosInstance.post(`/ordcom/insert_ordcom`, payload);
    // commit("get_insert_ordcom", response.data);
    return response.data;
  },
  async call_visrec_ordcom({ commit }, payload) {
    const response = await axiosInstance.post(`/ordcom/visrec_ordcom`, payload);
    // commit("get_visrec_ordcom", response.data);
    return response.data;
  },
  async call_catalogo_tcprovee({ commit }, payload) {
    const response = await axiosInstance.get(
      `/ordcom/catalogo/tcprovee`,
      payload
    );
    commit("get_catalogo_tcprovee", response.data);
  },
  async call_tcservic({ commit }, payload) {
    const response = await axiosInstance.get(`/ordcom/tcservic`);
    commit("get_tcservic", response.data);
  },
  async call_catalogo_tcmoneda({ commit }) {
    const response = await axiosInstance.get(
      `/ordcom/catalogo/tcmoneda`,
      payload
    );
    commit("get_catalogo_tcmoneda", response.data);
  },
  async call_update_ordcom({ commit }, payload) {
    const response = await axiosInstance.get(`/ordcom/update_ordcom`);
    return response.data;
    // commit("get_update_ordcom", response.data);
  },
  async call_manten_produc_ordcom({ commit }, payload) {
    const response = await axiosInstance.post(
      `/ordcom/manten_produc_ordcom`,
      payload
    );
    return response.data;
    // commit("get_update_ordcom", response.data);
  }
};

const getters = {
  get_empresas(state) {
    return state.get_empresas;
  },
  get_combo_almacen(state) {
    return state.get_combo_almacen;
  },
  get_rep_kardex(state) {
    return state.get_rep_kardex;
  },
  get_rep_invent_valori(state) {
    return state.get_rep_invent_valori;
  },
  get_listar_produc_encont(state) {
    return state.get_listar_produc_encont;
  },
  get_listar_detall_ordcom(state) {
    return state.get_listar_detall_ordcom;
  },
  get_catalogo_tcprovee(state) {
    return state.get_catalogo_tcprovee;
  },
  get_tcservic(state) {
    return state.get_tcservic;
  },
  get_catalogo_tcmoneda(state) {
    return state.get_catalogo_tcmoneda;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

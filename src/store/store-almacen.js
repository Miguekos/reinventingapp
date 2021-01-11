import { axiosInstance } from "boot/axios";

const state = {
  get_listar_produc_ordtra_ingres: [],
  dialogIngresoOC: false,
  dialogIngresoTD: false,
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
  get_listar_produc_ordtra_ingres(state, payload) {
    state.get_listar_produc_ordtra_ingres = payload;
  },
  dialogIngresoOC(state, payload) {
    state.dialogIngresoOC = payload;
  },
  dialogIngresoTD(state, payload) {
    state.dialogIngresoTD = payload;
  }
};

const actions = {
  async call_listar_produc_ordtra_ingres({ commit }, payload) {
    const response = await axiosInstance.post(
      `/almace/listar_produc_ordtra_ingres`,
      payload
    );
    commit("get_listar_produc_ordtra_ingres", response.data);
  }
};

const getters = {
  get_listar_produc_ordtra_ingres(state) {
    return state.get_listar_produc_ordtra_ingres;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

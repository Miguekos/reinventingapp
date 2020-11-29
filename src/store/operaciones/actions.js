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

export async function call_serv_mater_mostrar_buscar({ commit }, payload) {
  const response = await axiosInstance.post(`/operacflujo/serv_mater_mostrar_buscar`, payload);
  console.log(response.data);
  commit("get_serv_mater_mostrar_buscar", response.data)
}

export async function call_mostrar_ingreso({ commit }, payload) {
  const response = await axiosInstance.post(`/operacflujo/mostrar_ingreso`, payload);
  console.log(response.data);
  commit("get_mostrar_ingreso", response.data)
}

export async function call_combo_cliente({ commit }) {
  const response = await axiosInstance.get(`/operacflujo/combo_cliente`);
  console.log(response.data);
  commit("get_combo_cliente", response.data)
}

export async function call_lista_vehiculo_ingreso({ commit }, payload) {
  const response = await axiosInstance.get(`/operacflujo/lista_vehiculo_ingreso/${payload}`);
  console.log(response.data);
  commit("get_lista_vehiculo_ingreso", response.data)
}

export async function call_nueva_operacion({ commit }, payload) {
  console.log("payload", payload);
  const response = await axiosInstance.post(`/operacflujo/nueva_operacion`, payload);
  console.log(response.data);
  return response.data
}

export async function call_add_servic_opera({ commit }, payload) {
  console.log("payload", payload);
  const response = await axiosInstance.post(`/operacflujo/add_servic_opera`, payload);
  // var ope_veh = req.body.ope_veh;
  // var cod_ope = req.body.cod_ope;
  // var tip_tra = req.body.tip_tra;
  // var cod_ser = req.body.cod_ser;
  // var imp_uni = req.body.imp_uni;
  // var tip_ser = req.body.tip_ser;
  console.log(response.data);
  return response.data
}

export async function call_add_materi_opera({ commit }, payload) {
  console.log("payload", payload);
  const response = await axiosInstance.post(`/operacflujo/add_materi_opera`, payload);
  // var cod_ope = req.body.cod_ope;
  // var cod_mat = req.body.cod_mat;
  // var cantida = req.body.cantida;
  // var imp_uni = req.body.imp_uni;
  // var cos_ven = req.body.cos_ven;
  console.log(response.data);
  return response.data
}
<template>
  <div class="q-pa-md">
    <!--    {{ get_listar_ordcom.operac }}-->
    <!--    Buscar Operacion-->
    <div class="row" align="center">
      <div class="col-1"></div>
      <div class="col-10 q-pb-md">
        <q-form @submit="buscarOperaciones">
          <div class="row">
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-input
                autofocus
                dense
                filled
                v-model="fe_emides"
                label="Registro Desde"
              />
            </div>
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-input
                autofocus
                dense
                filled
                v-model="fe_emihas"
                label="Registro Hasta"
              />
            </div>
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-input
                autofocus
                dense
                filled
                v-model="no_provee"
                label="Proveedor"
              />
            </div>
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-input
                autofocus
                dense
                filled
                v-model="nu_ordcom"
                label="Orden de Compra"
              />
            </div>
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-input
                autofocus
                dense
                filled
                v-model="ti_estado"
                label="Estado"
              />
            </div>
            <div class="col-xs-12 col-sm-1 q-pa-xs">
              <q-input
                autofocus
                dense
                filled
                v-model="co_barras"
                label="Código Artículo"
              />
            </div>
            <div class="col-xs-12 col-sm-1 q-pa-xs">
              <q-btn size="md" color="red" type="submit" icon-right="search" />
            </div>
          </div>
        </q-form>
      </div>
      <div class="col-1"></div>
    </div>
    <!--    Datos - Vehiculos - Cliente-->
    <div>
      <!-- TablaServicios -->
      <div class="row">
        <div class="col">
          <!--          {{ get_listar_produc_ordtra_ingres.message[0] }}-->
          <TablaPrincipal :info="get_listar_produc_ordtra_ingres.message" />
        </div>
      </div>
      <!-- TablaMateriales -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "IngresoOC",
  data() {
    return {
      fe_regdes: "",
      fe_reghas: "",
      no_provee: "",
      nu_ordcom: "",
      co_barras: ""
    };
  },
  computed: {
    ...mapGetters("almacen", ["get_listar_produc_ordtra_ingres"])
  },
  methods: {
    ...mapActions("almacen", ["call_listar_produc_ordtra_ingres"])
  },
  components: {
    TablaPrincipal: () => import("./Tabla")
  },
  async created() {
    this.$q.loading.show();
    await this.call_listar_produc_ordtra_ingres({
      fe_regdes: "",
      fe_reghas: "",
      no_provee: "",
      nu_ordtra: "",
      co_barras: "",
      il_ordtra: "OC"
    });
    this.$q.loading.hide();
  }
};
</script>

<style scoped></style>

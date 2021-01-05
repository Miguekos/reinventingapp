<template>
  <div class="q-pa-md">
    <!--    {{ getOperacionesAbrir_operacion }}-->
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
          {{ get_listar_ordcom }}
          <TablaPrincipal :info="get_listar_ordcom.result" />
        </div>
      </div>
      <!-- TablaMateriales -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("logisticas", ["get_listar_ordcom"])
  },
  name: "ListadodeOC",
  data() {
    return {
      maximizedToggle: false,
      buscarServiciosMateriales: "",
      agregarServicios: false,
      agregarMateriales: false,
      buscar: "",
      fe_emides: "",
      fe_emihas: "",
      no_provee: "",
      nu_ordcom: "",
      ti_estado: "",
      co_barras: ""
    };
  },
  components: {
    TablaPrincipal: () => import("./Tabla")
    // DialogAddServicios: () => import("./DialogAddServicios"),
  },
  methods: {
    ...mapActions("logisticas", ["call_listar_ordcom"]),
    async buscarOperaciones() {
      this.$q.loading.show();
      // this.$store.commit("operaciones/numeroDeOperacion", this.buscar);
      await this.call_listar_ordcom({
        fe_emides: `${this.fe_emides}`,
        fe_emihas: `${this.fe_emihas}`,
        no_provee: `${this.no_provee}`,
        nu_ordcom: `${this.nu_ordcom}`,
        ti_estado: `${this.ti_estado}`,
        co_barras: `${this.co_barras}`
      });
      this.$q.loading.hide();
    }
  },
  async created() {
    this.$q.loading.show();
    // await this.call_mostrar_ingreso();
    await this.call_listar_ordcom({
      fe_emides: `${this.fe_emides}`,
      fe_emihas: `${this.fe_emihas}`,
      no_provee: `${this.no_provee}`,
      nu_ordcom: `${this.nu_ordcom}`,
      ti_estado: `${this.ti_estado}`,
      co_barras: `${this.co_barras}`
    });
    // this.$router.replace("/operaciones?id=4");
    // this.$q.notify({
    //   message: "1. Nueva Operacion"
    // });
    this.$q.loading.hide();
  }
};
</script>

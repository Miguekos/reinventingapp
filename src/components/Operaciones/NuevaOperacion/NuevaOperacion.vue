<template>
  <div class="q-pa-md">
    <!--    {{ getOperacionesAbrir_operacion }}-->
    <!--    Buscar Operacion-->
    <div class="row" align="center">
      <div class="col-4"></div>
      <div class="col-4 q-pb-md">
        <q-form @submit="buscarOperaciones">
          <div class="row">
            <div class="col-9">
              <q-input
                autofocus
                dense
                v-model="buscar"
                label="Buscar por placa"
              />
            </div>
            <div class="col-3">
              <q-btn size="md" color="red" type="submit" icon-right="search" />
            </div>
          </div>
        </q-form>
      </div>
      <div class="col-4"></div>
    </div>
    <!--    Datos - Vehiculos - Cliente-->
    <div>
      <!-- TablaServicios -->
      <div class="row">
        <div class="col">
          <TablaListadeIngresoVehicular :info="get_mostrar_ingreso.operac" />
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
    ...mapGetters("operaciones", ["get_mostrar_ingreso"]),
  },
  name: "AbrirOperacion",
  data() {
    return {
      maximizedToggle: false,
      buscarServiciosMateriales: "",
      agregarServicios: false,
      agregarMateriales: false,
      buscar: "",
    };
  },
  components: {
    TablaListadeIngresoVehicular: () =>
      import("./TablaListadeIngresoVehicular"),
    // DialogAddServicios: () => import("./DialogAddServicios"),
  },
  methods: {
    ...mapActions("operaciones", ["call_mostrar_ingreso"]),
    async buscarOperaciones() {
      this.$q.loading.show();
      this.$store.commit("operaciones/numeroDeOperacion", this.buscar);
      await this.callOperacionesAbrir_operacion(this.buscar);
      this.$q.loading.hide();
    },
  },
  async created() {
    this.$q.loading.show();
    await this.call_mostrar_ingreso();
    this.$router.replace("/operaciones?id=1");
    this.$q.notify({
      message: "1. Nueva Operacion",
    });
    this.$q.loading.hide();
  },
};
</script>
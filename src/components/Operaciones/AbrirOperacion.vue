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
                label="Buscar Operación"
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
    <!--    {{ getOperacionesAbrir_operacion }}-->
    <div v-if="getOperacionesAbrir_operacion.res === 'ok'">
      <div class="row">
        <div class="col">
          <TablaDVC
            v-if="getOperacionesAbrir_operacion.operac.length > 0"
            :info="getOperacionesAbrir_operacion.operac"
            titulo="Datos de Operación"
            :hideheader="true"
            :hidebottom="true"
          />
        </div>
        <div class="col">
          <TablaV
            v-if="getOperacionesAbrir_operacion.vehicu.length > 0"
            :info="getOperacionesAbrir_operacion.vehicu"
            titulo="Vehículo"
            :hideheader="true"
            :hidebottom="true"
          />
        </div>
        <div class="col">
          <TablaC
            v-if="getOperacionesAbrir_operacion.client.length > 0"
            :info="getOperacionesAbrir_operacion.client"
            titulo="Cliente"
            :hideheader="true"
            :hidebottom="true"
          />
        </div>
      </div>
      <!-- TablaServicios -->
      <div class="row">
        <div class="col">
          <TablaServicios
            v-if="getOperacionesAbrir_operacion.servic.length > 0"
            :info="getOperacionesAbrir_operacion.servic"
            titulo="Servicios"
            :hideheader="false"
            :hidebottom="true"
            @click="agregarServicios = true"
          />
        </div>
      </div>
      <!-- TablaMateriales -->
      <div class="row">
        <div class="col">
          <TablaMateriales
            v-if="getOperacionesAbrir_operacion.materi.length > 0"
            :info="getOperacionesAbrir_operacion.materi"
            titulo="Materiales"
            :hideheader="false"
            :hidebottom="true"
            @click="agregarMateriales = true"
          />
        </div>
      </div>
      <q-dialog v-model="agregarServicios" persistent position="top">
        <DialogAddServicios />
      </q-dialog>
      <q-dialog v-model="agregarMateriales" persistent position="top">
        <DialogAddMateriales />
      </q-dialog>
    </div>
    <div v-if="getOperacionesAbrir_operacion.res === 'ko'">
      <q-banner dense inline-actions class="text-white bg-red">
        Error al cargar la info: {{ getOperacionesAbrir_operacion }}
        <template v-slot:action>
          <q-btn flat color="white" label="HOME" />
        </template>
      </q-banner>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("operaciones", ["getOperacionesAbrir_operacion"])
  },
  name: "AbrirOperacion",
  data() {
    return {
      buscarServiciosMateriales: "",
      agregarServicios: false,
      agregarMateriales: false,
      buscar: ""
    };
  },
  components: {
    TablaDVC: () => import("./TablaOperacion"),
    TablaV: () => import("./TablaVehiculo"),
    TablaC: () => import("./TablaCliente"),
    // Tabla: () => import("./TablaAbrirOperaciones"),
    TablaServicios: () => import("./TablaServiciosAbrirOperaciones"),
    TablaMateriales: () => import("./TablaMaterialesAbrirOperaciones"),
    DialogAddServicios: () => import("./DialogAddServicios"),
    DialogAddMateriales: () => import("./DialogAddMateriales")
  },
  methods: {
    ...mapActions("operaciones", ["callOperacionesAbrir_operacion"]),
    async buscarOperaciones() {
      this.$q.loading.show();
      await this.callOperacionesAbrir_operacion(this.buscar);
      this.$q.loading.hide();
    }
  },
  async created() {}
};
</script>

<style scoped></style>

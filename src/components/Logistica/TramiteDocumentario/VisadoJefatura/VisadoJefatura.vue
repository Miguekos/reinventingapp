<template>
  <div class="q-pa-md">
    <q-banner
      v-if="get_listar_pendie_visado_gerencia.res == 'ko'"
      dense
      inline-actions
      class="text-white bg-red"
    >
      {{ get_listar_pendie_visado_gerencia.message }} /
      {{ get_listar_pendie_visado_gerencia.operac }}
      <template v-slot:action>
        <q-btn flat color="white" label="Recargar" />
      </template>
    </q-banner>
    <!--    {{ getOperacionesAbrir_operacion }}-->
    <!--    Buscar Operacion-->
    <div class="row" align="center">
      <div class="col-1"></div>
      <div class="col-10 q-pb-md">
        <q-form @submit="buscarOperaciones">
          <div class="row">
            <div class="col-xs-12 col-sm-3 q-pa-xs">
              <!--              <q-btn size="md" color="red" type="submit" icon-right="search" />-->
            </div>
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-input
                clearable
                filled
                dense
                v-model="fe_emides"
                label="Fecha Inicio"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="fe_emides" mask="YYYY-MM-DD">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-input
                clearable
                filled
                dense
                v-model="fe_emihas"
                label="Fecha Inicio"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="fe_emihas" mask="YYYY-MM-DD">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-input
                autofocus
                dense
                filled
                v-model="OrdendeCompra"
                label="Orden de Compra"
              />
            </div>
            <div class="col-xs-12 col-sm-3 q-pa-xs">
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
          <!--          {{ get_listar_pendie_visado_gerencia }}-->
          <TablaPrincipal :info="get_listar_pendie_visado_gerencia.result" />
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
    ...mapGetters("tramites", ["get_listar_pendie_visado_gerencia"])
  },
  name: "VisadoJefatura",
  data() {
    return {
      maximizedToggle: false,
      buscarServiciosMateriales: "",
      agregarServicios: false,
      agregarMateriales: false,
      OrdendeCompra: "",
      buscar: "",
      co_tradoc: "",
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
    ...mapActions("tramites", ["call_listar_pendie_visado_gerencia"]),
    async buscarOperaciones() {
      this.$q.loading.show();
      // this.$store.commit("operaciones/numeroDeOperacion", this.buscar);
      await this.call_listar_pendie_visado_gerencia({
        co_tradoc: `${this.co_tradoc}`,
        co_tipvis: "S"
      });
      this.$q.loading.hide();
    }
  },
  async created() {
    this.$q.loading.show();
    await this.call_listar_pendie_visado_gerencia({
      co_tradoc: `${this.co_tradoc}`,
      co_tipvis: "S"
    });
    this.$router.replace("/logisticas/tramitedoc?id=2");
    this.$store.commit("example/location", "TramitesDoc / Visado Solicitante");
    // this.$q.notify({
    //   message: "1. Nueva Operacion"
    // });
    this.$q.loading.hide();
  }
};
</script>

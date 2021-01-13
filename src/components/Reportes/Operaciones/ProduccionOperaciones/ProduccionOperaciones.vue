<template>
  <div class="q-pa-md">
    <div class="row" align="center">
      <div class="col-2"></div>
      <div class="col-8 q-pb-md">
        <q-form @submit="buscarOperaciones">
          <div class="row">
            <div class="col-xs-12 col-sm-4 q-pa-xs">
              <q-select
                filled
                dense
                v-model="model"
                :options="options"
                label="Tipo de Agrupamiento"
              />
            </div>
            <div class="col-xs-12 col-sm-4 q-pa-xs">
              <q-select
                filled
                dense
                v-model="model"
                :options="options"
                label="Fecha de Actualizacion"
              />
            </div>
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-btn size="md" color="red" type="submit" icon-right="search" />
            </div>
          </div>
        </q-form>
      </div>
      <div class="col-2"></div>
    </div>
    <div>
      <div class="row">
        <div class="col">
          <!--          {{ get_produccion_operaciones.resultado[0] }}-->
          <Tabla :info="get_produccion_operaciones.resultado" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "Kardex",
  computed: {
    ...mapGetters("reportes", ["get_produccion_operaciones"])
  },
  data() {
    return {
      cod_ope: "",
      pla_veh: "",
      fec_des: "",
      fec_has: "",
      tip_rep: "",
      fecha_ini: "",
      fecha_fin: "",
      model: null,
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"]
    };
  },
  components: {
    Tabla: () => import("./Tabla")
  },
  methods: {
    ...mapActions("reportes", ["call_produccion_operaciones"])
  },
  buscarOperaciones() {
    console.log("buscarOperaciones");
  },
  async created() {
    this.$q.loading.show();
    await this.call_produccion_operaciones({
      cod_ope: "", // codigo de operacion (campo opcional)
      pla_veh: "", // placa (campo opcional)
      fec_des: "2020-01-01", // Fecha desde (Obligatorio)
      fec_has: "2020-12-10", // Fecha hasta (Obligatorio)
      tip_rep: "R" // tipo de Reporte R=Resumido D=Detallado (Obligatorio)
    });
    this.$q.loading.hide();
  }
};
</script>

<style scoped></style>

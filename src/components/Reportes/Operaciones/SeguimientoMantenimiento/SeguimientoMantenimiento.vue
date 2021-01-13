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
          <!--          {{ get_seguimiento_mantenimiento.resultado[0] }}-->
          <Tabla :info="get_seguimiento_mantenimiento.resultado" />
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
    ...mapGetters("reportes", ["get_seguimiento_mantenimiento"])
  },
  data() {
    return {
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
    ...mapActions("reportes", ["call_seguimiento_mantenimiento"])
  },
  buscarOperaciones() {
    console.log("buscarOperaciones");
  },
  async created() {
    this.$q.loading.show();
    await this.call_seguimiento_mantenimiento({
      cod_ope: "", // codigo de operacion (campo opcional)
      pla_veh: "", // placa (campo opcional)
      tip_tra: "0", // Tipo trabajo del filto  (Obligatorio)
      tip_cli: "0" // Tipo Cliente del filtro (Obligatorio)
    });
    this.$q.loading.hide();
  }
};
</script>

<style scoped></style>

<template>
  <q-page padding>
    <div>
      <Titulos @click="boton" titulo="Personas" />
    </div>
    <q-separator color="orange" />
    <!--    <div align="center">-->
    <!--      <Filtros />-->
    <!--    </div>-->
    <div v-if="getPersonas" align="center">
      <TablaFiltro
        :info="getPersonas"
        :columns="columns"
        paginas="15"
        :exportar="false"
        gridactivate="false"
      />
    </div>
    <div v-if="activarCrear">
      <DialogCrear :dialog="dialog" />
    </div>
    <!-- content -->
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PagePersonas",
  data() {
    return {
      activarCrear: false,
      dialog: false,
      columns: [
        {
          name: "co_vehicu",
          align: "left",
          label: "ID",
          field: "co_vehicu",
          sortable: true
        },
        {
          name: "no_marveh",
          align: "left",
          label: "Marca",
          field: "no_marveh",
          sortable: true
        },
        {
          name: "no_modveh",
          align: "left",
          label: "Modelo",
          field: "no_modveh",
          sortable: true
        },
        {
          name: "no_colveh",
          align: "left",
          label: "Color",
          field: "no_colveh",
          sortable: true
        },
        {
          name: "co_plaveh",
          align: "left",
          label: "Placa",
          field: "co_plaveh",
          sortable: true
        },
        {
          name: "action",
          align: "right",
          label: "Action",
          field: "action",
          sortable: true
        }
      ]
    };
  },
  computed: {
    ...mapGetters("personas", ["getPersonas"])
  },
  components: {
    Filtros: () => import("../components/Filtros"),
    Titulos: () => import("../components/Titulos"),
    TablaFiltro: () => import("../components/TablaFiltro"),
    DialogCrear: () => import("../components/Personas/Crear")
  },
  methods: {
    ...mapActions("personas", ["callPersonas"]),
    boton() {
      this.activarCrear = true;
      console.log("se preciono el boton");
      this.$store.commit("personas/dialogCrear", true);
    }
  },
  async created() {
    this.$q.loading.show();
    await this.callPersonas("all");
    this.$q.loading.hide();
  }
};
</script>

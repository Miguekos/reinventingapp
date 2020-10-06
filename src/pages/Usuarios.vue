<template>
  <q-page padding>
    <div>
      <Titulos @click="boton" titulo="Usuarios" />
    </div>
    <q-separator />
    <div align="center">
      <Filtros />
    </div>
    <div align="center">
      <TablaFiltro :info="getUsers" :columns="columns" />
    </div>
    <div>
      <DialogCrear :dialog="dialog" />
    </div>
    <!-- content -->
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PageUsuario",
  data() {
    return {
      dialog: false,
      columns: [
        {
          name: "co_usuari",
          align: "left",
          label: "ID",
          field: "co_usuari",
          sortable: true
        },
        {
          name: "no_usuari",
          align: "left",
          label: "Nombre",
          field: "no_usuari",
          sortable: true
        },
        {
          name: "il_activo",
          align: "left",
          label: "Activo",
          field: row => (row.il_activo ? "Activo" : "Inactivo"),
          sortable: true
        },
        {
          name: "detail",
          align: "left",
          label: "Detail",
          field: "detail",
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
    ...mapGetters("usuarios", ["getUsers"])
  },
  components: {
    Filtros: () => import("../components/Filtros"),
    Titulos: () => import("../components/Titulos"),
    TablaFiltro: () => import("../components/TablaFiltro"),
    DialogCrear: () => import("../components/Usuarios/CrearUsuario")
  },
  methods: {
    ...mapActions("usuarios", ["callUsers"]),
    boton() {
      console.log("se preciono el boton");
      this.$store.commit("usuarios/dialogCrear", true);
    }
  },
  created() {
    this.callUsers();
  }
};
</script>

<template>
  <div>
    <q-table
      color="primary"
      dense
      card-class="bg-amber-1 text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      :pagination="initialPagination"
      virtual-scroll
      class="my-sticky-header-table"
      title="Treats"
      :data="info"
      :filter="filter"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:top-right>
        <div class="row">
          <div class="q-pa-xs">
            <q-btn color="primary" label="Ingresar" @click="ingresar" />
          </div>
          <div class="q-pa-xs">
            <q-input
              filled
              dense
              debounce="300"
              v-model="filter"
              placeholder="Buscar"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>
      </template>
      <template v-slot:body-cell-ingresa="props">
        <q-td class="text-center" :props="props">
          <q-input
            color="red"
            dense
            reverse-fill-mask
            borderless
            v-model="props.row.ingresa"
            style="padding: 2px 2px 2px 10px; width: 100px; margin-left: 15px; height: 18px; border-left: gray solid 1px"
          />
          <!--          {{ props.row.ingresa }}-->
        </q-td>
      </template>
    </q-table>
    <q-dialog
      v-model="dialogIngresoTD"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-up"
      full-height
      full-width
    >
      <DialogIngresoTD />
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  props: ["info"],
  computed: {
    ...mapState("almacen", ["dialogIngresoTD"])
  },
  components: {
    DialogIngresoTD: () => import("./TablaB")
  },
  data() {
    return {
      filter: "",
      initialPagination: {
        sortBy: "name",
        descending: true,
        page: 1,
        rowsPerPage: 1000
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "Fecha OC",
          align: "left",
          field: row => row.fe_docume,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "co_docide",
          align: "center",
          label: "Ruc",
          field: "co_docide",
          sortable: true
        },
        {
          name: "no_razsoc",
          label: "Proveedor",
          field: "no_razsoc",
          sortable: true
        },
        { name: "no_ordtra", label: "Orden Compra", field: "no_ordtra" },
        { name: "co_barras", label: "Co_barras", field: "co_barras" },
        { name: "no_articu", label: "No_articu", field: "no_articu" },
        {
          name: "co_unimed",
          label: "Co_unimed",
          field: "co_unimed",
          sortable: true
        },
        {
          name: "ca_articu",
          label: "Ca_articu",
          field: "ca_articu",
          sortable: true
        },
        {
          name: "ca_ingres",
          label: "Ca_ingres",
          field: "ca_ingres",
          sortable: true
        },
        {
          name: "ca_pendie",
          label: "Ca_pendie",
          field: "ca_pendie",
          sortable: true
        },
        {
          name: "ingresa",
          label: "Ingresa",
          field: "ingresa",
          sortable: true
        }
      ],
      data: []
    };
  },
  methods: {
    ingresar() {
      this.$store.commit("almacen/dialogIngresoTD", true);
    }
  }
};
</script>

<style scoped></style>

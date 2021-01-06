<template>
  <div>
    <q-table
      color="primary"
      card-class="bg-amber-1 text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      title="Listado"
      :data="info"
      dense
      :filter="filter"
      :columns="columns"
      row-key="name"
      :pagination="initialPagination"
      virtual-scroll
      class="my-sticky-header-table"
    >
      <template v-slot:top-right>
        <q-btn color="primary" label="Nueva O/C" @click="crearOC"></q-btn>
        <q-input
          class="q-pl-sm"
          dense
          filled
          debounce="300"
          v-model="filter"
          placeholder="Buscar"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell="props">
        <q-td :props="props">
          {{ props.value }}
        </q-td>
      </template>
      <template v-slot:body-cell-no_ordcom="props">
        <q-td :props="props">
          <q-btn
            size="xs"
            color="primary"
            :label="`${props.row.no_ordcom}`"
            @click="generarOperacion(props.row)"
          />
        </q-td>
      </template>
    </q-table>
    <div>
      <DialogCrear :tipo="tipo" :info="dataEdit" />
    </div>
    <q-dialog
      v-model="dialogDetalleOrden"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-up"
      full-height
      full-width
    >
      <DialogGenerarOperacion />
    </q-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  props: {
    info: {
      type: Array
    }
  },
  computed: {
    ...mapState("logisticas", ["dialogCrear", "dialogDetalleOrden"]),
    ...mapGetters("logisticas", ["get_inform_ordcom"])
  },
  components: {
    DialogGenerarOperacion: () => import("./DialogDetalleOrden"),
    DialogCrear: () => import("./NuevaOC")
  },
  data() {
    return {
      filter: "",
      tipo: 1,
      orden: null,
      dataEdit: [],
      maximizedToggle: false,
      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 1000
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "Fecha",
          align: "left",
          field: row => row.fe_regist,
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
        { name: "no_ordcom", label: "Orden Compra", field: "no_ordcom" },
        { name: "no_estado", label: "Estado", field: "no_estado" },
        { name: "co_moneda", label: "Moneda", field: "co_moneda" },
        {
          name: "im_baseim",
          label: "Precio Neto",
          field: "im_baseim",
          sortable: true
        },
        {
          name: "im_pretot",
          label: "Precio Total",
          field: "im_pretot",
          sortable: true
        },
        {
          name: "ca_articu",
          label: "Cant. Produc.",
          field: "ca_articu",
          sortable: true
        },
        {
          name: "fe_autori",
          label: "Visado Jefatura",
          field: "fe_autori",
          sortable: true
        },
        {
          name: "fe_gerenc",
          label: "Visado Gerencia",
          field: "fe_gerenc",
          sortable: true
        },
        {
          name: "ca_arcadj",
          label: "Adjunto",
          field: "ca_arcadj",
          sortable: true
        },
        {
          name: "accion",
          label: "Accion",
          field: "accion",
          sortable: true
        }
      ]
    };
  },
  methods: {
    ...mapActions("logisticas", [
      "call_inform_ordcom",
      "call_listar_produc_encont",
      "call_listar_detall_ordcom"
    ]),
    async crearOC() {
      console.log("Crear O/C");
      this.$store.commit("logisticas/dialogCrear", true);
    },
    async generarOperacion(val) {
      this.$q.loading.show();
      this.$store.commit("logisticas/ordenCompra", val.co_ordcom);
      await this.call_inform_ordcom({
        co_ordcom: `${val.co_ordcom}`
      });
      await this.call_listar_produc_encont({
        co_ordcom: `${val.co_ordcom}`,
        co_catego: "",
        co_subcat: "",
        no_produc: ""
      });
      await this.call_listar_detall_ordcom({
        co_ordcom: `${val.co_ordcom}`
      });
      // await this.call_combo_cliente();
      // await this.call_lista_vehiculo_ingreso(val.co_aduana);
      console.log(val);
      this.$q.notify({
        message: `${val.co_ordcom}`
      });
      this.$store.commit("logisticas/dialogDetalleOrden", true);
      this.$q.loading.hide();
    }
  }
};
</script>

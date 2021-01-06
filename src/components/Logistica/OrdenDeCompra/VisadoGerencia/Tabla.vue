<template>
  <div>
    <!-- {{info}} -->
    <q-table
      color="primary"
      card-class="bg-amber-1 text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      title="Lista de Órdenes"
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
        <q-btn color="primary" label="Confirmar" @click="crearOC"></q-btn>
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
      <template v-slot:body-cell-no_operac="props">
        <q-td :props="props">
          <q-btn
            size="xs"
            color="primary"
            :label="`${props.row.no_operac}`"
            @click="generarOperacion(props.row)"
          />
        </q-td>
      </template>
    </q-table>
    <!--    <div>-->
    <!--      <DialogCrear :tipo="tipo" :info="dataEdit" />-->
    <!--    </div>-->
    <!--    <q-dialog-->
    <!--      v-model="operacionesid4"-->
    <!--      persistent-->
    <!--      :maximized="maximizedToggle"-->
    <!--      transition-show="slide-up"-->
    <!--      transition-hide="slide-down"-->
    <!--      full-height-->
    <!--      full-width-->
    <!--    >-->
    <!--      <DialogGenerarOperacion />-->
    <!--    </q-dialog>-->
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
    ...mapState("logisticas", ["dialogCrear"]),
    ...mapGetters("operaciones", ["get_lista_sermat_asignar"])
  },
  components: {
    // DialogGenerarOperacion: () => import("./DialogAsignarServicios")
    DialogCrear: () => import("./NuevaOC")
  },
  data() {
    return {
      tipo: 1,
      dataEdit: [],
      filter: "",
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
          name: "no_usuari",
          align: "center",
          label: "Ruc",
          field: "no_usuari",
          sortable: true
        },
        {
          name: "no_operac",
          label: "Proveedor",
          field: "no_operac",
          sortable: true
        },
        { name: "no_client", label: "Orden Compra", field: "no_client" },
        { name: "no_marveh", label: "Moneda", field: "no_marveh" },
        {
          name: "no_modveh",
          label: "Precio Neto",
          field: "no_modveh",
          sortable: true
        },
        {
          name: "no_verveh",
          label: "Precio Totla",
          field: "no_verveh",
          sortable: true
        },
        {
          name: "no_anoveh",
          label: "¿Visar?",
          field: "no_anoveh",
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
    ...mapActions("operaciones", [
      "call_combo_cliente",
      "call_lista_vehiculo_ingreso",
      "call_nueva_operacion",
      "call_lista_sermat_evalua",
      "call_lista_sermat_asignar",
      "call_combo_tecnico"
    ]),
    async crearOC() {
      console.log("Crear O/C");
      this.$store.commit("logisticas/dialogCrear", true);
    },
    async generarOperacion(val) {
      this.$q.loading.show();
      await this.call_lista_sermat_asignar(val.co_operac);
      // await this.call_combo_cliente();
      // await this.call_lista_vehiculo_ingreso(val.co_aduana);
      console.log(val);
      this.$q.notify({
        message: `${val.co_operac}`
      });
      this.$store.commit("operaciones/operacionesid4", true);
      this.$q.loading.hide();
    }
  },
  async created() {
    // await this.call_combo_tecnico();
  }
};
</script>

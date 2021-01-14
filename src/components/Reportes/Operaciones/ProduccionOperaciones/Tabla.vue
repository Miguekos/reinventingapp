<template>
  <div>
    <!--    {{ get_rep_kardex }}-->
    <q-table
      color="primary"
      card-class="bg-amber-1 text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      title="Resultado de Produccion Operaciones"
      :data="info"
      dense
      :filter="filter"
      row-key="name"
      :pagination="initialPagination"
      virtual-scroll
      class="my-sticky-header-table"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ titulos(col.label) }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:top-right>
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
      <template v-slot:body-cell-accion="props">
        <q-td :props="props">
          <q-btn size="xs" color="primary" label="Ver" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  props: ["info"],
  name: "Tabla",
  computed: {
    ...mapState("reportes", ["dialogCrear", "dialogDetalleOrden"])
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
          label: "Empresa",
          align: "left",
          field: row => row.fe_regist,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "co_docide",
          align: "center",
          label: "Almacén",
          field: "co_docide",
          sortable: true
        },
        {
          name: "no_razsoc",
          label: "Código",
          field: "no_razsoc",
          sortable: true
        },
        { name: "no_ordcom", label: "Artículo", field: "no_ordcom" },
        { name: "no_estado", label: "Cantidad", field: "no_estado" },
        { name: "co_moneda", label: "Precio Unitario", field: "co_moneda" },
        {
          name: "im_baseim",
          label: "Precio Total",
          field: "im_baseim",
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
        titulos(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
    }
};
</script>

<style scoped></style>

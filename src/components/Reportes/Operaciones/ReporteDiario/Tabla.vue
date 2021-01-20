<template>
  <div>
    <!--    {{ get_rep_kardex }}-->
    <!--    {{ info }}-->
    <q-table
      color="primary"
      card-class="bg-amber-1 text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      title="Resultado del Reporte Diario"
      :data="info"
      :columns="columns"
      dense
      :filter="filter"
      row-key="name"
      :pagination="initialPagination"
      virtual-scroll
      class="my-sticky-header-table"
    >
      <!--      <template v-slot:header="props">-->
      <!--        <q-tr :props="props">-->
      <!--          <q-th v-for="col in props.cols" :key="col.name" :props="props">-->
      <!--            {{ titulos(col.label) }}-->
      <!--          </q-th>-->
      <!--        </q-tr>-->
      <!--      </template>-->
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
          name: "co_descri",
          label: "Codigo",
          align: "left",
          field: "co_descri"
        },
        {
          name: "no_descri",
          label: "Descripcion",
          align: "left",
          field: "no_descri"
        },
        {
          name: "fe_actual",
          label: "Fecha",
          align: "left",
          field: "fe_actual"
        },
        {
          name: "ca_rechaz",
          label: "ca_rechaz",
          align: "left",
          field: "ca_rechaz"
        },
        {
          name: "im_rechaz",
          label: "im_rechaz",
          align: "left",
          field: "im_rechaz"
        },
        {
          name: "un_rechaz",
          label: "un_rechaz",
          align: "left",
          field: "un_rechaz"
        },
        {
          name: "ca_penide",
          label: "Cantidad pendiente",
          align: "left",
          field: "ca_penide"
        },
        {
          name: "im_pendie",
          label: "im_pendie",
          align: "left",
          field: "im_pendie"
        },
        {
          name: "un_pendie",
          label: "un_pendie",
          align: "left",
          field: "un_pendie"
        },
        {
          name: "ca_autori",
          label: "Cantidad autorizada",
          align: "left",
          field: "ca_autori"
        },
        {
          name: "im_autori",
          label: "im_autori",
          align: "left",
          field: "im_autori"
        },
        {
          name: "un_autori",
          label: "un_autori",
          align: "left",
          field: "un_autori"
        },
        {
          name: "ca_proces",
          label: "ca_proces",
          align: "left",
          field: "ca_proces"
        },
        {
          name: "im_proces",
          label: "im_proces",
          align: "left",
          field: "im_proces"
        },
        {
          name: "un_proces",
          label: "un_proces",
          align: "left",
          field: "un_proces"
        },
        {
          name: "ca_cerrad",
          label: "ca_cerrad",
          align: "left",
          field: "ca_cerrad"
        },
        {
          name: "im_cerrad",
          label: "im_cerrad",
          align: "left",
          field: "im_cerrad"
        },
        {
          name: "un_cerrad",
          label: "un_cerrad",
          align: "left",
          field: "un_cerrad"
        },
        {
          name: "ca_totale",
          label: "Cantidad total",
          align: "left",
          field: "ca_totale"
        },
        {
          name: "im_totale",
          label: "im_totale",
          align: "left",
          field: "im_totale"
        },
        {
          name: "un_totale",
          label: "un_totale",
          align: "left",
          field: "un_totale"
        },
        {
          name: "ca_dispon",
          label: "ca_dispon",
          align: "left",
          field: "ca_dispon"
        },
        {
          name: "im_dispon",
          label: "im_dispon",
          align: "left",
          field: "im_dispon"
        },
        {
          name: "un_dispon",
          label: "un_dispon",
          align: "left",
          field: "un_dispon"
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

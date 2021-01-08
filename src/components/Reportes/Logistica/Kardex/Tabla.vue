<template>
  <div>
    {{ get_rep_kardex.resultado[0] }}
    <q-table
      color="primary"
      card-class="bg-amber-1 text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      title="Kardex"
      :data="get_rep_kardex.resultado"
      dense
      :filter="filter"
      :columns="columns"
      row-key="name"
      :pagination="initialPagination"
      virtual-scroll
      class="my-sticky-header-table"
    >
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
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "Tabla",
  computed: {
    ...mapState("reportes", ["dialogCrear", "dialogDetalleOrden"]),
    ...mapGetters("reportes", ["get_rep_kardex"])
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
          field: row => row.no_empres,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "co_almace",
          align: "center",
          label: "Almacén",
          field: "co_almace",
          sortable: true
        },
        {
          name: "co_articu",
          label: "Código Artículo",
          field: "co_articu",
          sortable: true
        },
        { name: "co_articu", label: "Nombre Artículo", field: "co_articu" },
        { name: "fe_movini", label: "Fecha", field: "fe_movini" },
        { name: "fe_movini", label: "Documento", field: "fe_movini" },
        {
          name: "co_transa",
          label: "Transacción",
          field: "co_transa",
          sortable: true
        },
        {
          name: "ca_entuni",
          label: "Cantidad",
          field: "ca_entuni",
          sortable: true
        },
        {
          name: "ca_entuni",
          label: "Precio Unitario",
          field: "ca_entuni",
          sortable: true
        },
        {
          name: "im_enttot",
          label: "Importe Total",
          field: "im_enttot",
          sortable: true
        },
        {
          name: "ca_saluni",
          label: "Cantidad",
          field: "ca_saluni",
          sortable: true
        },
        {
          name: "im_saluni",
          label: "Precio Unitario",
          field: "im_saluni",
          sortable: true
        },
        {
          name: "im_saltot",
          label: "Precio Total",
          field: "im_saltot",
          sortable: true
        },
        {
          name: "ca_resuni",
          label: "Cantidad",
          field: "ca_resuni",
          sortable: true
        },
        {
          name: "im_resuni",
          label: "Precio Unitario",
          field: "im_resuni",
          sortable: true
        },
        {
          name: "im_restot",
          label: "Precio Total",
          field: "im_restot",
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
    ...mapActions("reportes", ["call_rep_kardex"])
  },
  async created() {
    await this.call_rep_kardex({
      fec_des: "", // fecha inicio
      fec_has: "", // fecha fin
      cod_emp: "", // empresa (combo)
      cod_alm: "", // codigo almacen (combo)
      cod_art: "", // codigo articulo
      nom_art: "", // nombre articulo
      operaci: "" // Operacion
    });
  }
};
</script>

<style scoped></style>

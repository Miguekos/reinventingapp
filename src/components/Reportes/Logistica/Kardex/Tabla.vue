<template>
  <div>
    <!--    {{ get_rep_kardex.resultado }}-->
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
          label: "Código Artículo",
          field: "no_razsoc",
          sortable: true
        },
        { name: "no_ordcom", label: "Nombre Artículo", field: "no_ordcom" },
        { name: "no_estado", label: "Fecha", field: "no_estado" },
        { name: "co_moneda", label: "Documento", field: "co_moneda" },
        {
          name: "im_baseim",
          label: "Transacción",
          field: "im_baseim",
          sortable: true
        },
        {
          name: "im_pretot",
          label: "Cantidad",
          field: "im_pretot",
          sortable: true
        },
        {
          name: "ca_articu",
          label: "Precio Unitario",
          field: "ca_articu",
          sortable: true
        },
        {
          name: "fe_autori",
          label: "Importe Total",
          field: "fe_autori",
          sortable: true
        },
        {
          name: "fe_gerenc",
          label: "Cantidad",
          field: "fe_gerenc",
          sortable: true
        },
        {
          name: "ca_arcadj",
          label: "Precio Unitario",
          field: "ca_arcadj",
          sortable: true
        },
        {
          name: "ca_arcadj",
          label: "Precio Total",
          field: "ca_arcadj",
          sortable: true
        },
        {
          name: "ca_arcadj",
          label: "Cantidad",
          field: "ca_arcadj",
          sortable: true
        },
        {
          name: "ca_arcadj",
          label: "Precio Unitario",
          field: "ca_arcadj",
          sortable: true
        },
        {
          name: "ca_arcadj",
          label: "Precio Total",
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

<template>
  <div>
    <!--    {{ info }}-->
    <q-table
      color="primary"
      card-class="bg-amber-1 text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      title="Kardex"
      :data="info"
      :columns="columns"
      dense
      :filter="filter"
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
export default {
  props: ["info"],
  name: "Tabla",
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
          name: "no_almace",
          align: "center",
          label: "Almacén",
          field: "no_almace",
          sortable: true
        },
        {
          name: "co_articu",
          label: "Código Artículo",
          field: "co_articu",
          sortable: true
        },
        { name: "no_articu", label: "Nombre Artículo", field: "no_articu" },
        { name: "fe_movini", label: "Fecha", field: "fe_movini" },
        { name: "co_docume", label: "Documento", field: "co_docume" },
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
          name: "im_entuni",
          label: "Precio Unitario",
          field: "im_entuni",
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
  }
};
</script>

<style scoped></style>

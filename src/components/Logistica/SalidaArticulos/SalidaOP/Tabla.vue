<template>
  <div class="q-pa-md">
    <q-table
      color="primary"
      dense
      card-class="bg-amber-1 text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      :pagination="initialPagination"
      virtual-scroll
      class="my-sticky-header-table"
      title="Artículos a ingresar"
      :data="info"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-ingresa="props">
        <q-td class="text-center" :props="props">
          <q-input
            color="red"
            dense
            v-model="props.row.ingresa"
            style="padding: 2px 2px 2px 10px; width: 100px; margin-left: 15px; height: 18px; border-left: gray solid 1px"
          />
          <!--          {{ props.row.ingresa }}-->
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
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
          field: row => row.fe_operac,
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
          name: "no_client",
          label: "Proveedor",
          field: "no_client",
          sortable: true
        },
        { name: "no_operac", label: "Orden Compra", field: "no_operac" },
        { name: "co_plaveh", label: "Co_barras", field: "co_plaveh" },
        { name: "no_marmod", label: "No_articu", field: "no_marmod" },
        {
          name: "co_barras",
          label: "Co_unimed",
          field: "co_barras",
          sortable: true
        },
        {
          name: "no_articu",
          label: "Ca_articu",
          field: "no_articu",
          sortable: true
        },
        {
          name: "ca_articu",
          label: "Ca_ingres",
          field: "ca_articu",
          sortable: true
        },
        {
          name: "stock",
          label: "Ca_pendie",
          field: "stock",
          sortable: true
        },
        {
          name: "Ti_estado",
          label: "Ingresa",
          field: "Ti_estado",
          sortable: true
        },
        {
          name: "check",
          label: "Check",
          field: "check",
          sortable: true
        }
      ],
      data: []
    };
  }
};
</script>

<style scoped></style>

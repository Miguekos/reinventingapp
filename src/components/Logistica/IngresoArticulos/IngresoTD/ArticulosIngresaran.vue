<template>
  <div>
    <q-table
      dense
      flat
      bordered
      color="primary"
      card-class="bg-amber-1 text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      :pagination="initialPagination"
      virtual-scroll
      class="my-sticky-header-table"
      title="Artículos que ingresarán"
      :data="info"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn
              dense
              round
              size="sm"
              color="red"
              icon="delete"
            />
          </div>
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
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "Fe_ordcom",
          align: "left",
          field: row => row.fe_docume,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "co_procli",
          align: "center",
          label: "Co_docide",
          field: "co_procli",
          sortable: true
        },
        {
          name: "no_procli",
          label: "No_razsoc",
          field: "no_procli",
          sortable: true
        },
        { name: "no_prikey", label: "No_ordcom", field: "no_prikey" },
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
          name: "ca_ingsal",
          label: "Ca_ingres",
          field: "ca_ingsal",
          sortable: true
        },
        {
          name: "ca_pendie",
          label: "Ca_pendie",
          field: "ca_pendie",
          sortable: true
        },
        {
          name: "action",
          label: "Accion",
          field: "action",
          sortable: true
        }
      ],

      data: []
    };
  }
};
</script>

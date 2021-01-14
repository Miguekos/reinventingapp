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
      title="Datos de Ingreso"
      :data="info"
      :columns="columns"
      :filter="filter"
      row-key="name"
    >
      <template v-slot:top-right>
        <div class="row">
          <div class="q-pa-xs">
            <q-btn color="primary" @click="grabar" label="Grabar" />
          </div>
        </div>
      </template>
      <template v-slot:body-cell-empresa="props">
        <q-td :props="props">
          <q-select
            style="width: 100px"
            filled
            dense
            v-model="props.row.empresa"
            :options="options"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-almacen="props">
        <q-td :props="props">
          <q-select
            style="width: 100px"
            filled
            dense
            v-model="props.row.almacen"
            :options="options"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-descripcion="props">
        <q-td :props="props">
          <q-input filled dense v-model="props.row.descripcion" />
        </q-td>
      </template>
      <template v-slot:body-cell-guia="props">
        <q-td :props="props">
          <q-input filled dense v-model="props.row.guia" />
        </q-td>
      </template>
      <template v-slot:body-cell-documento="props">
        <q-td :props="props">
          <q-btn color="primary" icon="attachment" />
        </q-td>
      </template>
      <template v-slot:body-cell-acciones="props">
        <q-td :props="props">
          <q-btn color="red" icon="delete" round />
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["info"],
  data() {
    return {
      filter: "",
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
          label: "Orden Compra",
          align: "left",
          field: row => row.co_prikey,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "fe_regist",
          align: "center",
          label: "Fecha",
          field: "fe_regist",
          sortable: true
        },
        {
          name: "no_person",
          label: "Usuario",
          field: "no_person",
          sortable: true
        },
        { name: "no_ingsal", label: "Tipo", field: "no_ingsal" },
        { name: "empresa", label: "Empresa", field: "empresa" },
        { name: "almacen", label: "Almacén", field: "almacen" },
        {
          name: "descripcion",
          label: "Descripción",
          field: "descripcion",
          sortable: true
        },
        {
          name: "guia",
          label: "Guia Remisión (*)",
          field: "guia",
          sortable: true
        },
        {
          name: "documento",
          label: "Documento (*) ",
          field: "documento",
          sortable: true
        },
        {
          name: "acciones",
          label: "Acciones",
          field: "acciones",
          sortable: true
        }
      ],

      data: []
    };
  },
  methods: {
    ...mapActions("almacen", ["call_grabar_transa_ingsal"]),
    async grabar() {
      this.$q.loading.show();
      console.log("grabar");
      try {
        for (let i = 0; i < this.info.length; i++) {
          const element = this.info[i];
          console.log("element", element);
          await this.call_grabar_transa_ingsal({
            fe_regist: element.fe_regist,
            co_person: "92",
            il_unineg: "OC",
            ti_ingsal: "1",
            co_empres: "19",
            co_almace: "1",
            no_coment: element.descripcion,
            nu_guirem: element.guia,
            co_arcadj: "XXXX"
          });
        }
        // this.$store.commit("almacen/dialogSalidaOP", true);
        this.$q.notify({
          message: "Se grabo correctamente"
        });
        this.$q.loading.hide();
      } catch (e) {
        console.log(e);
        this.$q.loading.hide();
      }
    }
  }
};
</script>

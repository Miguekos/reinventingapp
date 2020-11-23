<template>
  <div class="q-pa-xs">
    <q-table
      color="primary"
      card-class="bg-amber-1 text-brown"
      table-class="text-grey-8"
      table-header-class="text-brown"
      dense
      :title="titulo"
      :data="info"
      row-key="name"
      :pagination="pagination"
      :hide-header="hideheader"
      :hide-bottom="hidebottom"
    >
      <template v-slot:top-right>
        <q-btn
          size="sm"
          color="orange"
          icon-right="add"
          label="Agregar Materiales"
          @click="agregarServiciosMateriales"
        />
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Array,
      default: function() {
        return [];
      }
    },
    titulo: {
      type: String
    },
    hideheader: {
      type: Boolean
    },
    hidebottom: {
      type: Boolean
    }
  },
  data() {
    return {
      pagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 8
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "Dessert (100g serving)",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "calories",
          align: "right",
          label: "Calories",
          field: "calories",
          sortable: true
        }
      ],
      data: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        }
      ]
    };
  },
  methods: {
    agregarServiciosMateriales() {
      console.log("Se preciono agregarServiciosMateriales");
      this.$emit("click");
    }
  }
};
</script>

<style scoped></style>

<template>
  <q-page padding>
    <div>
      <Titulos icon="face" color="orange" @click="boton" titulo="Personas" />
    </div>
    <q-separator color="orange" />
    <!--    <div align="center">-->
    <!--      <Filtros />-->
    <!--    </div>-->
    <div v-if="getPersonas" align="center">
      <TablaFiltro
        order="co_person"
        color="orange"
        tool="personas"
        @click="boton"
        :info="getPersonas"
        :columns="columns"
        paginas="15"
        :exportar="false"
        gridactivate="false"
      />
    </div>
    <!--    {{ $store.state.personas.dialogCrear }}-->
    <!--    <div v-if="$store.state.personas.dialogCrear">-->
    <!--      <DialogCrear :tipo="tipo" :info="dataEdit" />-->
    <!--    </div>-->
    <!--    <div v-if="$store.state.personas.dialogCrear">-->
    <!--    <div v-if="dialogCrear">-->
    <div align="center">
      <q-dialog
        persistent
        v-model="$store.state.personas.dialogCrear"
        style="width: 700px; max-width: 80vw"
        position="top"
      >
        <DialogCrear :tipo="tipo" :info="dataEdit" />
      </q-dialog>
    </div>
    <!--    </div>-->
    <!-- content -->
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PagePersonas",
  data() {
    return {
      tipo: 1,
      dataEdit: {},
      dialogCrear: false,
      activarCrear: false,
      dialog: false,
      columns: [
        {
          name: "co_person",
          align: "left",
          label: "ID",
          field: "co_person",
          sortable: true,
        },
        {
          name: "no_nombre",
          align: "left",
          label: "Nombre",
          field: "no_nombre",
          sortable: true,
        },
        {
          name: "ti_docide",
          align: "left",
          label: "Tipo de Documento",
          field: "ti_docide",
          sortable: true,
        },
        {
          name: "co_docide",
          align: "left",
          label: "N° de Documento",
          field: "co_docide",
          sortable: true,
        },
        {
          name: "nu_teléfo",
          align: "left",
          label: "Telefonos",
          field: "nu_teléfo",
          sortable: true,
        },
        {
          name: "action",
          align: "right",
          label: "Acciones",
          field: "action",
          sortable: true,
        },
      ],
    };
  },
  computed: {
    ...mapGetters("personas", ["getPersonas"]),
  },
  components: {
    Filtros: () => import("../components/Filtros"),
    Titulos: () => import("../components/Titulos"),
    TablaFiltro: () => import("../components/TablaFiltro"),
    DialogCrear: () => import("../components/Personas/Crear"),
  },
  methods: {
    ...mapActions("personas", ["callPersonas"]),
    boton(val) {
      console.log("Boton en Personas");
      this.tipo = val;
      if (val === 1) {
        console.log("Boton en Personas 1");
        this.dialogCrear = true;
        console.log("se preciono el boton");
        this.$store.commit("personas/dialogCrear", true);
      } else if (val === 2) {
        this.dataEdit = this.$store.state.personas.dataEdit;
        console.log("Boton en Personas 2");
        this.dialogCrear = true;
        console.log("se preciono el boton");
        this.$store.commit("personas/dialogCrear", true);
      }
    },
  },
  async created() {
    this.$q.loading.show();
    await this.callPersonas("all");
    this.$q.loading.hide();
  },
};
</script>

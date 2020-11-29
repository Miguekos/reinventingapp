<template>
  <q-page>
    <div>
      <q-tabs v-model="tab" align="justify" class="">
        <q-tab class="text-purple" name="1" label="1. Nueva Operación" />
        <q-tab class="text-orange" name="2" label="2. Abrir Operación" />
        <q-tab class="text-teal" name="3" label="3. Pendientes de Evaluación" />
        <q-tab
          class="text-indigo"
          name="4"
          label="4. Pendientes de Asignación de Servicios"
        />
        <q-tab
          class="text-info"
          name="5"
          label="5. Pendientes de Ejecución de Servicio"
        />
        <q-tab
          class="text-teal"
          name="6"
          label="6. PendientedeFinalizarServicio"
        />
      </q-tabs>
      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="fade"
          transition-next="fade"
        >
          <q-tab-panel name="1">
            <NuevaOperacion />
          </q-tab-panel>

          <q-tab-panel name="2">
            <div class="row">
              <div class="col">
                <AbrirOperacion />
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="3">
            <div class="text-h6">Movies</div>
            Nostrum necessitatibus expedita dolores? Voluptatem repudiandae
            magni ea.
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
    <!--    <q-separator color="indigo" />-->
  </q-page>
</template>

<script>
export default {
  name: "PageOperaciones",
  data() {
    return {
      tab: "1",
    };
  },
  components: {
    AbrirOperacion: () => import("components/Operaciones/AbrirOperacion"),
    NuevaOperacion: () =>
      import("components/Operaciones/NuevaOperacion/NuevaOperacion"),
    Titulos: () => import("components/Titulos"),
  },
  methods: {
    boton(val) {
      // console.log("Boton en Materiales");
      this.tipo = val;
      if (val === 1) {
        // console.log("Boton en Materiales 1");
        // this.dialogCrear = true;
        // console.log("se preciono el boton");
        this.$store.commit("materiales/dialogCrear", true);
      } else if (val === 2) {
        this.dataEdit = this.$store.state.materiales.dataEdit;
        // console.log("Boton en Materiales 2");
        // this.dialogCrear = true;
        // console.log("se preciono el boton");
        this.$store.commit("materiales/dialogCrear", true);
      }
    },
  },
  async created() {
    if (this.$route.query.id != undefined) {
      this.tab = `${this.$route.query.id}`;
    }
  },
};
</script>

<template>
  <q-page>
    <div>
      <q-tabs v-model="tab" align="justify" class="">
        <q-tab
          class="text-purple"
          name="nuevaoperacion"
          label="1. Nueva Operación"
        />
        <q-tab
          class="text-orange"
          name="abriroperacion"
          label="2. Abrir Operación"
        />
        <q-tab
          class="text-teal"
          name="movies"
          label="3. Pendientes de Evaluación"
        />
        <q-tab
          class="text-teal"
          name="movies"
          label="4. Pendientes de Asignación de Servicios"
        />
        <q-tab
          class="text-teal"
          name="movies"
          label="5. Pendientes de Ejecución de Servicio"
        />
        <q-tab
          class="text-teal"
          name="movies"
          label="6. Pendiente de Finalizar Servicio"
        />
      </q-tabs>
      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="fade"
          transition-next="fade"
        >
          <q-tab-panel name="nuevaoperacion"> </q-tab-panel>

          <q-tab-panel name="abriroperacion">
            <div class="row">
              <div class="col">
                <AbrirOperacion />
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="movies">
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
      tab: "nuevaoperacion",
    };
  },
  components: {
    AbrirOperacion: () => import("components/Operaciones/AbrirOperacion"),
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
};
</script>

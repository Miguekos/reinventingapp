<template>
  <q-page>
    <div>
      <!--      <Titulos-->
      <!--        icon="list_alt"-->
      <!--        color="indigo"-->
      <!--        @click="boton"-->
      <!--        titulo="Operaciones - Abrir Operaciones"-->
      <!--      />-->
      <q-tabs
        align="justify"
        v-model="tab"
        indicator-color="transparent"
        active-color="white"
        class="bg-teal text-grey-5 shadow-2"
      >
        <q-route-tab
          alert="yellow"
          name="mails"
          label="1. Nueva Operación"
          to="/operaciones"
        >
          <q-badge color="primary" text-color="white" floating>2</q-badge>
        </q-route-tab>
        <q-route-tab label="2. Abrir Operación" name="alarms" to="/materiales">
          <q-badge color="primary" text-color="white" floating>3</q-badge>
        </q-route-tab>
        <q-route-tab
          alert="orange"
          name="movies"
          label="3. Pendientes de Evaluación"
          to=""
        >
          <q-badge color="primary" text-color="white" floating>5</q-badge>
        </q-route-tab>
      </q-tabs>
    </div>
    <!--    <q-separator color="indigo" />-->
    <div class="row">
      <div class="col">
        <AbrirOperacion />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageOperaciones",
  data() {
    return {
      tab: "mails"
    };
  },
  components: {
    AbrirOperacion: () => import("components/Operaciones/AbrirOperacion"),
    Titulos: () => import("components/Titulos")
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
    }
  }
};
</script>

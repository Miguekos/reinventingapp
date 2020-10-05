<template>
  <q-page padding>
    <div>
      <Titulos titulo="Vehiculos" />
    </div>
    <q-separator />
    <div align="center">
      <Filtros />
    </div>
    <!-- content -->
  </q-page>
</template>

<script>
export default {
  name: "PageVehiculos",
  components: {
    Filtros: () => import("../components/Filtros"),
    Titulos: () => import("../components/Titulos")
  }
};
</script>

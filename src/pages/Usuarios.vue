<template>
  <q-page padding>
    <div>
      <Titulos titulo="Usuarios" />
    </div>
    <q-separator />
    <div align="center">
      <Filtros />
    </div>
    <div align="center">
      <TablaFiltro />
    </div>
    <!-- content -->
  </q-page>
</template>

<script>
export default {
  name: "PageUsuario",
  components: {
    Filtros: () => import("../components/Filtros"),
    Titulos: () => import("../components/Titulos"),
    TablaFiltro: () => import("../components/TablaFiltro")
  }
};
</script>

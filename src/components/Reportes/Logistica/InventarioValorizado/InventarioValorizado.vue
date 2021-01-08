<template>
  <div class="q-pa-md">
    <div class="row" align="center">
      <div class="col-2"></div>
      <div class="col-12 q-pb-md">
        <q-form @submit="buscarOperaciones">
          <div class="row">
            <div class="col-xs-12 col-sm-4 q-pa-xs">
              <q-select
                filled
                dense
                v-model="model"
                :options="options"
                label="Empresa"
              />
            </div>
            <div class="col-xs-12 col-sm-4 q-pa-xs">
              <q-select
                filled
                dense
                v-model="model"
                :options="options"
                label="Almacen"
              />
            </div>
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-input
                autofocus
                dense
                filled
                v-model="CodigoArticulo"
                label="Codigo Articulo"
              />
            </div>
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-btn size="md" color="red" type="submit" icon-right="search" />
            </div>
          </div>
        </q-form>
      </div>
      <div class="col-2"></div>
    </div>
    <div>
      <!-- TablaServicios -->
      <div class="row">
        <div class="col">
          <!-- {{ get_lista_operaci_asignar }} -->
          <Tabla />
        </div>
      </div>
      <!-- TablaMateriales -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Kardex",
  data() {
    return {
      fecha_ini: "",
      fecha_fin: "",
      model: null,
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"]
    };
  },
  components: {
    Tabla: () => import("./Tabla")
  }
};
</script>

<style scoped></style>

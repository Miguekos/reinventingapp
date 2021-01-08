<template>
  <div class="q-pa-md">
    <div class="row" align="center">
<!--      <div class="col-2"></div>-->
      <div class="col-12 q-pb-md">
        <q-form @submit="buscarOperaciones">
          <div class="row">
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-input filled dense v-model="fecha_ini" label="Fecha Inicio">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="fecha_ini" mask="YYYY-MM-DD">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-input filled dense v-model="fecha_fin" label="Fecha Fin">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="fecha_fin" mask="YYYY-MM-DD">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-xs-12 col-sm-1 q-pa-xs">
              <q-select
                filled
                dense
                v-model="model"
                :options="options"
                label="Empresa"
              />
            </div>
            <div class="col-xs-12 col-sm-1 q-pa-xs">
              <q-select
                filled
                dense
                v-model="model"
                :options="options"
                label="Almacen"
              />
            </div>
            <div class="col-xs-12 col-sm-1 q-pa-xs">
              <q-input
                autofocus
                dense
                filled
                v-model="CodigoArticulo"
                label="Codigo Articulo"
              />
            </div>
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-input
                autofocus
                dense
                filled
                v-model="NombreArticulo"
                label="Nombre Articulo"
              />
            </div>
            <div class="col-xs-12 col-sm-2 q-pa-xs">
              <q-input
                autofocus
                dense
                filled
                v-model="Operaciones"
                label="Operaciones"
              />
            </div>
            <div class="col-xs-12 col-sm-1 q-pa-xs">
              <q-btn size="md" color="red" type="submit" icon-right="search" />
            </div>
          </div>
        </q-form>
      </div>
<!--      <div class="col-2"></div>-->
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

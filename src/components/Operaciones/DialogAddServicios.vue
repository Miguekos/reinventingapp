<template>
  <div>
    <q-card class="full-height" square>
      <q-bar class="bg-primary">
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
      <q-card-section>
        <div class="row">
          <div class="col-xs-12 col-sm-5 q-px-sm">
            <q-select
              autofocus
              v-model="tipodebusqueda"
              :options="options"
              option-label="name"
              option-value="value"
              emit-value
              map-options
              label="Tipo de busqueda"
            />
          </div>
          <div class="col-xs-12 col-sm-5 q-px-sm">
            <q-input
              v-model="buscarServiciosMateriales"
              type="text"
              label="Escriba lo que desea buscar"
            />
          </div>
          <div
            class="col-xs-12 col-sm-2 q-px-sm text-center"
            style="align-self: center"
          >
            <q-btn
              size="md"
              color="primary"
              @click="buscarSM()"
              icon="search"
              label="Buscar"
            />
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section class="scroll">
        <div v-if="tipodebusqueda == 1" class="q-pa-xs">
          <q-table
            dense
            :grid="$q.screen.xs"
            title="Servicios"
            :data="get_serv_mater_mostrar_buscar.lis_bus_ser"
            :columns="columns1"
            row-key="name"
            :filter="filter"
          >
            <template v-slot:body-cell-acciones="props">
              <q-td :props="props">
                <div>
                  <q-btn
                    size="xs"
                    color="primary"
                    icon="add"
                    @click="agregarServicios(props.row)"
                  >
                    <q-tooltip content-class="bg-white text-primary"
                      >Agregar</q-tooltip
                    >
                  </q-btn>
                </div>
              </q-td>
            </template>
            <template v-slot:top-right>
              <q-input
                color="bg-red"
                dense
                debounce="300"
                v-model="filter"
                placeholder="Buscar"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
          </q-table>
        </div>
        <div v-if="tipodebusqueda == 2" class="q-pa-xs">
          <q-table
            dense
            :grid="$q.screen.xs"
            title="Materiales"
            :data="get_serv_mater_mostrar_buscar.lis_bus_mat"
            :columns="columns2"
            row-key="name"
            :filter="filter"
          >
            <template v-slot:body-cell-calories="props">
              <q-td :props="props">
                <div>
                  <q-input
                    style="height: 10px"
                    dense
                    borderless
                    v-model="cantidad"
                    type="text"
                    label="Cantidad"
                  />
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-fat="props">
              <q-td :props="props">
                <div>
                  <q-input
                    dense
                    borderless
                    v-model="precioUnitario"
                    type="text"
                    label="Precio Unitario"
                  />
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-carbs="props">
              <q-td :props="props">
                <div>
                  <!-- <q-badge color="purple" :label="props.value" /> -->
                  <q-btn
                    size="sm"
                    color="positive"
                    icon="check"
                    label="agregar"
                    @click="agregar(props.value)"
                  />
                </div>
                <!-- <div class="my-table-details">
                  {{ props.row.carbs }}
                </div> -->
              </q-td>
            </template>
            <template v-slot:top-right>
              <q-input
                borderless
                dense
                debounce="300"
                v-model="filter"
                placeholder="Buscar"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
          </q-table>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <TablaServiciosEdit
          :info="get_serv_mater_mostrar_buscar.lisseradd"
          titulo="Servicios"
          :hideheader="false"
          :hidebottom="true"
        />
      </q-card-section>
      <q-card-section>
        <TablaMaterialesEdit
          :info="get_serv_mater_mostrar_buscar.lismatadd"
          titulo="Materiales"
          :hideheader="false"
          :hidebottom="true"
        />
      </q-card-section>

      <!-- <q-card-actions align="right">
        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn flat label="Accept" color="primary" v-close-popup />
      </q-card-actions> -->
    </q-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
const stringOptions = ["Servicios", "Materiales"];
export default {
  name: "DialogAddServicios",
  computed: {
    ...mapGetters("operaciones", ["get_serv_mater_mostrar_buscar"]),
  },
  components: {
    TablaServiciosEdit: () => import("./TablaServiciosEdit"),
    TablaMaterialesEdit: () => import("./TablaMaterialesEdit"),
  },
  data() {
    return {
      model: null,
      infoMateriales: [],
      infoServicios: [],
      precioUnitario: null,
      cantidad: null,
      maximizedToggle: true,
      tipodebusqueda: null,
      options: [
        {
          name: "Servicios",
          value: 1,
        },
        {
          name: "Materiales",
          value: 2,
        },
      ],
      buscarServiciosMateriales: "",
      filter: "",
      columns1: [
        {
          name: "desc",
          required: true,
          label: "Operación",
          align: "left",
          field: (row) => row.co_operac,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "co_opeveh",
          align: "center",
          label: "Código",
          field: "co_opeveh",
          sortable: true,
        },
        { name: "fat", label: "Familia", field: "fat", sortable: true },
        { name: "no_tiptra", label: "Tipo de Trabajo", field: "no_tiptra" },
        { name: "no_servic", label: "Descripción", field: "no_servic" },
        { name: "no_tipser", label: "U.M", field: "no_tipser" },
        { name: "im_preuni", label: "Precio", field: "im_preuni" },
        { name: "co_plaveh", label: "Vehículo", field: "co_plaveh" },
        { name: "acciones", label: "Acciones", field: "acciones" },
      ],
      columns2: [
        {
          name: "desc",
          required: true,
          label: "Dessert (100g serving)",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "calories",
          align: "center",
          label: "Calories",
          field: "calories",
          sortable: true,
        },
        { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
        { name: "carbs", label: "Carbs (g)", field: "carbs" },
      ],
      data: [],
    };
  },
  methods: {
    ...mapActions("operaciones", ["call_serv_mater_mostrar_buscar"]),
    async agregarServicios(val) {
      this.$q.notify({
        massage: val,
      });
    },
    async buscarSM() {
      this.$q.loading.show();
      await this.call_serv_mater_mostrar_buscar({
        cod_ope: this.$store.state.operaciones.numeroDeOperacion,
        tip_fil: this.tip_fil ? this.tipodebusqueda : "S",
        descrip: this.descrip ? this.buscarServiciosMateriales : "",
      });
      this.$q.loading.hide();
    },
    agregar(val) {
      console.log("agregar");
      console.log(val);
      this.infoMateriales.push(val);
    },
  },
  async created() {
    // await this.call_serv_mater_mostrar_buscar({
    //   cod_ope: this.$store.state.operaciones.numeroDeOperacion,
    //   tip_fil: this.tip_fil ? this.tip_fil : "S",
    //   descrip: this.descrip ? this.descrip : "",
    // });
  },
};
</script>

<style scoped>
/* .my-table-details {
  font-size: 0.85em;
  font-style: italic;
  max-width: 200px;
  white-space: normal;
  color: #555;
  margin-top: 4px;
} */
</style>

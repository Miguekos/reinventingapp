<template>
  <div>
    <q-card class="full-height" square>
      <q-bar class="bg-primary text-white">
        Agregar Servicios y Materiales
        <q-space />
        <q-btn dense flat icon="close" @click="$emit('click')">
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
      <q-card-section>
        <q-form @submit="buscarSM" class="q-gutter-md">
          <div class="row">
            <div class="col-xs-12 col-sm-5 q-px-sm">
              <q-select
                dense
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
                dense
                label="Escriba lo que desea buscar"
              />
            </div>
            <div
              class="col-xs-12 col-sm-2 q-px-sm text-center"
              style="align-self: center"
            >
              <q-btn
                size="sm"
                color="primary"
                type="submit"
                icon="search"
                label="Buscar"
              />
            </div>
          </div>
        </q-form>
      </q-card-section>

      <q-separator />

      <q-card-section class="scroll">
        <div v-if="tipodebusqueda == 'S'" class="q-pa-xs">
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
                      >Agregar
                    </q-tooltip>
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
        <div v-if="tipodebusqueda == 'M'" class="q-pa-xs">
          <q-table
            dense
            :grid="$q.screen.xs"
            title="Materiales"
            :data="get_serv_mater_mostrar_buscar.lis_bus_mat"
            :columns="columns2"
            row-key="name"
            :filter="filter"
          >
            <template v-slot:body-cell-precioUnitario="props">
              <q-td class="campoeditartd" :props="props">
                <div>
                  <q-input
                    dense
                    filled
                    style="height: 10px"
                    v-model="props.row.precioUnitario"
                    mask="#.##"
                    fill-mask="0"
                    reverse-fill-mask
                    value="props.row.precioUnitario"
                  />
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-cantidad="props">
              <q-td class="campoeditartd" :props="props">
                <div>
                  <q-input
                    dense
                    filled
                    class="campoeditar"
                    v-model="props.row.cantidad"
                    mask="#"
                    fill-mask="0"
                    reverse-fill-mask
                  />
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-opciones="props">
              <q-td class="campoeditartd" :props="props">
                <div>
                  <q-select
                    dense
                    class="campoeditar"
                    v-model="props.row.opciones"
                    :options="optionsCV"
                    option-label="name"
                    option-value="value"
                    emit-value
                    map-options
                    filled
                  />
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-acciones="props">
              <q-td :props="props">
                <div>
                  <!-- <q-badge color="purple" :label="props.value" /> -->
                  <q-btn
                    size="sm"
                    color="positive"
                    icon="add"
                    @click="agregarMateriales(props.row)"
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
          @click="buscarSM"
        />

        <q-separator color="white" class="q-pa-xs" />

        <TablaMaterialesEdit
          :info="get_serv_mater_mostrar_buscar.lismatadd"
          titulo="Materiales"
          :hideheader="false"
          :hidebottom="true"
          @click="buscarSM"
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
    ...mapGetters("operaciones", ["get_serv_mater_mostrar_buscar"])
  },
  components: {
    TablaServiciosEdit: () => import("./TablaServiciosEdit"),
    TablaMaterialesEdit: () => import("./TablaMaterialesEdit")
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
      optionsCV: [
        {
          name: "Costo",
          value: "C"
        },
        {
          name: "Venta",
          value: "V"
        }
      ],
      options: [
        {
          name: "Servicios",
          value: "S"
        },
        {
          name: "Materiales",
          value: "M"
        }
      ],
      buscarServiciosMateriales: "",
      filter: "",
      columns1: [
        {
          name: "desc",
          required: true,
          label: "Operación",
          align: "left",
          field: row => row.co_operac,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "co_opeveh",
          align: "center",
          label: "Código",
          field: "co_opeveh",
          sortable: true
        },
        { name: "fat", label: "Familia", field: "fat", sortable: true },
        { name: "no_tiptra", label: "Tipo de Trabajo", field: "no_tiptra" },
        { name: "no_servic", label: "Descripción", field: "no_servic" },
        { name: "no_tipser", label: "U.M", field: "no_tipser" },
        { name: "im_preuni", label: "Precio", field: "im_preuni" },
        { name: "co_plaveh", label: "Vehículo", field: "co_plaveh" },
        { name: "acciones", label: "Acciones", field: "acciones" }
      ],
      columns2: [
        {
          name: "desc",
          required: true,
          label: "Operación",
          align: "left",
          field: row => row.co_articu,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "co_barras",
          align: "left",
          label: "Código",
          field: "co_barras",
          sortable: true
        },
        {
          name: "no_catpad",
          label: "Categoría",
          align: "left",
          field: "no_catpad",
          sortable: true
        },
        {
          name: "no_articu",
          align: "left",
          label: "Descripción",
          field: "no_articu"
        },
        {
          name: "co_vehicu",
          align: "left",
          label: "Vehículo",
          field: "co_vehicu"
        },
        {
          name: "precioUnitario",
          label: "Precio Unitario",
          align: "left",
          field: "precioUnitario"
        },
        {
          name: "cantidad",
          align: "left",
          label: "Cantidad",
          field: "cantidad"
        },
        { name: "opciones", align: "left", label: "Opción", field: "opciones" },
        { name: "acciones", align: "left", label: "Accion", field: "acciones" }
      ],
      data: []
    };
  },
  methods: {
    ...mapActions("operaciones", [
      "call_serv_mater_mostrar_buscar",
      "call_add_servic_opera",
      "call_add_materi_opera"
    ]),
    async agregarServicios(val) {
      try {
        console.log(val);
        const responseServiciosAdd = await this.call_add_servic_opera({
          ope_veh: `${val.co_opeveh}`,
          cod_ope: this.$store.state.operaciones.numeroDeOperacion,
          tip_tra: `${val.ti_tratal}`,
          cod_ser: `${val.co_servic}`,
          imp_uni: `${val.im_preuni}`,
          tip_ser: `${val.ti_servic}`
        });
        this.$q.notify({
          massage: val.no_servic
        });
        this.buscarSM();
      } catch (error) {
        this.$q.notify({
          massage: error
        });
      }
    },
    async buscarSM() {
      this.$q.loading.show();
      await this.call_serv_mater_mostrar_buscar({
        cod_ope: this.$store.state.operaciones.numeroDeOperacion,
        tip_fil: this.tipodebusqueda ? this.tipodebusqueda : "S",
        descrip: this.buscarServiciosMateriales
          ? this.buscarServiciosMateriales
          : ""
      });
      this.$q.loading.hide();
    },
    async agregarMateriales(val) {
      console.log("agregar");
      console.log(val);
      try {
        const responseMaterialesAdd = await this.call_add_materi_opera({
          cod_ope: this.$store.state.operaciones.numeroDeOperacion,
          cod_mat: `${val.co_articu}`,
          cantida: val.cantidad,
          imp_uni: parseFloat(val.precioUnitario),
          cos_ven: val.opciones
        });
        this.$q.notify({
          massage: responseMaterialesAdd.message
        });
        this.buscarSM();
      } catch (error) {
        console.log(error);
        this.$q.notify({
          massage: error
        });
      }
      // this.infoMateriales.push(val);
    }
  },
  async created() {
    console.log("Agregar Servicios y Materiales");
    this.$q.loading.show();
    await this.call_serv_mater_mostrar_buscar({
      cod_ope: this.$store.state.operaciones.numeroDeOperacion,
      tip_fil: "S",
      descrip: ""
    });
    await this.call_serv_mater_mostrar_buscar({
      cod_ope: this.$store.state.operaciones.numeroDeOperacion,
      tip_fil: "M",
      descrip: ""
    });
    this.$q.loading.hide();
  }
};
</script>

<style>
/* .my-table-details {
    font-size: 0.85em;
    font-style: italic;
    max-width: 200px;
    white-space: normal;
    color: #555;
    margin-top: 4px;
  } */
/* .q-field--dense .q-field__control,
  .q-field--dense .q-field__marginal {
    height: 15px;
    border-bottom: 1px solid black;
    width: 50px;
  } */
.campoeditartd {
  text-align: -webkit-center;
  /* text-align: center; */
}

.campoeditar {
  height: 15px;
  /* border-bottom: 1px solid black; */
  width: 100px;
}
</style>

<template>
  <div>
    <q-card class="full-height" square>
      <q-bar class="bg-primary text-white">
        Ingreso Vehicular
        <q-space />
        <q-btn dense flat icon="close" @click="cerrar">
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
      <q-card-section>
        <!--        <TablaA />-->
        <div class="row">
          <div class="col-xs-12 col-md-6 q-pa-xs">
            <q-card flat bordered class="my-card">
              <q-markup-table dense>
                <thead>
                  <tr>
                    <td class="text-left text-h6">Datos del Vehículo</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-left">Fecha</td>
                    <td class="text-right">159</td>
                  </tr>
                  <tr>
                    <td class="text-left">Placa</td>
                    <td class="text-right">237</td>
                  </tr>
                  <tr>
                    <td class="text-left">Marca</td>
                    <td class="text-right">262</td>
                  </tr>
                  <tr>
                    <td class="text-left">Modelo</td>
                    <td class="text-right">305</td>
                  </tr>
                  <tr>
                    <td class="text-left">Año</td>
                    <td class="text-right">356</td>
                  </tr>
                  <tr>
                    <td class="text-left">Color</td>
                    <td class="text-right">356</td>
                  </tr>
                  <tr>
                    <td class="text-left">Chasis</td>
                    <td class="text-right">356</td>
                  </tr>
                  <tr>
                    <td class="text-left">Motor</td>
                    <td class="text-right">356</td>
                  </tr>
                  <tr>
                    <td class="text-left">Kilometraje</td>
                    <td class="text-right">
                      <q-input filled dense v-model="Kilometraje" />
                    </td>
                  </tr>
                </tbody>
              </q-markup-table>
            </q-card>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-xs">
            <q-card flat bordered class="my-card">
              <q-markup-table dense>
                <thead>
                  <tr>
                    <td class="text-left text-h6">Datos del Cliente</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-left">Documento de Identidad</td>
                    <td class="text-right">
                      <q-input filled dense v-model="Kilometraje" />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">Apellido Paterno</td>
                    <td class="text-right">
                      <q-input filled dense v-model="Kilometraje" />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">Apellido Materno</td>
                    <td class="text-right">
                      <q-input filled dense v-model="Kilometraje" />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">Nombre del Cliente</td>
                    <td class="text-right">
                      <q-input filled dense v-model="Kilometraje" />
                    </td>
                  </tr>
                </tbody>
              </q-markup-table>
            </q-card>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-xs">
            <q-card flat bordered>
              <q-markup-table dense>
                <thead>
                  <tr>
                    <td class="text-left text-h6">Detalles de Ingreso</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-left">Centro de Operaciones</td>
                    <td class="text-right">
                      <q-select
                        filled
                        dense
                        v-model="model"
                        :options="options"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">Dirección</td>
                    <td class="text-right">237</td>
                  </tr>
                  <tr>
                    <td class="text-left">Descripción de ingreso</td>
                    <td class="text-right">
                      <q-input
                        filled
                        type="textarea"
                        dense
                        v-model="Kilometraje"
                      />
                    </td>
                  </tr>
                </tbody>
              </q-markup-table>
            </q-card>
          </div>
          <div class="col-xs-12 col-md-6 q-pa-xs">
            <q-card flat bordered>
              <q-markup-table dense>
                <thead>
                  <tr>
                    <td class="text-left text-h6">Salida Próxima</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-left">¿Tendrá Salida Cercana?</td>
                    <td class="text-right">
                      <q-select
                        filled
                        dense
                        v-model="model"
                        :options="options"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">Fecha</td>
                    <td class="text-right">
                      <q-select
                        filled
                        dense
                        v-model="model"
                        :options="options"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">Hora</td>
                    <td class="text-right">
                      <q-select
                        filled
                        dense
                        v-model="model"
                        :options="options"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left">Minutos</td>
                    <td class="text-right">
                      <q-select
                        filled
                        dense
                        v-model="model"
                        :options="options"
                      />
                    </td>
                  </tr>
                </tbody>
              </q-markup-table>
            </q-card>
          </div>
        </div>
      </q-card-section>

      <!--      <q-separator />-->

      <!--      <q-card-section>-->
      <!--        {{ get_buscar_operacion.result[0] }}-->
      <!--        <TablaBuscar :info="get_buscar_operacion.result" />-->
      <!--        <TablaB />-->
      <!--      </q-card-section>-->

      <!-- <q-card-actions align="right">
        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn flat label="Accept" color="primary" v-close-popup />
      </q-card-actions> -->
    </q-card>
  </div>
</template>

<script>
import { storagelocal } from "../../mixins/mixin";
import { mapActions, mapGetters } from "vuex";
const stringOptions = ["Servicios", "Materiales"];
export default {
  name: "DialogAddServicios",
  mixins: [storagelocal],
  components: {
    // TablaA: () => import("./DatosdeIngreso"),
    // TablaB: () => import("./ArticulosIngresaran")
  },
  computed: {},
  data() {
    return {
      model: null,
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      Kilometraje: "",
      cod_ope: "",
      pla_veh: "",
      fec_ini: "",
      fec_fin: "",
      loadboton: false,
      clienteSelect: null,
      infoMateriales: [],
      infoServicios: [],
      precioUnitario: null,
      cantidad: null,
      maximizedToggle: true,
      tipodebusqueda: null,
      newoptions: [],
      buscarServiciosMateriales: "",
      filter: "",
      columns1: [
        {
          name: "desc",
          required: true,
          label: "Fecha de Registro",
          align: "left",
          field: row => row.co_operac,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "co_opeveh",
          align: "center",
          label: "Usuario",
          field: "co_opeveh",
          sortable: true
        },
        { name: "fat", label: "N° Operación", field: "fat", sortable: true },
        { name: "no_tiptra", label: "Cliente", field: "no_tiptra" },
        { name: "no_servic", label: "Estado", field: "no_servic" },
        { name: "no_tipser", label: "Placa", field: "no_tipser" },
        { name: "im_preuni", label: "Marca", field: "im_preuni" },
        { name: "co_plaveh", label: "Modelo", field: "co_plaveh" },
        { name: "acciones", label: "Versión", field: "acciones" },
        { name: "acciones", label: "Año", field: "acciones" },
        { name: "acciones", label: "Color", field: "acciones" },
        { name: "acciones", label: "Chasis", field: "acciones" },
        { name: "acciones", label: "Motor", field: "acciones" },
        { name: "acciones", label: "Acciones", field: "acciones" }
      ],
      data: []
    };
  },
  methods: {
    ...mapActions("operaciones", [
      "call_combo_cliente",
      "call_lista_vehiculo_ingreso",
      "call_nueva_operacion",
      "call_buscar_operacion"
    ]),
    cerrar() {
      this.$store.commit("example/dialogIngresoVehicular", false);
    }
  },
  async created() {
    this.$q.loading.show();

    this.$q.notify({
      message: "Creando"
    });
    console.log("DialogBuscarOperacion.vue");
    this.$q.loading.hide();
  }
};
</script>

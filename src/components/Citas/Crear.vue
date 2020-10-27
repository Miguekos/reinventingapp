<template>
  <div>
    <!--    <q-dialog v-model="$store.state.citas.dialogCrear" position="top">-->
    <!--    <q-dialog v-model="dialogCrear" persistent position="top">-->
    <q-card v-if="mostrarFormulario">
      <q-card-section class="row items-center">
        <div>
          <div class="text-h5">Agregar Citas</div>
        </div>
      </q-card-section>
      <q-separator />
      <form @submit.prevent="onSubmit" @reset.prevent.stop="onReset">
        <q-card-section class="row items-center q-gutter-sm">
          <div class="col-12">
            <q-input
              dense
              ref="dni"
              filled
              v-model="dni"
              label="DNI"
              hint="Ingresa tu DNI"
              :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
            />
          </div>
          <div class="col-12">
            <q-input
              dense
              ref="nombres"
              filled
              v-model="nombres"
              label="Apellidos y Nombres *"
              hint="Ingresa nombre de usuario"
              :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
            />
          </div>
          <div class="col-12">
            <q-input
              dense
              ref="telefono"
              filled
              v-model="telefono"
              label="Telefono *"
              hint="Ingresa nombre de usuario"
              :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
            />
          </div>
          <div class="col-12">
            <q-input
              dense
              ref="placa"
              filled
              v-model="placa"
              label="Placa *"
              hint="Ingresa nombre de usuario"
              :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
            />
          </div>
          <div class="col-12">
            <q-select
              filled
              dense
              v-model="marca"
              :options="options"
              label="Marca"
              :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
            />
          </div>
          <div class="col-12">
            <q-select
              filled
              dense
              v-model="modelo"
              :options="options"
              label="Modelo"
              :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
            />
          </div>
          <div class="col-12">
            <q-input
              dense
              ref="color"
              filled
              v-model="color"
              label="Color *"
              hint="Ingresa nombre de usuario"
              :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
            />
          </div>
          <div class="col-12">
            <div class="q-pa-md">
              <div class="q-gutter-sm">
                <q-badge color="teal"> Model: {{ model }} </q-badge>
                <q-badge color="purple" text-color="white" class="q-ma-md">
                  Mask: YYYY-MM-DD HH:mm
                </q-badge>
              </div>

              <div class="q-gutter-md row items-start">
                <q-date
                  v-model="model"
                  mask="YYYY-MM-DD HH:mm"
                  color="purple"
                />
                <q-time
                  v-model="model"
                  mask="YYYY-MM-DD HH:mm"
                  color="purple"
                />
              </div>
            </div>
          </div>
          <div class="col-12">
            <q-select
              filled
              dense
              v-model="tipodetrabajo"
              :options="options"
              label="Tipo de Trabajo"
              :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
            />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="negative" v-close-popup outline>Cerrar</q-btn>
          <q-btn color="warning" type="reset" outline>reset</q-btn>
          <q-btn color="positive" type="submit" :loading="loadboton" outline
            >Guardar
          </q-btn>
        </q-card-actions>
      </form>
    </q-card>
    <!--    </q-dialog>-->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("citas", ["dialogCrear"])
  },
  name: "CreaCitas",
  data() {
    return {
      mostrarFormulario: true,
      model: "2019-02-22 21:02",
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      loadboton: false,
      username: "",
      dni: "",
      password: "",
      nombres: "",
      ape_pat: "",
      ape_mat: "",
      modelo: "",
      marca: "",
      placa: "",
      telefono: "",
      color: "",
      tipodetrabajo: ""
    };
  },
  methods: {
    ...mapActions("citas", ["callCitasAdd", "callCitas"]),
    cerrarDialogCrearUser() {
      this.$store.commit("citas/dialogCrear", false);
    },
    async onResert() {
      this.username = "";
      this.password = "";
      this.dni = "";
      this.ape_pat = "";
      this.ape_mat = "";
      this.nombres = "";
    },
    async onSubmit() {
      this.loadboton = true;
      console.log("asdasdasd");
      // this.$refs.username.validate();
      // this.$refs.dni.validate();
      // this.$refs.password.validate();
      // this.$refs.nombre.validate();
      // this.$refs.ape_pat.validate();
      // this.$refs.ape_mat.validate();
      //
      // if (
      //   this.$refs.username.hasError ||
      //   this.$refs.dni.hasError ||
      //   this.$refs.password.hasError
      // ) {
      //   this.formHasError = true;
      //   console.log("es un error");
      // } else {
      try {
        const responseAddUser = await this.callCitasAdd({
          codigo: null,
          id: this.username,
          password: this.password,
          doc_ide: this.dni,
          ape_pat: this.ape_pat,
          ape_mat: this.ape_mat,
          nombres: this.nombres,
          swt_emp: true,
          swt_act: true
        });
        console.log("responseAddUser", responseAddUser);
        if (responseAddUser.res == "ok") {
          this.loadboton = false;
          this.onResert();
          this.$q.notify({
            message: responseAddUser.message
          });
          this.callCitas("all");
          this.$store.commit("citas/dialogCrear", false);
        } else if (responseAddUser.res == "ko") {
          this.loadboton = false;
          this.$q.notify({
            message: `${responseAddUser.message} - verifique los campos`
          });
        }

        // this.q$.notify({
        //   message: responseAddUser
        // });
      } catch (e) {
        this.loadboton = false;
        this.onResert();
        this.$q.notify({
          message: "Error controlado"
        });
        console.log("se paso, en el excel");
      }
      // }
    }
  },
  async mounted() {
    this.$q.loading.show();
    console.log("mounted - crear - personas");
    if (this.tipo == 2) {
      // await this.callPersonasFilter(this.dataEdit.co_plaveh);
      // console.log("this.getPersonasFilter", this.dataEdit);
      // this.co_vehicu = this.dataEdit.co_vehicu;
      // this.placa = this.dataEdit.co_plaveh;
      // this.marca = Number(this.dataEdit.co_marveh);
      // this.modelo = this.dataEdit.co_modveh;
      // this.anio = this.dataEdit.nu_anofab;
      // this.chasis = this.dataEdit.nu_serveh;
      // this.motor = this.dataEdit.nu_motveh;
      // this.color = this.dataEdit.no_colveh;
      // await this.callMarcas("all");
      this.mostrarFormulario = true;
      this.$q.loading.hide();
    } else if (this.tipo == 1) {
      // await this.callMarcas("all");
      this.mostrarFormulario = true;
      this.$q.loading.hide();
    }
    this.$q.loading.hide();
    // this.mostrarFormulario = true;
  }
};
</script>

<style scoped></style>

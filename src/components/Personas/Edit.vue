<template>
  <div>
    <!--    <q-dialog v-model="$store.state.usuarios.dialogCrear" position="top">-->
    <q-dialog v-model="dialogCrear" persistent position="top">
      <q-card v-if="mostrarFormulario" style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center">
          <div>
            <div v-if="tipo == 1" class="text-h5">Agregar Vehiculos</div>
            <div v-else-if="tipo == 2" class="text-h5">Editar Vehiculos</div>
          </div>
        </q-card-section>
        <q-separator />
        <form @submit.prevent="onSubmit" @reset.prevent.stop="onReset">
          <q-card-section class="row items-center q-gutter-sm">
            <div class="col-12">
              <q-input
                dense
                ref="placa"
                filled
                v-model="placa"
                label="Placa"
                hint="Ingresa tu Placa"
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>

            <div class="col-12">
              <q-select
                filled
                dense
                v-model="versioncar"
                :options="options"
                label="Version"
                hint="Ingresa tu Version"
              />
            </div>
            <div class="col-12">
              <q-input
                dense
                ref="anio"
                filled
                v-model="anio"
                label="Año *"
                hint="Ingresa Año"
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
                hint="Ingresa Color"
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
            <div class="col-12">
              <q-input
                dense
                ref="chasis"
                filled
                v-model="chasis"
                label="Chasis *"
                hint="Ingresa Chasis"
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
            <div class="col-12">
              <q-input
                dense
                ref="motor"
                filled
                v-model="motor"
                label="Motor *"
                hint="Ingresa Motor"
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn color="negative" @click="cerrarDialogCrearUser" outline
              >Cerrar
            </q-btn>
            <q-btn color="warning" type="reset" outline>reset</q-btn>
            <q-btn color="positive" type="submit" :loading="loadboton" outline
              >Guardar
            </q-btn>
          </q-card-actions>
        </form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["tipo", "info"],
  computed: {
    ...mapState("usuarios", ["dialogCrear"])
  },
  name: "CrearUsuario",
  data() {
    return {
      options: ["v1.1", "v1.2", "v1.3", "v1.4", "v1.4"],
      mostrarFormulario: false,
      loadboton: false,
      placa: "",
      marca: "",
      modelo: "",
      versioncar: "",
      anio: "",
      color: "",
      chasis: "",
      co_vehicu: "",
      motor: "",
      username: "",
      dni: "",
      password: "",
      nombres: "",
      ape_pat: "",
      ape_mat: ""
    };
  },
  methods: {
    ...mapActions("usuarios", ["callUsersAdd", "callUsers"]),
    cerrarDialogCrearUser() {
      this.$store.commit("usuarios/dialogCrear", false);
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
        const responseAddUser = await this.callUsersAdd({
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
          this.callUsers("all");
          this.$store.commit("usuarios/dialogCrear", false);
        } else if (responseAddUser.res == "ko") {
          this.loadboton = false;
          this.$q.notify({
            message: `${responseAddUser.user.detail} - verifique los campos`
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
    // this.$q.loading.show();
    console.log("mounted - crear - personas");
    if (this.tipo == 2) {
      // await this.callVehiculosFilter(this.dataEdit.co_plaveh);
      // console.log("this.getVehiculosFilter", this.dataEdit);
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
      // this.$q.loading.hide();
    } else if (this.tipo == 1) {
      // await this.callMarcas("all");
      this.mostrarFormulario = true;
      // this.$q.loading.hide();
    }
    // this.$q.loading.hide();
    // this.mostrarFormulario = true;
  }
};
</script>

<style scoped></style>

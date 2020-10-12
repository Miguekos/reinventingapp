<template>
  <div>
    <!--    <q-dialog v-model="$store.state.vehiculos.dialogCrear" position="top">-->
    <q-dialog v-model="dialogCrear" persistent position="top">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center">
          <div>
            <div class="text-h5">Agregar Vehiculos</div>
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
                v-model="model"
                :options="options"
                label="Standard"
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
            <div class="col-12">
              <q-select
                filled
                dense
                v-model="model"
                :options="options"
                label="Standard"
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
          </q-card-section>
          <q-card-actions align="right">
            <q-btn color="negative" @click="cerrarDialogCrearUser" outline
              >Cerrar
            </q-btn>
            <q-btn color="warning" type="reset" outline>reset</q-btn>
            <q-btn color="positive" type="submit" :loading="loadboton" outline
              >Guardar</q-btn
            >
          </q-card-actions>
        </form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("vehiculos", ["dialogCrear"])
  },
  name: "CreaVehiculos",
  data() {
    return {
      model: null,
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      loadboton: false,
      username: "",
      dni: "",
      password: "",
      nombres: "",
      ape_pat: "",
      ape_mat: ""
    };
  },
  methods: {
    ...mapActions("vehiculos", ["callVehiculosAdd", "callVehiculos"]),
    cerrarDialogCrearUser() {
      this.$store.commit("vehiculos/dialogCrear", false);
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
        const responseAddUser = await this.callVehiculosAdd({
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
          this.callVehiculos("all");
          this.$store.commit("vehiculos/dialogCrear", false);
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
  created() {
    (this.username = ""), (this.dni = ""), (this.password = "");
  }
};
</script>

<style scoped></style>

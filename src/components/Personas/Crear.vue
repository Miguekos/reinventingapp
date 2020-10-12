<template>
  <div>
    <!--    <q-dialog v-model="$store.state.usuarios.dialogCrear" position="top">-->
    <q-dialog v-model="dialogCrear" persistent position="top">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center">
          <div>
            <div class="text-h5">Agregar Usuario</div>
          </div>
        </q-card-section>
        <q-separator />
        <form @submit.prevent="onSubmit" @reset.prevent.stop="onReset">
          <q-card-section class="row items-center q-gutter-sm">
            <div class="col-12">
              <q-input
                ref="username"
                filled
                v-model="username"
                label="Username *"
                hint="Ingresa nombre de usuario"
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
            <div class="col">
              <q-input
                ref="dni"
                filled
                v-model="dni"
                label="DNI"
                hint="Ingresa tu DNI"
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
            <div class="col">
              <q-input
                ref="password"
                filled
                type="text"
                v-model="password"
                label="Contraseña"
                hint="Ingresa contraseña"
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
            <div class="col-12">
              <q-input
                ref="nombres"
                filled
                v-model="nombres"
                label="Nombre Completo *"
                hint="Ingresa nombre de usuario"
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
            <div class="col">
              <q-input
                ref="ape_pat"
                filled
                v-model="ape_pat"
                label="Apellido Paterno *"
                hint="Apellido Paterno"
                :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
              />
            </div>
            <div class="col">
              <q-input
                ref="ape_mat"
                filled
                v-model="ape_mat"
                label="Apellido Materno *"
                hint="Apellido Materno"
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
    ...mapState("usuarios", ["dialogCrear"])
  },
  name: "CrearUsuario",
  data() {
    return {
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

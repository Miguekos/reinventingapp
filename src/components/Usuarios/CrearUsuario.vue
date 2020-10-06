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

        <q-card-section class="row items-center q-gutter-sm">
          <div class="col">
            <q-input
              ref="username"
              filled
              v-model="username"
              label="Username *"
              hint="Username"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
            />
          </div>
          <div class="col">
            <q-input
              ref="email"
              filled
              type="email"
              v-model="email"
              label="Tu email"
              hint="Email"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
            />
          </div>
          <div class="col">
            <q-input
              ref="password"
              filled
              type="text"
              v-model="password"
              label="Tu contraseña"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Campo obligatorio']"
            />
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn color="negative" @click="cerrarDialogCrearUser" outline
            >Cerrar</q-btn
          >
          <q-btn color="warning" type="reset" outline>reset</q-btn>
          <q-btn color="positive" @click="guardar" outline>Guardar</q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("usuarios", ["dialogCrear"])
  },
  name: "CrearUsuario",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    cerrarDialogCrearUser() {
      this.$store.commit("usuarios/dialogCrear", false);
    },
    guardar() {
      this.$refs.username.validate();
      this.$refs.email.validate();
      this.$refs.password.validate();

      if (
        this.$refs.username.hasError ||
        this.$refs.email.hasError ||
        this.$refs.password.hasError
      ) {
        this.formHasError = true;
        console.log("es un error");
      } else {
        console.log("se paso, en el excel");
      }
    }
  },
  created() {
    (this.username = ""), (this.email = ""), (this.password = "");
  }
};
</script>

<style scoped></style>

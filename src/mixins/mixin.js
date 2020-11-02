// Define un objeto _mixin_
import {Fechas} from "../directives/formatFecha";

const MixinDefault = {
  data() {
    return {};
  },
  created: function () {
  },
  methods: {
    noti(val) {
      if (val === 1) {
        this.$q.notify({
          message: "Se actualizo correctamente",
          color: "white",
          textColor: "blue-5",
          position: "top"
        });
      }
      if (val === 2) {
        this.$q.notify({
          message: "Ya esta asignado a este usuario",
          color: "white",
          textColor: "blue-5",
          position: "top"
        });
      }
      if (val === 3) {
        this.$q.notify({
          message: "Oh oh, algo salio mal",
          color: "white",
          textColor: "red-5",
          position: "top"
        });
      }
      if (val === 4) {
        this.$q.notify({
          message: "No puedes dejar campos vacios",
          color: "white",
          textColor: "red-5",
          position: "top"
        });
      }
      if (val === 5) {
        this.$q.notify({
          message: "No se encontro el registro",
          color: "white",
          textColor: "red-5",
          position: "top"
        });
      }
    },
    formatFecha(val) {
      return Fechas.larga(val);
    }
  }
};

const storagelocal = {
  data() {
    return {
      userLocal: null,
      idLocal: null,
    };
  },
  created: function () {
    const todo = this.$q.localStorage.getAll();
    this.idLocal = todo.co_usuari;
    this.userLocal = todo.UserDetalle;
    console.log("todo.UserDetalle", todo.UserDetalle);
  },
  methods: {}
};

export {MixinDefault, storagelocal};

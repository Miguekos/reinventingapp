// Define un objeto _mixin_
import { Fechas } from "../directives/formatFecha";

const MixinDefault = {
  data() {
    return {};
  },
  async created() {
    // this.$q.loading.show();
    console.log("Cargando Mixin Default");
    // console.log("this.info", this.info[0]);
    // const labels = {
    //   co_operac: "Codigo",
    //   co_vehicu: "Codigo Vehiculo",
    //   codigoProducto: "CodigoProducto",
    //   numDocumento: "NumDocumento",
    //   descDocumento: "DescDocumento",
    //   fechaVencimiento: "FechaVencimiento",
    //   fechaEmision: "FechaEmision",
    //   deuda: "Deuda",
    //   mora: "Mora",
    //   gastosAdm: "GastosAdm",
    //   pagoMinimo: "PagoMinimo",
    //   periodo: "Periodo",
    //   anio: "Anio",
    //   cuota: "Cuota",
    //   monedaDoc: "MonedaDoc",
    // };
    // for (let index = 0; index < this.info.length; index++) {
    //   const element = this.info[index];
    //   this.data.push(this.ObjKeyRename(element, labels));
    // }
    // console.log("asdasdasd", this.data);
  },
  methods: {
    ObjKeyRename(src, map) {
      var dst = {};
      for (var key in src) {
        if (key in map) {
          // rename key
          if (src[key] instanceof Array) {
            dst[map[key]] = src[key].map(i => ObjKeyRename(i, map));
          } else {
            dst[map[key]] = src[key];
          }
        } else {
          // same key
          dst[key] = src[key];
        }
      }
      return dst;
    },
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
    },
    formatFechaCorta(val) {
      return Fechas.Custom(val);
    }
  }
};

const storagelocal = {
  data() {
    return {
      userLocal: null,
      idLocal: null
    };
  },
  created: function() {
    const todo = this.$q.localStorage.getAll();
    this.idLocal = todo.co_usuari;
    this.userLocal = todo.UserDetalle;
    console.log("todo.UserDetalle", todo.UserDetalle);
  },
  methods: {}
};

export { MixinDefault, storagelocal };

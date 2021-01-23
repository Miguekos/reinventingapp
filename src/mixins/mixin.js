// Define un objeto _mixin_
import { Fechas } from "../directives/formatFecha";

const MixinDefault = {
  data() {
    return {
      labels: {
        co_operac: "Codigo",
        co_vehicu: "Codigo Vehiculo",
        codigoProducto: "CodigoProducto",
        numDocumento: "NumDocumento",
        descDocumento: "DescDocumento",
        fechaVencimiento: "FechaVencimiento",
        fechaEmision: "FechaEmision",
        deuda: "Deuda",
        mora: "Mora",
        gastosAdm: "GastosAdm",
        pagoMinimo: "PagoMinimo",
        periodo: "Periodo",
        anio: "Anio",
        cuota: "Cuota",
        monedaDoc: "MonedaDoc",
        no_period: "Periodo",
        co_barras: "Código",
        no_articu: "Nombre Artículo",
        co_unimed: "Unidad de Medida",
        ca_articu: "Cantidad Artículo",
        ca_ingres: "Cantidad Ingreso",
        ca_pendie: "Cantidad Pendiente",
        no_operac: "Operación",
        co_plaveh: "Placa",
        no_marmod: "Marca Modelo",
        fe_inipro: "Inicio Proceso",
        fe_finpro: "Fin Proceso",
        no_person: "Persona o Cliente",
        no_marveh: "Marca",
        no_modveh: "Modelo",
        nu_anomod: "Año",
        no_colveh: "Color",
        nu_serveh: "Chasis",
        nu_motveh: "Motor",
        ti_servic: "Tipo Servicio",
        se_ventas: "Servicios Venta",
        se_costos: "Servicios Costo",
        se_margen: "Servicios Margen",
        se_rentab: "Servicios Rentabilidad",
        ma_ventas: "Materiales Venta",
        ma_costos: "Materiales Costo",
        ma_margen: "Materiales Margen",
        ma_rentab: "Materiales Rentabilidad",
        ma_sd: "Sin Despachar",
        to_ventas: "Total Venta",
        to_costos: "Total Costo",
        to_margen: "Total Margen",
        to_rentab: "Total Rentabilidad",
        or_numbre: "Item",
        no_client: "Cliente",
        nu_telefo: "Teléfono",
        no_marcav: "Marca",
        no_modelo: "Modelo",
        ti_client: "Tipo Cliente",
        fe_entreg: "Fecha de Entrega",
        km_priing: "Kilometraje",
        no_tipser: "Tipo Servicio",
        fec_1k: "1000 KM",
        fec_5k: "5000 KM",
        fec_10k: "10000 KM",
        fec_15k: "15000 KM",
        fec_20k: "20000 KM",
        fec_25k: "25000 KM",
        fec_30k: "30000 KM",
        fec_35k: "35000 KM",
        fec_40k: "40000 KM",
        fec_45k: "45000 KM",
        fec_50k: "50000 KM",
        fec_55k: "55000 KM",
        fec_60k: "60000 KM",
        fec_65k: "65000 KM",
        fec_70k: "70000 KM",
        fec_75k: "75000 KM",
        fec_80k: "80000 KM",
        fec_85k: "85000 KM",
        fec_90k: "90000 KM",
        fec_100k: "100000 KM"
      }
    };
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

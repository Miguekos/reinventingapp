<template>
  <div>
    <!--    <q-uploader-->
    <!--      url="https://api.reinventing.com.pe/fileserver/myfiles/upload"-->
    <!--      method="POST"-->
    <!--      field-name="file"-->
    <!--    />-->
    <q-uploader
      v-model="archivo"
      extensions=".gif,.jpg,.jpeg,.png"
      :factory="factoryFnNew"
    />
    <q-btn
      :loading="loadboton"
      class="full-width"
      @click="guardar"
      color="positive"
      label="Guardar"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loadboton: false,
      selected_file: "",
      check_if_document_upload: false,
      archivo: ""
    };
  },
  methods: {
    ...mapActions("usuarios", ["callCambioFotper", "callUsers"]),
    factoryFn(files) {
      console.log(files[0]);
      return {
        // url: 'http://192.168.0.30:9776/envios//upload',
        url: () => `https://api.reinventing.com.pe/fileserver/myfiles/uploadfiles/`,
        method: "POST",
        // headers: () => [{name: 'Content-Type', value: 'multipart/form-data'}],
        fieldName: "files"
      };
    },
    async guardar() {
      this.loadboton = true;
      console.log("this.archivo", this.archivo);
      if (this.archivo) {
        this.callCambioFotper({
          id: 105,
          fot_per: this.archivo
        })
          .then(async resp => {
            console.log("resp", resp);
            await this.callUsers("all");
            this.$emit("click");
            this.loadboton = false;
          })
          .catch(error => {
            console.log("error", error);
            this.$emit("click");
            this.loadboton = false;
          });
      } else {
        this.$q.notify({
          message: "Debes subir una imagen antes de guardar"
        });
        this.loadboton = false;
      }
    },
    factoryFnNew(files) {
      // returning a Promise
      console.log(files[0].name);
      this.archivo = files[0].name;
      return new Promise(resolve => {
        // simulating a delay of 2 seconds
        // setTimeout(() => {
        resolve({
          url: "https://api.reinventing.com.pe/fileserver/myfiles/uploadfiles/",
          method: "POST",
          fieldName: "files"
        });
        // console.log("asdasd");
        // }, 2000);
      });
      // console.log("files");
    }
  }
};
// Get archivo
// http://localhost:9500/fileserver/myfiles/getfile/0.jpg
</script>

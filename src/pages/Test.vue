<template>
  <div>
    <!--    <q-uploader-->
    <!--      url="http://207.244.232.99:9500/fileserver/myfiles/upload"-->
    <!--      method="POST"-->
    <!--      field-name="file"-->
    <!--    />-->
    <q-uploader
      v-model="archivo"
      extensions=".gif,.jpg,.jpeg,.png"
      :factory="factoryFnNew"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected_file: "",
      check_if_document_upload: false,
      archivo: ""
    };
  },
  methods: {
    factoryFn(files) {
      console.log(files);
      return {
        // url: 'http://192.168.0.30:9776/envios//upload',
        url: () => `http://207.244.232.99:9500/fileserver/myfiles/uploadfiles/`,
        method: "POST",
        // headers: () => [{name: 'Content-Type', value: 'multipart/form-data'}],
        fieldName: "files"
      };
    },
    factoryFnNew(files) {
      // returning a Promise
      console.log(files);
      return new Promise(resolve => {
        // simulating a delay of 2 seconds
        // setTimeout(() => {
        resolve({
          url: "http://207.244.232.99:9500/fileserver/myfiles/uploadfiles/",
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

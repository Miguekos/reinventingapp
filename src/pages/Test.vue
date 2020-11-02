<template>
  <div>
    <q-uploader
      url="http://localhost:9500/fileserver/myfiles/upload"
      method="POST"
      field-name="file"
    />
    <q-uploader extensions=".gif,.jpg,.jpeg,.png" :factory="factoryFn" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected_file: "",
      check_if_document_upload: false
    };
  },
  methods: {
    factoryFn(files) {
      console.log(files);
      return {
        // url: 'http://192.168.0.30:9776/envios//upload',
        url: () => `http://localhost:9500/fileserver/myfiles/uploadfiles/`,
        method: "POST",
        // headers: () => [{name: 'Content-Type', value: 'multipart/form-data'}],
        fieldName: "files"
      };
    }
  }
};
// Get archivo
// http://localhost:9500/fileserver/myfiles/getfile/0.jpg
</script>

<template>
  <div>
    <div class="row">
      <div class="col"><u>Datos de la OC </u></div>
      <div class="col text-right q-pa-xs">
        <q-btn size="8px" color="primary" label="Actualizar" />
      </div>
    </div>
    <q-card flat bordered>
      <q-markup-table dense>
        <tbody>
          <tr>
            <td class="text-left">Nro. O/C</td>
            <td class="text-right">159</td>
          </tr>
          <tr>
            <td class="text-left">Fecha Registro</td>
            <td class="text-right">159</td>
          </tr>
          <tr>
            <td class="text-left">Proveedor</td>
            <td class="text-right">237</td>
          </tr>
          <tr>
            <td class="text-left">Tipo de Compra</td>
            <td class="text-right">262</td>
          </tr>
          <tr>
            <td class="text-left">Moneda</td>
            <td class="text-right">305</td>
          </tr>
          <tr>
            <td class="text-left">¿Con IGV?</td>
            <td class="text-right">356</td>
          </tr>
          <tr>
            <td class="text-left">Importe</td>
            <td class="text-right">356</td>
          </tr>
          <tr>
            <td class="text-left">Tipo de Pago</td>
            <td class="text-right">356</td>
          </tr>
          <tr>
            <td class="text-left">Motivo Compra</td>
            <td class="text-right">356</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "DatosdelaOC"
};
</script>

<style scoped></style>

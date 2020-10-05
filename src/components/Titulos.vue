<template>
  <div>
    <q-list separator>
      <q-item>
        <q-item-section class="text-h5">
          {{ titulo }}
        </q-item-section>
        <q-item-section side>
          <q-btn
            color="grey-4"
            text-color="purple"
            unelevated
            icon="add_circle_outline"
            label="Agregar"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String
    }
  },
  // name: 'ComponentName',
  data() {
    return {};
  }
};
</script>

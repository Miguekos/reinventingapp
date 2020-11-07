<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="text-h6">
          Miguel Rodriguez
          <!--          <q-btn-->
          <!--            round-->
          <!--            flat-->
          <!--            dense-->
          <!--            icon="close"-->
          <!--            class="float-right"-->
          <!--            color="grey-8"-->
          <!--            v-close-popup-->
          <!--          ></q-btn>-->
        </div>
      </q-card-section>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Ventas</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Coordinador de ventas</div>
          <div class="text-caption text-grey">
            Sales and Marketing Executive | Graduate and past committee |
            Keynote speaker on Selling and Recruiting Topics
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img class="rounded-borders" :src="fotoPerfil" />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-section>
        miguekos1233@gmail.com
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { storagelocal } from "../mixins/mixin";
export default {
  name: "PageIndex",
  mixins: [storagelocal],
  computed: {
    fotoPerfil() {
      // https://cdn.quasar.dev/img/boy-avatar.png
      if (this.userLocal.co_fotper) {
        return `https://api.reinventing.com.pe/fileserver/myfiles/getfile/${this.userLocal.co_fotper}`;
      } else {
        return `https://cdn.quasar.dev/img/boy-avatar.png`;
      }
    }
  },
  date() {
    return {
      employee_dialog: true
    };
  }
};
</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-secondary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          color="white"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <!--        <q-separator dark vertical inset />-->

        <q-toolbar-title>
          <q-img src="logo2.png" spinner-color="white" width="100px" />
          / {{ $store.state.example.location }}
          <!--          Reinventing Admin-->
        </q-toolbar-title>

        <!--        <div>Quasar v{{ $q.version }}</div>-->
        <q-btn
          flat
          dense
          round
          size="sm"
          color="black"
          aria-label="Menu"
          @click="activarProfile"
        >
          <q-avatar>
            <img width="50px" :src="fotoPerfil" />
            <!--            <q-badge color="negative" floating>-->
            <!--              4-->
            <!--            </q-badge>-->
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      class="left-navigation"
      v-model="leftDrawerOpen"
      style="
        background-image: url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg) !important;
      "
      side="left"
      elevated
    >
      <div class="full-height" :class="$q.dark.isActive ? 'drawer_dark' : ''">
        <div style="height: 85vh; padding: 10px">
          <!--          <q-toolbar>-->
          <div class="text-center">
            <span> MENU </span>
          </div>
          <!--            <q-avatar>-->
          <!--              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />-->
          <!--            </q-avatar>-->

          <!--            <q-toolbar-title>MENU</q-toolbar-title>-->
          <!--          </q-toolbar>-->
          <hr />
          <q-scroll-area style="height: 100%">
            <q-list padding>
              <EssentialLink
                v-for="link in essentialLinks"
                :key="link.title"
                v-bind="link"
              />

              <q-expansion-item
                class="q-ma-sm navigation-item"
                expand-separator
                icon="assignment_turned_in"
                label="Logistica"
                :content-inset-level="0.5"
              >
                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('/logisticas/ordenesdecompra')"
                >
                  <q-item-section avatar>
                    <q-icon name="assignment" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Ordenes de Compra</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('/logisticas/tramitedoc')"
                >
                  <q-item-section avatar>
                    <q-icon name="aspect_ratio" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Trámite Documentario</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                >
                  <q-item-section avatar>
                    <q-icon name="description" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Ingresos / Salidas</q-item-label>
                  </q-item-section>
                </q-item>
              </q-expansion-item>

              <q-expansion-item
                class="q-ma-sm navigation-item"
                expand-separator
                icon="receipt_long"
                label="Reporte"
                :content-inset-level="0.5"
              >
                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('/reportes/kardex')"
                >
                  <q-item-section avatar>
                    <q-icon name="assignment" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Kardex</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('/reportes/inventariovalorizado')"
                >
                  <q-item-section avatar>
                    <q-icon name="aspect_ratio" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Inventario Valorizado</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('reportes/reportediario')"
                >
                  <q-item-section avatar>
                    <q-icon name="description" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Operaciones</q-item-label>
                  </q-item-section>
                </q-item>
              </q-expansion-item>

              <q-item
                class="q-ma-sm navigation-item"
                clickable
                active-class="tab-active"
                v-ripple
                exact
                @click="Logout()"
              >
                <q-item-section avatar>
                  <q-icon name="logout" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>Salir</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </div>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-dialog v-model="dialogPerfil">
      <div style="width: 80%">
        <q-card>
          <q-card-section @click="alert = true" align="center">
            <q-img width="200px" class="rounded-borders" :src="fotoPerfil" />
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input filled v-model="userLocal.no_nombre" label="Nombres" />

              <q-input
                filled
                v-model="userLocal.no_apepat"
                label="Apellido Paterno"
              />

              <q-input
                filled
                v-model="userLocal.no_apemat"
                label="Apellido Materno"
              />

              <q-input filled v-model="userLocal.no_usuari" label="Usuario" />

              <!--              <q-input filled v-model="userLocal.phone" label="password" />-->

              <!--              <div>-->
              <!--                <q-btn label="Update" type="submit" color="primary" />-->
              <!--              </div>-->
            </q-form>
          </q-card-section>
        </q-card>
      </div>
      <q-dialog v-model="alert">
        <q-card>
          <Test @click="cerrarDialog" />
        </q-card>
      </q-dialog>
    </q-dialog>
  </q-layout>
</template>

<script>
import { storagelocal } from "../mixins/mixin";
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Usuarios",
    caption: "quasar.dev",
    icon: "group",
    link: "/usuarios"
  },
  {
    title: "Vehiculos",
    caption: "github.com/quasarframework",
    icon: "directions_car",
    link: "/vehiculos"
  },
  {
    title: "Personas",
    caption: "github.com/quasarframework",
    icon: "face",
    link: "/personas"
  },
  {
    title: "Citas",
    caption: "github.com/quasarframework",
    icon: "event",
    link: "/citas"
  },
  {
    title: "Materiales",
    caption: "github.com/quasarframework",
    icon: "list_alt",
    link: "/materiales"
  },
  {
    title: "Operaciones",
    caption: "github.com/quasarframework",
    icon: "rule",
    link: "/operaciones"
  }
  // {
  //   title: "Logistica",
  //   caption: "github.com/quasarframework",
  //   icon: "assignment_turned_in",
  //   link: "/logisticas"
  // },
  // {
  //   title: "Reportes",
  //   caption: "github.com/quasarframework",
  //   icon: "receipt_long",
  //   link: "/reportes"
  // }
];

export default {
  name: "MainLayout",
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
  components: {
    EssentialLink,
    Profile: () => import("pages/Profile"),
    Test: () => import("pages/Test")
  },
  data() {
    return {
      alert: false,
      info: null,
      user: {
        first_name: "",
        last_name: "",
        age: null,
        email: "",
        phone: ""
      },
      dialogPerfil: false,
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  },
  methods: {
    URL(arg) {
      this.$router.push(arg);
    },
    cerrarDialog() {
      this.alert = false;
      this.dialogPerfil = false;
    },
    activarProfile() {
      this.dialogPerfil = true;
      const info = this.$q.localStorage.getAll();
      this.info = info;
      console.log(info);
    },
    Logout() {
      this.$q.loading.show();
      this.$q.localStorage.clear();
      // setTimeout(() => {
      this.$router.push("/auth");
      this.$q.notify({
        // progress: true,
        message: "Regresa pronto",
        // icon: "favorite_border",
        // icon: "favorite",
        color: "white",
        textColor: "blue-5",
        position: "top"
      });
      this.$q.loading.hide();
      // }, 2000);
    }
  }
};
</script>
<style>
.q-drawer {
  /*background-image: url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg) !important;*/
  /*background-image: url("../assets/images/lake.jpg") !important;*/
  /*background-size: cover !important;*/
}

.drawer_normal {
  background-color: rgba(1, 1, 1, 0.75);
}

.drawer_dark {
  background-color: #010101f2;
}

.navigation-item {
  border-radius: 5px;
}

.tab-active {
  background-color: green;
}

body {
  background: #f1f1f1 !important;
}

.header_normal {
  background: linear-gradient(
    145deg,
    rgb(32, 106, 80) 15%,
    rgb(21, 57, 102) 70%
  );
}

.header_dark {
  background: linear-gradient(145deg, rgb(61, 14, 42) 15%, rgb(14, 43, 78) 70%);
}
</style>

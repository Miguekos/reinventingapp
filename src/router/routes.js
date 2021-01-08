const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "usuarios", component: () => import("pages/Usuarios.vue") },
      { path: "vehiculos", component: () => import("pages/Vehiculos.vue") },
      { path: "personas", component: () => import("pages/Personas.vue") },
      { path: "perfil", component: () => import("pages/Profile.vue") },
      { path: "citas", component: () => import("pages/Citas.vue") },
      { path: "test", component: () => import("pages/Test.vue") },
      { path: "materiales", component: () => import("pages/Material.vue") },
      { path: "operaciones", component: () => import("pages/Operaciones.vue") },
      { path: "logisticas", component: () => import("pages/Logistica.vue") },
      {
        path: "logisticas/ordenesdecompra",
        component: () =>
          import("components/Logistica/OrdenDeCompra/OrdenesDeCompra.vue")
      },
      {
        path: "logisticas/tramitedoc",
        component: () =>
          import("components/Logistica/TramiteDocumentario/TramiteDocumentario")
      },
      {
        path: "reportes/kardex",
        component: () => import("components/Reportes/Logistica/Kardex/Kardex")
      },
      {
        path: "reportes/inventariovalorizado",
        component: () =>
          import(
            "components/Reportes/Logistica/InventarioValorizado/InventarioValorizado"
          )
      },
      {
        path: "reportes/reportediario",
        component: () =>
          import("components/Reportes/Operaciones/ReporteDiario/ReporteDiario")
      }
    ]
  },
  {
    path: "/auth",
    component: () => import("pages/Auth/Login")
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;

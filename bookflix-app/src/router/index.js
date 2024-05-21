import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/InicioView.vue')
  },
  {
    path: '/descubre',
    name: 'Descubre',
    component: () => import('../views/DescubreView.vue')
  },
  {
    path: '/ventajas',
    name: 'Ventajas',
    component: () => import('../views/VentajasView.vue')
  },
  {
    path: '/experiencias',
    name: 'Experiencias',
    component: () => import('../views/ExperienciasView.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/ContactoView.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/sesionView.vue'),
    props: { rutaDefinida: 'registro'}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/sesionView.vue'),
    props: { rutaDefinida: 'login'}
  },
  {
    path: '/perfil/:id',
    name: 'Perfil',
    component: () => import('../views/SeleccionarUserView.vue'),
  },
  {
    path: '/editar-perfil/:id',
    name: 'editar-perfil',
    component: () => import('../views/EditarPerfilView.vue'),
  },
  {
    path: '/cambiar-imagen/:id',
    name: 'cambiar-imagen',
    component: () => import('../views/CambiarImagenView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

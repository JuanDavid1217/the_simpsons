import { createRouter, createWebHistory } from 'vue-router';
import { currentPage } from "@/services/GeneralService";

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/characters',
    children: [
      {
        path: '/characters',
        name: 'characters',
        component: () => import('../views/CharacterView.vue'),
        meta: {page: 1}
      },
      {
        path: '/episodes',
        name: "episodes",
        component: () => import('../views/EpisodeView.vue'),
        meta: {page: 2}
      },
      {
        path: '/locations',
        name: "locations",
        component: () => import('../views/LocationView.vue'),
        meta: {page: 3}
      }
    ]
  },
  //{
  //  path: '/about',
  //  name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  if(to.meta?.page) {
    currentPage.value = to.meta.page;
  }
  next();
});

export default router

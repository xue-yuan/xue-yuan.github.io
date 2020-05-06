import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '*',
    name: 'Unknown',
    component: Profile,
  },
  {
    path: '/',
    name: 'Profile',
    component: Profile,
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: "/http*",
    beforeEnter: to => {
      window.open(to.fullPath.substring(1), '_blank');
    }
  },
  {
    path: "/mailto*",
    beforeEnter: to => {
      window.open(to.fullPath.substring(1), '_blank');
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

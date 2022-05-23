import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import NoticeList from "@/views/NoticeList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/noticelist',
    name: 'noticelist',
    component: NoticeList
  }

]

const router = new VueRouter({
  routes
})

export default router

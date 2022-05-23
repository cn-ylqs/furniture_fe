import Vue from 'vue'
import VueRouter from 'vue-router'
import NoticeList from "@/views/NoticeList";
import Item from "@/views/Item";
import Staff from "@/views/Staff";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Noticelist',
    component: NoticeList
  },
  {
    path: '/noticelist',
    name: 'Noticelist',
    component: NoticeList
  },
  {
    path: '/staff',
    name: 'Staff',
    component: Staff
  },
  {
    path: '/item',
    name: 'Item',
    component: Item
  }

]

const router = new VueRouter({
  routes
})

export default router

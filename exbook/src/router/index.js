import Vue from 'vue'
import Router from 'vue-router'
import Library from '@/components/library'
import Book from '@/components/book'
import Showbooks from '@/components/showbooks'
import UserInfor from '@/components/userInfor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Showbooks',
      component: Showbooks
    },
    {
      path: '/library',
      component: Library
    },
    {
      path: '/book/:id',
      component: Book
    },
    {
      path: '/userInfor',
      component: UserInfor
    }
  ],
  mode: 'history'
})

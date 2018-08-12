import Vue from 'vue'
import Router from 'vue-router'
import Addblog from '@/components/addblog'
import ShowBlogs from '@/components/showblogs'
import SingleBlog from '@/components/singleblog'
import EditBlog from '@/components/editblog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowBlogs',
      component: ShowBlogs
    },
    {
      path: '/add',
      component: Addblog
    },
    {
      path: '/blog/:id',
      component: SingleBlog
    },
    {
      path: '/edit/:id',
      component: EditBlog
    }
  ],
  mode: 'history'
})

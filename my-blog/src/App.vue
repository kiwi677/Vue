<template>
  <div id="app">
    <BlogHeader></BlogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import ShowBlogs from './components/showblogs'
import AddBlog from './components/addblog'
import BlogHeader from './components/BlogHeader'
import SingleBlog from './components/singleblog'
export default {
  name: 'App',
  components: {
    ShowBlogs,
    AddBlog,
    BlogHeader,
    SingleBlog
  }
}
</script>

<style>
</style>

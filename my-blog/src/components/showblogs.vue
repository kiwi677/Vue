<template>
  <div  v-theme:column="'wide'" id="showblogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="Search">
    <div v-for="(blog, index) in filteredBlogs" :key="index" class="single-blog">
        <router-link v-bind:to="'/blog/' + blog.id">
            <h2 v-rainbow>{{blog.title | toUppercase}}</h2>
        </router-link>
        <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'showblogs',
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  created () {
    // this.$http.get('https://vue-blog-168b4.firebaseio.com/posts.json')
    // axios.get('https://vue-blog-168b4.firebaseio.com/posts.json')
    axios.get('/posts.json').then((data) => {
      // return data.json()
      return data.data
    }).then((data) => {
      var blogsArray = []
      for (let key in data) {
        // console.log(data[key])
        data[key].id = key
        blogsArray.push(data[key])
      }
      this.blogs = blogsArray
    })
  },
  computed: {
    filteredBlogs () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search)
      })
    }
  },
  filters: {
    toUppercase (value) {
      return value.toUpperCase()
    }
  },
  directives: {
    'rainbow': {
      bind (el, binding, vnode) {
        el.style.color = '#' + Math.random().toString(16).slice(2, 8)
      }
    }
  }
}
</script>

<style>
#showblogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #f3f3f3;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    outline: none;
    border-style: none;
    box-sizing: border-box;
    border-radius: 4px;
}
</style>

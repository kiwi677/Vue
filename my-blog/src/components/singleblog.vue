<template>
    <div id="singleblog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <button @click="deleteSingleblog()">DELETE</button>
        <router-link :to="'/edit/' + id">
          <button>EDIT</button>
        </router-link>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'singleblog',
  data () {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created () {
    // this.$http.get('https://vue-blog-168b4.firebaseio.com/posts/' + this.id + '.json')
    axios.get('/posts/' + this.id + '.json').then((data) => {
      // this.blog = data.body
      // return data.json()
      this.blog = data.data
    })
  },
  methods: {
    deleteSingleblog () {
      // this.$http.delete('https://vue-blog-168b4.firebaseio.com/posts/' + this.id + '.json')
      axios.delete('/posts/' + this.id + '.json').then(response => {
        this.$router.push({path: '/'})
      })
    }
  }
}
</script>
<style scoped>
#singleblog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
}
</style>

<template>
  <div id="edit-blog">
      <h2>编辑</h2>
      <form action="" v-if="!submmited">
          <label>标题</label>
          <input type="text" v-model="blog.title" required>
          <br>
          <label>内容</label>
          <textarea v-model="blog.content"></textarea>
          <div id="checkboxes">
              <label>电影</label>
              <input type="checkbox" value="电影" v-model="blog.categories">
              <label>Vue.js</label>
              <input type="checkbox" value="vue.js" v-model="blog.categories">
              <label>React.js</label>
              <input type="checkbox" value="React.js" v-model="blog.categories">
              <label>Angular.js</label>
              <input type="checkbox" value="Angular.js" v-model="blog.categories">
              <label>Node.js</label>
              <input type="checkbox" value="Node.js" v-model="blog.categories">
          </div>
          <label>作者</label>
          <select v-model="blog.author">
              <option v-for="(author, index) in authors" :key="index">{{author}}</option>
          </select>
          <button v-on:click.prevent="put">更改博客</button>
      </form>
      <div v-if="submmited">
          <h3>您的博客更改成功</h3>
      </div>
      <div id="preview">
          <h3>总览</h3>
          <p>博客标题： {{blog.title}}</p>
          <p>内容</p>
          <p>{{blog.content}}</p>
          <p>分类</p>
          <ul>
              <li v-for = "(category, index) in blog.categories" :key="index">
                  {{category}}
              </li>
          </ul>
          <p>作者： {{blog.author}}</p>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'editblog',
  data () {
    return {
      id: this.$route.params.id,
      blog: {},
      authors: ['kiwi', 'box', 'alice'],
      submmited: false
    }
  },
  methods: {
    fetchData () {
      axios.get('/posts/' + this.id + '.json').then((data) => {
        this.blog = data.data
      })
    },
    put () {
      axios.put('/posts/' + this.id + '.json', this.blog).then((data) => {
        this.submmited = true
        setTimeout(() => { this.$router.push({path: '/'}) }, 1600)
      })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: 0;
}
input{outline:none;border:none;background:none;}
#edit-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}
label{
    display: block;
    margin: 10px 0;
}
input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
    outline: none;
    border-style: none;
    border:1px solid blueviolet;
}
textarea{
    height: 200px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
button{
    display: block;
    width: 40%;
    height: 40px;
    color: #fff;
    margin: 20px auto;
    outline: none;
    border-style: none;
    background-color: blueviolet;
    border-radius: 4px;
}
#preview{
    border: 1px solid blueviolet;
    padding: 0;
}
h3{
    display: block;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background-color: blueviolet;
    margin:0;
    text-align: center;
}
#preview p{
    padding: 0 10px;
    margin: 10px 0;
}
#preview ul{
    margin: 0;
    padding: 0 20px;
}
#preview ul li{
    height: 32px;
    line-height: 32px;
    list-style: none;
    display: inline-block;
    margin: 0 10px;
    color: blueviolet;
    font-weight: 500;
}
</style>

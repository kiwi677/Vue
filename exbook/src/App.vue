<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Showbooks from './components/showbooks'
import Library from './components/library'
import Book from './components/book'

export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Showbooks,
    Library,
    Book
  }
}
</script>
<style ref='stylesheet/stylus' lang='stylus'>
.import 'assets/stylus/index.styl'
#app
  background #1e1e28
</style>

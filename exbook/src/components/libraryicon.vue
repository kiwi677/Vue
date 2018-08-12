<template>
  <div id="libraryicon">
    <router-link to="/library">
      <span class="icon-ebook_travel"></span>
      <p>kiwi</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'libraryicon',
  props: {
    score: {
      type: String
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    // console.log((this.score*10)%10/2)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style ref='stylesheet/stylus' lang='stylus'>
@import '../assets/stylus/index.styl'
#libraryicon
  position fixed
  bottom 48px
  right 0
  height 40px
  border-radius 24px 0 0 24px;
  background-color #448ae4
  box-shadow 0 0 8px rgba(0, 0, 0, 0.4)
  z-index 99
  padding-right 16px
  span
   width 32px
   height 32px
   border-radius 50%
   margin 4px
   display inline-block
   font-size 22px
   color #fff
   text-align center
   line-height 30px
  p
   float right
   height 40px
   line-height 40px
   color #fff
   font-weight 500
</style>

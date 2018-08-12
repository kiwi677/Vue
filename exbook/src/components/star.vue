<template>
  <div id="star">
    <div class="score-wrapper">
      <span v-for="(i) in parseInt(this.score/2)" :key=i class="icon-ebook_star"></span><span :style= "{fontSize: parseInt((this.score*5)%10*2.2) + 'px'}" class="icon-ebook_star"></span>
      <span class="score">{{this.score}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'star',
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
#star
  .score-wrapper
    height 22px
    .icon-ebook_star
      display inline-block
      text-align center
      line-height 22px
      font-size 22px
      color rgba(255, 102, 153, 1)
      vertical-align middle
    .score
      color rgb(255, 202, 56)
      font-weight 700
      font-size 22px
      vertical-align middle
</style>

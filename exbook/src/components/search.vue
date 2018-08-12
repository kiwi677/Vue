<template>
  <div id="search">
    <div class="search-wrapper">
        <label for="search">
            <span class="icon-ebook_search"></span>
            <input type="text" name="search" class="border-1px" value="请输入书名 \ 作者">
        </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      books: {}
    }
  },
  created () {
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style ref='stylesheet/stylus' lang='stylus'>
@import '../assets/stylus/index.styl'
#search
    .search-wrapper
        padding 0 24px 24px
        .icon-ebook_search
            font-size 24px
            color rgba(255, 255, 255, 0.6)
            position relative
            top 42px
            left 24px
        input
            height 60px
            width 100%
            padding 0 24px 0 64px
            box-sizing border-box
            background-color rgba(255, 255, 255, 0.1)
            outline none
            border-style none
            border-radius 4px
            border-1px(rgba(255, 255, 255, 0.2))
            font-size 12px
            color rgba(255, 255, 255, 0.3)
</style>

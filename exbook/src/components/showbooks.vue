<template>
    <div id="showbooks">
        <v-libraryicon></v-libraryicon>
        <div class="search-wrapper">
            <label for="search">
                <span class="icon-ebook_search"></span>
                <input type="text" v-model="search" palceholder="Search">
            </label>
        </div>
        <div class="books-wrapper" ref="booksWrapper" >
            <div class="books-content">
              <div class="singlebook" v-for="(book, index) in filteredBook " :key="index">
                <router-link v-bind:to="'/book/' + index">
                  <div class="image">
                    <img v-imgUrl :src="book.image" :alt="book.title">
                  </div>
                </router-link>
                <div class="content">
                  <h3>{{book.title}}</h3>
                  <p v-for="(author, index) in book.author" :key="index">{{author}}</p>
                  <p>{{book.summary}}</p>
                  <v-star :score = book.rating.average></v-star>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Bscroll from 'better-scroll'
import star from '../components/star'
import libraryicon from '../components/libraryicon'
export default {
  name: 'showbooks',
  data () {
    return {
      books: [],
      search: ''
    }
  },
  created () {
    axios.get('/books.json').then(
      res => {
        this.books = res.data
      }
    ).then(
      res => {
        this.$nextTick(() => {
          this.scroll = new Bscroll(this.$refs.booksWrapper, {
            click: true,
            taps: true
          })
        })
      }
    )
  },
  components: {
    'v-star': star,
    'v-libraryicon': libraryicon
  },
  computed: {
    filteredBook () {
      return this.books.filter((book) => {
        return book.title.match(this.search)
      })
    }
  }
}
</script>
<style ref='stylesheet/stylus' lang='stylus'>
@import '../assets/stylus/index.styl'
#showbooks
    background-color #222032
    height 100vh
    .search-wrapper
        margin 0 24px
        padding 24px 0
        position relative
        border-bottom 1px dashed rgba(48, 49 51, 1)
        .icon-ebook_search
            font-size 24px
            color rgba(255, 255, 255, 0.3)
            position absolute
            top 36px
            left 16px
        input[type="text"]
            width 100%
            height 48px
            padding 0 48px
            box-sizing border-box
            background-color rgba(48, 49 51, 0.6)
            outline none
            border-style none
            border-radius 4px
            // border-1px(rgba(255, 255, 255, 0.2))
            font-size 14px
            color #fff
            // box-shadow 0 2px 8px rgba(0, 0, 0, 0.6)
    .books-wrapper
        overflow hidden
        width 100%
        padding 0 24px
        box-sizing border-box
        position absolute
        top 112px
        left 0
        right 0
        bottom 0
        .singlebook
            height 124px
            position relative
            margin-bottom 24px
            .image
                height 108px
                width 75px
                background-color #555
                // border-radius 8px
                box-shadow 0 2px 8px rgba(0, 0, 0, 0.3)
                float left
                overflow hidden
                margin-left 16px
                img
                  color #cccccc
                  font-size 12px
                  line-height 24px
                  height 108px
                  width 75px
            .content
                vertical-align bottom
                background-color rgba(48, 49 51, 0.6)
                box-shadow 0 2px 8px rgba(0, 0, 0, 0.3)
                border-radius 4px
                padding 16px 16px 16px 108px
                width 100%
                box-sizing border-box
                position absolute
                left 0
                bottom 0
                z-index -1
                h3
                    color rgba(255, 255, 255,1)
                    font-size 16px
                    font-weight 500
                    line-height 16px
                    padding 0 0 8px
                    letter-spacing 2px
                p
                    color rgba(255, 255, 255, 0.3)
                    font-size 10px
                    line-height 12px
                    padding-bottom 4px
                    text-overflow ellipsis
                    overflow hidden
                    white-space nowrap
</style>

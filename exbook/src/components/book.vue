<template>
  <div id="book">
    <v-libraryicon></v-libraryicon>
    <div class="book-wrapper">
      <div class="book-infor">
        <div class="image">
          <img v-imgUrl :src="book.image" :alt="book.title">
        </div>
        <diV class="infor">
          <h3>{{book.title}}</h3>
          <p v-for="(author, index) in book.author" :key="index">{{author}}</p>
          <p>{{book.author_intro | snippet(36)}}</p>
          <v-star :score = book.rating.average></v-star>
        </diV>
      </div>
      <div class="active">
        <ul>
          <li class="icon-ebook_collection"> like</li>
          <li class="icon-ebook_travel"> travel</li>
          <li class="icon-ebook_book"> <router-link to="/userInfor"> borrow</router-link></li>
        </ul>
      </div>
      <div class="summary">
        <div class="tag" v-rainbow v-for="(tag, index) in book.tags" :key="index">{{tag.title}}</div>
        <h3>Details</h3>
        <p>{{book.summary | changeReturn}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import star from '../components/star'
import libraryicon from '../components/libraryicon'
export default {
  name: 'book',
  data () {
    return {
      id: this.$route.params.id,
      book: {}
    }
  },
  created () {
    axios.get('/books/' + this.id + '.json').then(res => {
      this.book = res.data
    })
  },
  components: {
    'v-star': star,
    'v-libraryicon': libraryicon
  },
  directives: {
    'rainbow': {
      bind (el, binding, vnode) {
        var rainbowColor = '#' + Math.random().toString(16).slice(2, 8)
        el.style.color = rainbowColor
        el.style.borderColor = rainbowColor
        // el.style.backgroundColor = rainbowColor
      }
    }
  },
  filters: {
    changeReturn (value) {
      return value.replace(/-+/g, '\n\n')
    },
    snippet (value, num) {
      return value.slice(0, num) + '...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style ref='stylesheet/stylus' lang='stylus'>
@import '../assets/stylus/index.styl'
#book
  height 100vh
  background-color #222032
  overflow scroll
  color #ffffff
  padding 24px
  .book-infor
    display flex
    .image
      width 80px
      height 115px
      background-color #ccc
      font-size 10px
      color #666
      text-align center
      line-height 40px
      border-radius 8px
      overflow hidden
      img
        width 80px
        height 115px
    .infor
      flex 1
      padding 0 24px
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
        line-height 16px
        padding-bottom 4px
  .active
    margin 24px 0 16px
    ul
      list-style none
      display flex
      // justify-content center
      align-items center
      height 48px
      border-top 2px dashed rgba(48, 49 51, 1)
      border-bottom 2px dashed rgba(48, 49 51, 1)
      li
        flex 1
        text-align center
        cursor pointer
        a
          color #ffffff
        &:hover
          color rgb(255, 102, 153)
          font-weight 600
  .summary
    .tag
      padding 4px 16px
      display inline-block
      border 1px solid #333
      border-radius 32px
      margin 4px 8px 4px 0px
      font-size 10px
    h3
      padding 16px 0
      font-weight 500
      font-size 20px
    p
      text-indent 24px
      font-size 12px
      line-height 18px
      color rgba(255, 255, 255, 0.8)
</style>

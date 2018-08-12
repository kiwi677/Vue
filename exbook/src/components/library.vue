<template>
  <div id="library">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src = "library.avatar" alt="">
      </div>
      <div class="infor">
        <div class="library-name">{{library.name}}</div>
        <div class="bulletin icon-ebook_eidt"> {{library.bulletin}}</div>
      </div>
    </div>
    <div class="tab">
        <div class="tab-item border-1px-right active" @click="bookslist('borrow', '我的精神角落', 0)">
            <p>{{this.library.borrow.length}}</p>
            <span>borrow</span>
        </div>
        <div class="tab-item border-1px-right" @click="bookslist('lease', '探索另一个世界', 1)">
            <p>{{this.library.lease.length}}</p>
            <span>lease</span>
        </div>
        <div class="tab-item" @click="bookslist('collect', '向往的未知', 2)">
            <p>{{this.library.collect.length}}</p>
            <span>collect</span>
        </div>
    </div>
    <div class="content">
        <div class="borrow-title">
            <span class="title">{{this.title}}</span>
        </div>
        <v-booklist :userbooks = userbooks :dataType = dataType></v-booklist>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import borrow from '../components/borrow'
import booklist from '../components/booklist'
import $ from 'jquery'
export default {
  name: 'library',
  data () {
    return {
      library: {},
      userbooks: {},
      dataType: '',
      title: '我的精神角落'
    }
  },
  created () {
    axios.get('/library.json').then(
      res => {
        console.log(res)
        this.library = res.data
        this.userbooks = this.library.borrow
        this.dataType = 'borrow'
      }
    )
  },
  components: {
    'v-booklist': booklist
  },
  methods: {
    bookslist (dataType, title, num) {
      this.userbooks = this.library[dataType]
      this.dataType = dataType
      this.title = title
      $('.tab-item').removeClass('active')
      $('.tab-item').eq(num).addClass('active')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style ref='stylesheet/stylus' lang='stylus'>
@import '../assets/stylus/index.styl'
#library
    background-color #222032
    width 100%
    height 100%
    min-height 100vh
    position relative
    top 0
    left 0
    .content-wrapper
        padding 24px 0 16px
        flex-direction column
        justify-content center
        align-items center
        text-align center
        .avatar
            display inline-block
            overflow hidden
            border-radius 72px
            height 72px
            width 72px
            img
                width 72px
        .infor
            line-height 32px
            .library-name
                letter-spacing 1px
                font-size 18px
                line-height 32px
                color rgba(255, 255, 255, 1)
                font-weight 500
            .manager, .bulletin
                font-size 12px
                line-height 12px
                color rgba(255, 255, 255, 0.3)
                text-overflow ellipsis
                white-space nowrap
                overflow hidden
    .tab
        display flex
        margin 0 24px
        height 64px
        background-color rgba(255, 255, 255, 0.1)
        .tab-item
            flex 1
            height 40px
            text-align center
            cursor pointer
            margin 12px 0
            &.border-1px-right
                border-1px-right(rgba(255, 255, 255, 0.1))
            p
                color #fff
                font-size 24px
                font-weight 700
                line-height 24px
            span
                color rgba(255, 255, 255, 0.3)
                font-size 12px
                line-height 16px
        .tab-item.active
            p
                color rgb(68, 136, 219)
            span
                color rgba(68, 136, 219, 0.4)
    .content
        .borrow-title
            margin 16px 24px 8px
            font-size 16px
            color #fff
            letter-spacing 1px
        .icon-ebook_add
            font-weight 600
            float right
            color #4488db
</style>

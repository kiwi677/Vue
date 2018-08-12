<template>
  <div id="booklist">
    <div class="book-wrapper">
        <ul>
          <li v-for="(item, index) in userbooks" :key="index" class="book-item border-1px-top" this.id="index">
            <div class="book-box" data-type="0">
              <div class="item-box" @touchstart.capture="touchStart" @touchend.capture="touchEnd">
              <div class="item-image">
                  <router-link to="book" :book = "item">
                    <img v-imgUrl :src="item.image" :alt="item.title">
                  </router-link>
              </div>
              <div class="item-content">
                  <div class="item-name">{{item.title}}</div>
                  <div v-for="(item, index) in item.author" :key="index" class="item-author">{{item}}</div>
                  <div class="item-average">
                    <v-star :score = item.rating.average></v-star>
                  </div>
                  <div class="item-summary">{{item.summary | snippet}}</div>
              </div>
            </div>
            <div class="delete" @click="deleteItem" :data-index = "item.id">删除</div>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import star from '../components/star'
import axios from 'axios'
export default {
  name: 'booklist',
  props: {
    userbooks: {
      type: Array
    },
    dataType: {
      type: String
    }
  },
  data () {
    return {
      book: {},
      startX: 0,
      endX: 0,
      id: 0
    }
  },
  components: {
    'v-star': star
  },
  created () {
    // this.score = this.userbooks.rating.avarage
    // console.log(this.userbooks)
  },
  methods: {
    skip () {
      if (this.checkSlice()) {
        this.restSlide()
      } else {
        alert('You click the slide!')
      }
    },
    // 开始滑动
    touchStart (e) {
      this.startX = e.touches[0].clientX
    },
    // 滑动结束
    touchEnd (e) {
      let parentElement = e.currentTarget.parentElement
      this.endX = e.changedTouches[0].clientX
      // 左滑
      if (parentElement.dataset.type === '0' && this.startX - this.endX > 30) {
        this.restSlide()
        parentElement.dataset.type = 1
      }
      // 右滑
      if (parentElement.dataset.type === '1' && this.startX - this.endX < -30) {
        this.startX = 0
        parentElement.dataset.type = 0
      }
      this.startX = 0
      this.endX = 0
    },
    // 判断当前是否有滑块处于滑动状态
    checkSlide () {
      let listItems = document.querySelectorAll('.book-box')
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].dataset.type === '1') {
          return true
        }
        return false
      }
    },
    // 复位滑动状态
    restSlide () {
      let listItems = document.querySelectorAll('.book-box')
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].dataset.type = 0
      }
    },
    // 删除
    deleteItem (e) {
      // 当前引擎
      // let index = e.currentTarget.dataset.index
      // this.id = index
      // console.log(index)
      // 复位
      this.restSlide()
      // 删除
      axios.delete('/library/' + this.dataType + '/' + this.id + '.json').then(
        res => {
          this.$router.push({path: '/library'})
          console.log('/library/' + this.dataType + '/' + this.id + '.json')
        }
      )
    }
  },
  filters: {
    snippet (value) {
      return value.slice(0, 26) + '...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style ref='stylesheet/stylus' lang='stylus'>
@import '../assets/stylus/index.styl'
#booklist
  .book-wrapper
    padding 0 24px
    overflow hidden
    .book-item
      height 154px
      // position relative
      border-top 1px dashed rgba(255, 255, 255, 0.2)
      .book-box
        -weblit-transition all 0.2s
        transition all 0.2s
        &[data-type='0']
          transform translate3d(0, 0, 0)
        &[data-type='1']
          transform translate3d(-64px, 0, 0)
      .item-box
        display flex
        padding 24px 0
        .item-image
          margin-right 24px
          height 110px
          width 77px
          background-color #555
          img
            color #cccccc
            font-size 12px
            line-height 24px
            width 77px
        .item-content
          flex 1;
          color #fff
          .item-name
            font-size 16px
            line-height 20px
          .item-author
            font-size 12px
            line-height 12px
            padding 8px 0
            color rgba(255, 255, 255, 0.3)
          .item-summary
            font-size 12px
            line-height 18px
            color rgba(255, 255, 255, 0.3)
            height 54px
            overflow hidden
            padding 8px 0 0
      .delete
        width 64px
        height 154px
        background-color #4488db
        color #ffffff
        position absolute
        top 0
        right -88px
        line-height 154px
        text-align center
</style>

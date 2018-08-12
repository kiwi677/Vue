<template>
  <div class="shopcart">
    <div class="content">
      <div class="chart-icon-wrapper">
        <div class="chart-icon icon-shopping_cart" :class="{noZChart : totalCount != 0}"></div>
        <div class="total-count" v-show = "totalCount != 0">{{totalCount}}</div>
      </div>
      <div class="deliver-fee">
        <div class="price border-1px-right" :class="{noZPrice : totalPrice != 0}">¥{{totalPrice}}</div>
        <div class="deliveryPrice">另需配送费¥{{deliveryPrice}}</div>
      </div>
      <div class="deliver-base" :class="{ok : totalPrice >= 20}">{{inform}}</div>
    </div>
    <div class="cart-list-wrapper" v-show="showList">
      <div class="cart-gray"></div>
      <div class="cart-list">
        <div class="cart-list-header">
          <span class="cart-title">购物车</span>
          <span class="clear">清空</span>
        </div>
        <div class="food-item" v-for="food in selectFoods" :key="food.id">
          <span class="food-title">{{food.name}}</span>
          <span class="food-price">{{food.price}}</span>
          <cartcontrol class="cart-control" :food=food></cartcontrol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cartcontrol from './cartcontrol'
export default {
  name: 'HelloWorld',
  props: {
    deliveryPrice: {
      type: Number
    },
    minPrice: {
      type: Number
    },
    selectFood: {
      type: Array,
      default () {
        return [
          {
            count: 10,
            price: 2
          },
          {
            count: 1,
            price: 20
          }
        ]
      }
    }
  },
  data () {
    return {
      fold: true
    }
  },
  components: {
    cartcontrol
  },
  computed: {
    totalCount () {
      let totalCount = 0
      this.selectFood.forEach((food) => {
        totalCount += food.count
      })
      return totalCount
    },
    totalPrice () {
      let totalPrice = 0
      this.selectFood.forEach((food) => {
        totalPrice += food.price * food.count
      })
      return totalPrice
    },
    inform () {
      if (this.totalPrice === 0) {
        return `¥${this.minPrice}`
      } else if (this.totalPrice > 0 && this.totalPrice < this.minPrice) {
        return `还差¥${this.minPrice - this.totalPrice}起送`
      } else {
        return `去结算`
      }
    },
    showList () {
      if (!this.totalCount) {
        this.fold = true
        return false
      }
      return !this.fold
    }
  },
  created () {
    axios.get('/good/seller').then(
      res => {
        console.log(res)
        if (res.data.code === 0) {
          console.log(res.data.data)
        }
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style ref='stylesheet/stylus' lang='stylus'>

@import '../assets/stylus/index.styl'

.shopcart
  width 100%
  height 48px
  position fixed
  bottom 0
  left 0
  z-index 300
  .content
    width 100%
    display flex
    background-color #141d27
    .chart-icon-wrapper
      flex 0 0 80px
      position relative
      .chart-icon
        position relative
        width 44px
        height 44px
        border-radius 44px
        border 6px solid #141d27
        background-color #2b333b
        margin-left 18px
        margin-top -10px
        font-size 24px
        color rgba(255, 255, 255, 0.4)
        line-height 44px
        text-align center
        &.noZChart
          background-color #00a0dc
          color #ffffff
      .total-count
        position absolute
        right 0px
        top -6px
        text-align center
        background-color red
        color #ffffff
        width 24px
        height 16px
        font-size 8px
        font-weight 700
        line-height 16px
        border-shadow 0 4px 8px 0 rgba(0,0,0,0.4)
        border-radius 12px
        position absolute
    .deliver-fee
      flex 1
      padding 12px
      height 24px
      .price
        display inline-block
        line-height 24px
        color rgba(255, 255, 255, 0.2)
        border-1px-right(rgba(255, 255, 255, 0.4))
        padding-right 12px
        &.noZPrice
          color #ffffff
      .deliveryPrice
        display inline-block
        padding-left 12px
        font-size 12px
        color rgba(255, 255, 255, 0.4)
        line-height 20px
        font-weight 700
    .deliver-base
      flex 0 0 105px
      padding 0 8px
      line-height 48px
      font-size 12px
      text-align center
      color rgba(255, 255, 255, 0.1)
      font-weight 700
      background-color #2b333b
      &.ok
        background-color green
        color #ffffff
.cart-list-wrapper
  position fixed
  top 0
  bottom 48px
  width 100%
  display flex
  flex-direction column
  z-index -1
  .cart-gray
    flex 1
    background-color rgba(7, 17, 27, 0.6)
  .cart-list
    width 100%
    position fixed
    bottom 48px
    left 0
    background-color #ffffff
    overflow auto
    max-height 217px
    .cart-list-header
      height 40px
      line-height 40px
      padding 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
      background-color #f3f5f7
      font-weight 500
      .cart-title
        font-size 14px
        fonnt-weight 200
        color rgb(7, 17, 27)
      .clear
        position absolute
        right 18px
        font-size 12px
        color rgb(0, 160, 220)
    .food-item
      width 100%
      height 48px
      line-height 48px
      margin 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
      .food-title
        font-size 14px
        color rgb(7, 17, 27)
      .food-price
        position absolute
        right 120px
        font-size 10px
      .cart-control
        position absolute
        right 18px
        top 6px
        display inline-block

</style>

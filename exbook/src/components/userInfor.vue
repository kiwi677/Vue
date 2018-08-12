<template>
  <div id="userInfor">
    <h2>请填写您的借阅信息</h2>
    <form action="">
      <div class="form-group">
        <i class="icon-ebook_user"></i>
        <input type="text" class="form-control" id="userName" name="name" @focus="inputFocus(0)" @blur="inputBlur(0)" v-model="user.name">
        <label for="userName">姓名</label>
      </div>
      <div class="form-group">
        <i class="icon-ebook_telephone"></i>
        <input type="text" class="form-control" id="userTel" name="tel" @focus="inputFocus(1)" @blur="inputBlur(1)" v-model="user.tel">
        <label for="userTel">手机号码</label>
      </div>
      <div class="form-group">
        <i class="icon-ebook_address"></i>
        <input type="text" class="form-control" id="userAddress" name="address" @focus="inputFocus(2)" @blur="inputBlur(2)" v-model="user.address">
        <label for="userAddress">地址</label>
      </div>
      <div class="form-checkbox">
        <input type="checkbox" checked class="form-control" id="userTel">
        设置为默认信息
      </div>
    </form>
    <div class="btn-box" @click="submit">
      <button>提交</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'userInfor',
  props: {
    userbooks: {
      type: Array
    }
  },
  data () {
    return {
      user: {
        name: '',
        tel: '',
        address: ''
      }
    }
  },
  created () {
    // this.score = this.userbooks.rating.avarage
    // console.log(this.userbooks)
  },
  methods: {
    inputFocus (num) {
      let _this = $('input').eq(num)
      _this.css({'borderColor': '#4488db'})
      _this.next().animate(
        {'top': '-16px', 'fontSize': '12px'},
        300,
        'linear'
      ).css({'color': '#4488db'})
      _this.prev().css({'color': '#4488db'})
    },
    inputBlur (num) {
      let _this = $('input').eq(num)
      if (_this.val() === '') {
        _this.css({'borderColor': 'rgba(255, 255, 255, 0.3)'})
        _this.next().animate(
          {'top': '0px', 'fontSize': '14px'},
          300,
          'linear'
        ).css({'color': 'rgba(255, 255, 255, 0.3)'})
        _this.prev().css({'color': 'rgba(255, 255, 255, 0.3)'})
      }
    },
    submit () {
      // console.log(this.user)
      let flag = true
      $('input[type=text]').map(
        (index, ele) => {
          if ($(ele).val() === '') {
            $(ele).css({'borderColor': 'rgb(255, 102, 153)'})
            flag = false
          }
        }
      )
      if (flag) {
        axios.post('/user.json', this.user).then(
          res => {
            this.$router.push({path: '/'})
          }
        )
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style ref='stylesheet/stylus' lang='stylus'>
@import '../assets/stylus/index.styl'
#userInfor
  background-color #222032
  color #ffffff
  height 100vh
  padding 24px
  -moz-box-sizing border-box
  -webkit-box-sizing border-box
  box-sizing border-box
  h2
    letter-spacing 1px
    font-weight 400
    padding-left 8px
    border-left 4px solid #4488db
  .form-group
    position relative
    margin 40px 0
    i
      color rgba(255, 255, 255, 0.3)
      font-size 22px
    label
      position absolute
      top 0
      left 32px
      color rgba(255, 255, 255, 0.3)
    input
      background-color #222032
      width 80%
      color #ffffff
      padding-left 8px
      outline none
      border-style none
      font-size 14px
      border-bottom 1px solid rgba(255, 255, 255, 0.3)
  .form-checkbox
    font-size 14px
    height 14px
    line-height 14px
    input
      outline none
  .btn-box
    width 100%
    height 40px
    margin-top 12px
    text-align center
    border-radius 4px
    background-color #4488db
    button
      font-size 18px
      font-weight 600px
      line-height 40px
</style>

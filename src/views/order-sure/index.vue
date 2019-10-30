<template>
  <div class="order-sure">
    <!-- navbar -->
      <van-nav-bar fixed="" title="确认订单">
        <van-icon name="arrow-left" @click="$router.back()" size="60" slot="left" color="#444" />
        <van-icon name="wap-nav" size="60" slot="right" color="#444" />
      </van-nav-bar>
    <!-- 收货地址  -->
    <div class="addRessList"  @click="editRessList">
      <div class="location">
        <van-icon name="location" size="60" color="#444" />
      </div>
      <div class="userInfo">
        <span>收货人：南墙先生</span>
        <span>18806030603</span>
      </div>
      <div class="address">
        <span>收货地址：北京市海淀区悟空送大萨达撒多撒多撒多</span>
      </div>
      <div class="promptRess">
        <span>(收货不便时，可选择免费代收货服务)</span>
      </div>
      <div class="arrow">
        <van-icon name="arrow" size="60" color="#444" />
      </div>
    </div>
    <!-- 商品信息 -->
    <div class="goodDesc">
      <van-card
        num="2"
        price="2.00"
        desc="颜色：自由组合:尺寸170/m"
        title="2件装夏季潮流青年圆领T恤纯色V领半袖体恤打底"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
    </div>
    <!-- 发票 -->
    <div class="userData">
      <div>
        <van-cell-group>
          <van-cell title="发票信息"  />
        </van-cell-group>
        <van-cell-group>
          <van-cell title="如需发票，请与商户沟通"/>
        </van-cell-group>
        <!-- 优惠券单元格 -->
        <van-cell-group>
          <van-cell title="优惠券" is-link />
        </van-cell-group>
        <van-row>
          <van-col span="6">
            <van-cell title="单元格" />
          </van-col>
          <van-col span="14">
            <div class="integral">共500积分，可抵扣￥500.00元</div>
          </van-col>
          <van-col class="switch" span="4">
            <template slot="default">
              <van-switch  size="60px" v-model="checked" />
            </template>
          </van-col>
        </van-row>
        <van-cell-group>
          <van-field
            v-model="message"
            label="买家留言"
            type="textarea"
            placeholder="请输入留言"
            rows="1"
            autosize
            maxlength="200"
          />
        </van-cell-group>
      </div>
    </div>
    <!-- 下单 -->
    <van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { toast } from '@/components/loading/index.js'
export default {
  name: 'order-sure',
  data () {
    return {
      checked: false,
      message: ''
    }
  },
  methods: {
    editRessList () {
      toast('支付中...', 'loading')
    },
    onSubmit () {}
  }
}
</script>

<style lang="less" scoped>
.order-sure::before {
  content:" ";
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index:-100;
  background-color: #F5F5F5;
}

.addRessList {
  width: 100%;
  height: 200px;
  // border: 1px solid red;
  margin: 0 auto;
  margin-top: 95px;
  border-radius: 10px;
  position: relative;
  background-color: #fff;
}
.van-hairline--bottom {
  border-bottom: 4px solid #ccc;
}
.location {
  width: 10%;
  height: 100%;
  // display:inline-block;
  float: left;
}
.arrow {
  width: 10%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  right: 0;
}
.van-icon-location{
  height: 100%;
  padding-left: 25px;
  line-height: 200px;
}
.userInfo,.address,.promptRess {
  width: 70%;
  padding-left: 25px;
  float: left;
}
.userInfo span:nth-child(2) {
  display: inline-block;
  padding-left: 80px;
}
.userInfo {
  padding-top: 25px;
}
.address {
  padding-top: 15px;
  overflow: hidden;
  font-size: 24px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient: vertical;
}
.promptRess {
  font-size: 24px;
  color: #F6BC6A;
  padding-top: 35px;
  width: 60%;
  text-align: center;
}
.goodDesc {
  width: 100%;
  height: 200px;
  // border: 1px solid red;
  margin: 0 auto;
  margin-top: 20px;
}
.goodDesc div {
  background-color: #fff;
}
.van-card {
  border-radius: 8px;
}
.userData {
  width: 97%;
  padding-left: 20px;
  margin: 0 auto;
  height: 100%;
  margin-top: 30px;
  border-radius: 8px;
  background-color: #fff;
}
.van-cell__value {
  font-size: 20px;
}
.integral {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  color: red;
  height: 85px;
  font-size: 24px;
  line-height: 85px;
}
.switch {
  height: 85px;
  padding-top: 15px;
}
.van-row {
  border-bottom: 2px solid #ebedf0;
}
.navbar {
  border-bottom: 1px solid #ccc;
}

</style>

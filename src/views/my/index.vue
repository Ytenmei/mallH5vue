<template>
  <div>
    <topbanner :userName="usename" @settingAction="setting"></topbanner>
    <van-cell title="全部订单" is-link to="/orderList" value="查看全部订单" />
    <div class="orderView">
      <van-tabbar v-model="active" active-color="black" inactive-color="black" @change="orderTypeClick" class="view">
        <van-tabbar-item name="pendingPayent" icon="home-o" v-if="orderCount[0]>0" :info="orderCount[0]">代付款</van-tabbar-item>
        <van-tabbar-item name="pendingPayent" icon="home-o" v-if="orderCount[0]<=0">代付款</van-tabbar-item>
        <van-tabbar-item name="goodsShiooed" icon="search" v-if="orderCount[1]>0" :info="orderCount[1]">待发货</van-tabbar-item>
        <van-tabbar-item name="goodsShiooed" icon="search" v-if="orderCount[1]<=0">待发货</van-tabbar-item>
        <van-tabbar-item name="goodsReceived" icon="friends-o" v-if="orderCount[2]>0" :info="orderCount[2]">待收货</van-tabbar-item>
        <van-tabbar-item name="goodsReceived" icon="friends-o" v-if="orderCount[2]<=0">待收货</van-tabbar-item>
        <van-tabbar-item name="goodsEvaluate" icon="setting-o" v-if="orderCount[3]>0" :info="orderCount[3]">待评价</van-tabbar-item>
        <van-tabbar-item name="goodsEvaluate" icon="setting-o" v-if="orderCount[3]<=0">待评价</van-tabbar-item>
        <van-tabbar-item name="afterSale" icon="setting-o" v-if="orderCount[4]>0" :info="orderCount[4]">退款/售后</van-tabbar-item>
        <van-tabbar-item name="afterSale" icon="setting-o" v-if="orderCount[4]<=0">退款/售后</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="line">
    </div>
    <van-grid
      :border="false"
      :column-num="4">
        <van-grid-item
          v-for="(value, index) in btntitle"
          :key="value"
          icon="photo-o"
          :text="btntitle[index]"
          @click="btnClick(value)"
        />
    </van-grid>
    <tabBar/>
  </div>
</template>

<script>
import tabBar from '@/components/tabbar'
import topbanner from './compoents/topbanner.vue'
export default {
  name: 'my',
  components: {
    tabBar,
    topbanner
  },
  data () {
    return {
      usename: '南墙在哪',
      active: 'pendingPayent',
      orderCount: ['0', '1', '2', '3', '4'],
      btntitle: ['我的积分', '我的收藏', '关注店铺', '收货地址', '商城客服', '查询话费']

    }
  },
  methods: {
    setting (data) {
      console.log('跳转设置 => ', data)
    },
    orderTypeClick () {
      console.log(this.active)
    },
    btnClick (value) {
      console.log(value)
    }

  }
}
</script>

<style lang="less" scoped>
  .orderView .view{
    position: relative;
    padding: 20px 0px;
  }
  .line{
    height: 20px;
    background-color: #eeeeee;
  }
</style>

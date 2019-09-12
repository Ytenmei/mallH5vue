<template>
  <div>
    <van-nav-bar
    color="#444"
    :right-text="isedit? '完成':'编辑'"
    title="购物车"
    @click-right="handleEdit(isedit)"
    left-arrow>
      <van-icon color="#444" size="60" name="arrow-left" slot="left" />
    </van-nav-bar>
    <!-- 用户商品 -->
    <goods/>
    <orderSubmit/>
    <tabBar />
  </div>
</template>

<script>
import tabBar from '@/components/tabbar'
import goods from './components/goods'
import orderSubmit from './components/orderSubmit'
import globalBus from '@/components/globalBus/index.js'
export default {
  name: 'shopCar',
  components: {
    tabBar,
    goods,
    orderSubmit
  },
  data () {
    return {
      isedit: false, // 编辑状态
      cartStatus: false, // 购物车状态，account结算，edit删除编辑状态
      cartShops: [], // 店铺列表
      sumPrice: 0, // 合计金额
      totalNumber: 0, // 总数
      shopList: [], // 店铺列表
      goodsList: [] // 商品列表
    }
  },
  computed: {

  },
  methods: {
    // 结算
    cauSum () {
    },
    // 编辑状态
    handleEdit (isedit) {
      this.isedit = !isedit
      console.log(isedit)
      globalBus.$emit('handle-edit', isedit)
    }
  }
}
</script>

<style lang='less' scoped>

.van-nav-bar__title {
  color: #444
}
.van-nav-bar__text {
  color: #444;
}
/deep/.van-nav-bar {
  border-bottom: 5px solid #ccc;
}

</style>

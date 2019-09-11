<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <van-tabbar active-color="red" route>
      <van-tabbar-item icon="audio" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="add-square" to="/">关注</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to="/shop-Car">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>

</style>

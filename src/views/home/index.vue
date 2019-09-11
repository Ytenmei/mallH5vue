<template>
  <div>
    <!-- tab-bar -->
    <div class="nav">
      <van-nav-bar
      title="福卡 MALL"
      class="nav-bar"
      fixed
      :border="false"
      right-text="登录"
      @click-right="$router.push({ name: 'login' })"/>
      <van-icon class="bars"  name="bars" slot="left"></van-icon>
    </div>

    <!-- 跳转搜索页 -->
    <div class="search">
      <van-search
      placeholder="请输入搜索关键词"
      background="#FE0238"
      @click="$router.push({ name: 'search' })"/>
    </div>

    <!-- 分类 -->
    <van-grid
      :border="false"
      :column-num="5">
        <van-grid-item
          v-for="value in 10"
          :key="value"
          icon="photo-o"
          text="文字"
          @click="handleAssort()"
        />
    </van-grid>

    <!-- 轮播图-banner -->
    <van-swipe
      :autoplay="3000"
      :height="400"
      indicator-color="#ccc">
      <van-swipe-item
      v-for="(image, index) in swiper"
      :key="index">
        <img class="swiper" v-lazy="image">
      </van-swipe-item>
    </van-swipe>
    <!-- 推荐 -->
    <recommend/>
    <tabBar/>
</div>
</template>

<script>
import tabBar from '@/components/tabbar'
import recommend from './components/recommend'
import { getArticles } from '@/api/home/'
export default {
  name: 'home',
  components: {
    recommend,
    tabBar
  },
  data () {
    return {
      swiper: []
    }
  },
  created () {
    this.handleSlider()
  },
  methods: {
    onClickLeft () {
    },
    async handleSlider () {
      let data = await getArticles()
      data = data[0].nodeAdsList
      data.filter(item => this.swiper.push(item.imgUrl))
    }
  }
}
</script>
<style lang="less" scoped>
.van-hairline--bottom::after {
  content: none;
}
.nav-bar,.search,.van-nav-bar__text {
  background-color: #fe0238;
}
.van-nav-bar__title {
  color: #fff;
  background-color: #FE0238;
}
.van-nav-bar__text {
  color: #fff;
}
.nav {
  height: 80px;
}
.search {
  position: fixed;
  width: 100%;
  z-index: 1;
}
.van-grid {
  margin-top: 108.5px;
}
.swiper {
  width: 100%;
  height: 100%;
}
.bars {
  font-size: 60px;
  color: #fff;
  left: 20px;
  top: 20px;
  z-index: 1;
}
</style>

<template>
  <div class="nav-bar">
    <!-- 搜索框 -->
    <template>
      <van-icon :size="80" class="search" name="arrow-left" @click="$router.back()"></van-icon>
        <van-search
          v-model="value"
          placeholder="请输入搜索的商品"
          show-action
          shape="square"
          @search="onSearch">
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
    </template>
    <!-- 历史搜索 -->
    <history/>
    <!-- 猜你喜欢 -->
    <guess/>
  </div>
</template>

<script>
import history from './components/history'
import guess from './components/guess'
export default {
  name: 'search',
  components: {
    history,
    guess
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () {
    },
    handleDelete () {
      console.log(1)
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  position: absolute;
  padding-top: 25px;
  padding-left: 12px;
}
.van-search {
  padding-left: 70px;
}
.newlySearch {
  /* display: block */
  padding-top: 10px;
  font-size: 30px;
  color: #ccc;
}
.cross {
  font-size: 40px;
  position: absolute;
  right: 30px;
  color: #000;
}
.searchHistory {
  padding-top: 20px;
}
.newlySearch span {
  padding-left: 40px;
}
.van-search {
  padding-left:80px;
}
</style>

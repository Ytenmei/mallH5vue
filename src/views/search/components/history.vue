<template>
  <div class="history">
    <span class="history-title">热门搜索</span>
    <van-icon name="cross" size="50" class="handleDelete" @click="hanleHistorySearch()"></van-icon>
    <div class="loading-container">
      <!-- <me-loading/> -->
    </div>
    <ul class="history-list">
      <li class="history-item">篮球鞋</li>
      <li class="history-item">一体机电脑</li>
      <li class="history-item">铝框拉杆箱</li>
      <li class="history-item">加湿器</li>
      <li class="history-item">金士顿内存</li>
      <li class="history-item">游戏本</li>
      <li class="history-item">多美鲜黄油</li>
    </ul>
  </div>
</template>

<script>
// import MeLoading from '@/components/loading/index.vue'
export default {
  name: 'history',
  components: {
    // MeLoading
  },
  data () {
    return {}
  },
  methods: {
    hanleHistorySearch () {
    }
  }
}
</script>

<style lang="less" scoped>
.history {
  padding-left: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  .history-title{
    display: inline-block;
    height: 60px;
    line-height: 60px;
    font-size: 26px;
    font-weight: bold;
    padding-left: 20px;
    color: #cccccc;
  }
  .handleDelete {
    position: absolute;
    padding-top: 12px;
    right: 30px;
  }
  .history-list {
    display: flex;
    font-size: 22px;
    flex-wrap: wrap;
  }
  .history-item {
    padding: 20px;
    background-color: #f0f2f5;
    border-radius: 4px;
    margin: 0 10px 10px 15px;
    clear: #686868;
    color:#101010 ;
    font-size: 24px;
  }
  .loading-container {
    padding: 10px 0;
  }
}
</style>

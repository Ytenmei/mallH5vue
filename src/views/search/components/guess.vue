<template>
    <div class="guess">
      <span class="guess-title">猜你想找</span>
      <ul class="guess-list">
        <div class="loading-container">
          <!-- <me-loading/> -->
        </div>
        <li class="guess-item">篮球鞋</li>
        <li class="guess-item">篮球鞋</li>
        <li class="guess-item">一体机电脑</li>
        <li class="guess-item">铝框拉杆箱</li>
        <li class="guess-item">加湿器</li>
        <li class="guess-item">金士顿内存</li>
        <li class="guess-item">游戏本</li>
        <li class="guess-item">多美鲜黄油</li>
      </ul>
    </div>
</template>

<script>
// import MeLoading from '@/components/loading/index.vue'
export default {
  name: 'guess',
  components: {
    // MeLoading
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.guess {
  margin-top: 40px;
  padding-left: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  .guess-title{
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
    padding-top: 15px;
    right: 30px;
  }
  .guess-list {
    display: flex;
    flex-wrap: wrap;
  }
  .guess-item {
    padding: 20px;
    background-color: #f0f2f5;
    border-radius: 4px;
    margin: 0 10px 10px 15px;
    clear: #686868;
    color:#101010 ;
    font-size: 22px;
  }
  .loading-container {
    padding: 10px 0;
  }
}
</style>

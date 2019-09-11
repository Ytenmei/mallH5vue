<template>
  <div>
    <img src="@/assets/heavy.png">
   <!-- <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" height="200"/>
    <p>2016春款</p>
    <p style="color:red;">¥<span>589.00</span></p> -->
    <van-row class="recommend" type="flex" justify="space-around">
      <van-col span="11">
        <div>
          <img src="http://yufumall-test.oss-cn-beijing.aliyuncs.com/chaoshi/2c94242e33664401a3346a35c7e59ce3.jpg?v=201909091509" height="100%" width="100%"/>
          <p>2016春款</p>
          <p style="color:red;">¥<span>589.00</span></p>
        </div>
      </van-col>
      <van-col span="11">
        <div>
          <img src="http://yufumall-test.oss-cn-beijing.aliyuncs.com/chaoshi/2c94242e33664401a3346a35c7e59ce3.jpg?v=201909091509" height="100%" width="100%"/>
          <p>2016春款</p>
          <p style="color:red;">¥<span>589.00</span></p>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
img {
  width: 100%;
}

.recommend .van-col p {
  font-size: 26px;
}
.recommend .van-col {
  height: 400px;
}
.recommend div {
  background-color: #F7F7F7;
}
</style>

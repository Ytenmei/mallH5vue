<template>
  <div>
      <van-nav-bar
        :title="title"
        class="nav-bar"
        fixed
        left-arrow
        @click-left="onClickLeft"/>
      <div>
        <van-list class="listView"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          @load="onLoad"
        >
          <van-grid :border="false" :column-num="2">
            <van-grid-item
            v-for="(value,index) in list" :key="index"
            @click="productClick(index)">
              <van-image :src="value.imgUrl" />
              <P class="productName">{{value.pName}}</P>
              <P class="productPrice">¥{{value.pPrice}}</P>
            </van-grid-item>
          </van-grid>
        </van-list>
      </div>
  </div>
</template>

<script>
export default {
  name: 'activeList',
  // components: {
  //   productList
  // },
  data () {
    return {
      activeId: this.$route.query.activeId,
      title: this.$route.query.title,
      list: [],
      error: false,
      loading: false,
      finished: false

    }
  },
  methods: {
    onClickLeft () {
      console.log('返回')
    },
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(
            {
              imgUrl: 'http://yufumall-test.oss-cn-beijing.aliyuncs.com/chaoshi/2c94242e33664401a3346a35c7e59ce3.jpg?v=201909091509',
              pName: 'ceshi商品' + i,
              pPrice: 99.99
            })
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },
    productClick (index) {
      console.log(this.list[index])
    }
  }
}
</script>

<style lang="less" scoped>
  .productName{
    width: 100%;
    height: auto;
    font-size: 32px;
    text-align: left;
    padding-left: 40px;
    color: black;
    margin: 5px 2px;
  }
  .productPrice{
    width: 100%;
    height: auto;
    font-size: 26px;
    text-align: left;
    padding-left: 40px;
    color: red;
    margin: 0px 2px;
  }
  .listView{
    margin-top: 100px;
  }
  /deep/.van-grid-item__content {
    padding: 20px 10px 0px 10px;
  }
  .van-nav-bar .van-icon {
    color: red;
  }
</style>

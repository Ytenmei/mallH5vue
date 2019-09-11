<template>
  <div>
    <van-submit-bar
    class="handleSumbmit"
    v-show="show"
    :price="3050"
    button-text="结算"
    @submit="onSubmit">
    <van-checkbox class="selectAll" v-model="checked">全选</van-checkbox>
    <span slot="tip">
      你的收货地址不支持同城送, <span>修改地址</span>
    </span>
    </van-submit-bar >
    <van-submit-bar
    v-show="!show"
    button-text="删除"
    @click="deleteShop"/>
  </div>
</template>

<script>
import globalBus from '@/components/globalBus/index.js'
export default {
  name: 'orderSubmit',
  data () {
    return {
      show: true,
      checked: false
    }
  },
  created () {
    globalBus.$on('handle-edit', (data) => { this.show = data })
  },
  methods: {
    // 结算
    onSubmit () {
    },
    deleteShop () {
    }
  }
}
</script>

<style>
.van-submit-bar {
  margin-bottom: 100px;
}
.handleSumbmit {
  z-index: 9999;
}
.selectAll {
  padding-left: 20px;
}
</style>

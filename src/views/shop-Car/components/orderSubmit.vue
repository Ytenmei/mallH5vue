<template>
  <div>
    <van-submit-bar
    class="handleSumbmit"
    v-if="show"
    :price="3050"
    button-text="结算"
    @submit="onSubmit">
    <van-checkbox class="selectAll" v-model="checked">全选</van-checkbox>
    <!-- <span slot="tip">
      你的收货地址不支持同城送, <span>修改地址</span>
    </span> -->
    </van-submit-bar >
    <van-submit-bar
    else="show"
    button-text="删除"
    @click="deleteShop">
    <van-checkbox class="deleteAll" v-model="checked">全选</van-checkbox>
    </van-submit-bar>
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
    this.handleEdit()
  },
  methods: {
    // 结算
    onSubmit () {
    },
    deleteShop () {
      // return globalBus.$on('')
    },
    // 编辑状态显示删除按钮
    handleEdit () {
      return globalBus.$on('handle-edit', (data) => {
        this.show = data
      })
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
  padding-left: 50px;
}
.van-submit-bar__bar {
  position: relative;
}
.van-submit-bar__bar .deleteAll {
  position: absolute;
  left: 50px;
}
</style>

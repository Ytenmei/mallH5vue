<template>
  <div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import {
  GetAnyProfilesAddress // 用户地址列表
} from '@/api/address/index.js'
export default {
  name: 'addressList',
  data () {
    return {
      chosenAddressId: '',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        }
      ]
    }
  },
  created () {
    this.GetUserAddress()
  },
  methods: {
    onAdd () {
      this.$toast('新增地址')
    },

    onEdit (item, index) {
      this.$toast('编辑地址:' + index)
    },
    async GetUserAddress () {
      const data = await GetAnyProfilesAddress()
      console.log(data)
    }
  }

}
</script>

<style lang="less" scoped>
/deep/.van-radio__icon {
  font-size: 36px !important;
}
/deep/.van-icon-success {
  font-size: 30px;
}
.van-address-item__edit {
  font-size: 40px;
}
</style>

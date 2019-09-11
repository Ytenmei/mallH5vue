<template>
  <div class="list-container">
    <div class="shopStoreTop">
      <div class="shopName">
        <van-checkbox checked-color="red" v-model="checked">
        </van-checkbox>
          <span class="accountMemberName">墨刀服饰旗舰店</span>
          <span class="cartStatus" @click="handleEdit(cartStatus)">{{ cartStatus ? '完成':'编辑' }}</span>
      </div>
      <div class="shopName product">
        <van-checkbox checked-color="red" v-model="checked">&nbsp;&nbsp;</van-checkbox>
        <div class="showPic">
          <van-image
            width=250
            height=250
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <span class="shopdetail">山东金三角傻大姐啥是京东卡丧失殆尽看到手机卡是大家看到手机卡担惊受恐ad手机</span>
          <div class="priceValName">231231211</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import globalBus from '@/components/globalBus/index.js'
export default {
  name: 'goods',
  data () {
    return {
      cartStatus: false,
      checked: false,
      ischecked: false
    }
  },
  methods: {
    handleEdit (item) {
      this.cartStatus = !item
      globalBus.$emit('handle-edit', item)
    }
  }
}
</script>

<style lang="less" scoped>
.list-container {
  width: 100%;
  height: 1000px;
}
.shopName {
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 30px;
}
.cartStatus {
  position: absolute;
  right: 32px;
  color: #ccc;
}
.van-checkbox {
  float: left;
}
.product {
  display: flex;
  // border: 1px solid #ccc;
}
.accountMemberName {
  padding-left: 29px;
}
.product {
  height: 250px;
}
.list-container::before {
   content:" ";
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-color:#F0F0F2;
    z-index:-100;
}
.shopStoreTop {
  width: 95%;
  border-radius: 10px;
  margin: 20px auto;
  background-color: #fff;
}
.showPic {
  position: relative;
  width: 100%;
  margin-left: 5px;
}
.shopdetail {
  width: 300px;
  height: 70px;
  padding-left: 200px;
  position: absolute;
  top: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
  color: #101010;
}
.priceValName {
  width: 300px;
  height: 40px;
  display: inline-block;
  position: absolute;
  bottom: 40px;
  left: 200px;
  color: #ccc;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
}
</style>

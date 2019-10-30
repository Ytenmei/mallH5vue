<template>
  <div>
    <van-nav-bar
    color="#444"
    :right-text="cartStatus? '完成':'编辑'"
    title="购物车"
    @click-right="handleEdit(cartStatus)"
    left-arrow>
      <van-icon color="#444" size="60" name="arrow-left" slot="left" />
    </van-nav-bar>
    <!-- 用户商品 -->
    <div class="list-container">
      <div class="shopStoreTop"
      :key="item.id"
      v-for="item in cartInfoList">
        <!-- 店铺名称 -->
        <div class="shopName">
          <!-- 商店全选 -->
          <van-checkbox
          checked-color="red"
          @click="checkShop(item)"
          v-model="item.checked"
          >
          </van-checkbox>
            <span class="accountMemberName">{{ item.shopTitle }}</span>
        </div>
        <!-- 商品区域 -->
        <div
        class="shopName product"
        v-for="(pros, index) in item.productList"
        :key="index">
        <!-- 商品单选 -->
          <van-checkbox
          checked-color="red"
          @click="ischeck(item, pros)"
          v-model="pros.isChecked">&nbsp;&nbsp;</van-checkbox>
          <div class="showPic">
            <van-image
              width=250
              height=250
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <span class="shopdetail">{{ pros.productTitle }}</span>
            <div class="priceValName">{{ pros.category }}</div>
            <span class="price">￥{{ pros.price }}</span>
            <van-stepper class="stepper" v-model="pros.count" integer min="1" max="100"/>
          </div>
        </div>
      </div>
    </div>
    <!-- 价格计算 -->
    <div>
      <van-submit-bar
      class="handleSumbmit"
      v-if="!cartStatus"
      :price="allPrice"
      :button-text="'结算' + '(' + allCount + ')'"
      @submit="onSubmit(cartInfoList)">
      <van-checkbox checked-color="red" class="selectAll" @click="checkAll()" v-model="isCheckAll">全选</van-checkbox>
      <!-- <span slot="tip">
        你的收货地址不支持同城送, <span>修改地址</span>
      </span> -->
      </van-submit-bar >
      <van-submit-bar
      else="cartStatus"
      button-text="删除"
      @submit="deleteShop">
      <van-checkbox checked-color="red"  class="deleteAll" @click="checkAll()" v-model="isCheckAll">全选</van-checkbox>
      </van-submit-bar>
    </div>
    <tabBar />
  </div>
</template>

<script>
import tabBar from '@/components/tabbar'
export default {
  name: 'shopCar',
  components: {
    tabBar
  },
  data () {
    return {
      cartStatus: false, // 编辑状态
      isCheckAll: false, // 是否全选
      allPrice: 0, // 所有价格
      allShops: 0, // 被选中的商店数量
      allCount: 0, // 被选中的产品数量，
      show: false,
      cartInfoList: [
        {
          id: 1,
          shopTitle: '苹果旗舰店', // 商店名
          checked: false, // 商店选择的状态
          checkedCount: 0, // 此商店被选择的商品数量
          productList: [
            {
              isChecked: false, // 商品选择状态
              productTitle: '2019款macbook/苹果/MF893/A国航笔记本', // 产品名
              category: '15寸/2.3/8G/256/土豪金/标准套餐',
              price: 10200, // 价格
              count: 1 // 数量
            }
          ]
        },
        {
          id: 2,
          shopTitle: '锤子科技旗舰店',
          checked: false,
          checkedCount: 0,
          productList: [
            {
              isChecked: false,
              productTitle: '锤子手机手感保护膜',
              category: '登陆月球',
              price: 9.9,
              count: 1
            },
            {
              isChecked: false,
              productTitle: '锤子手机pro割手版',
              category: '128G/割手版',
              price: 1790,
              count: 1
            }
          ]
        }
      ]
    }
  },
  watch: {
    // 深度监听所有数据，每次改变重新计算总价和总数
    cartInfoList: {
      deep: true,
      handler (val, oldval) {
        this.totalPrice()
      }
    }
  },
  methods: {
    // 编辑状态
    handleEdit (cartStatus) {
      this.cartStatus = !cartStatus
    },
    // 结算s
    onSubmit (item) {
      console.log(item)
    },
    // 商品状态
    ischeck (item, pro) {
      !pro.isChecked ? this.checkTrue(item, pro) : this.checkFalse(item, pro)
    },
    // 店铺状态
    checkShop (item) {
      !item.checked ? this.shopTure(item) : this.shopFalse(item)
    },
    // 全选状态
    checkAll () {
      this.isCheckAll = !this.isCheckAll
      this.isCheckAll
        ? this.cartInfoList.forEach(item => {
          this.shopTure(item)
        })
        : this.cartInfoList.forEach(item => {
          this.shopFalse(item)
        })
    },
    // 价格
    totalPrice () {
      this.allPrice = 0
      this.cartInfoList.forEach(item => {
        let products = item.productList
        products.forEach(pros => {
          if (pros.isChecked) {
            this.allPrice += pros.price * pros.count
          }
        })
      })
      this.allPrice = this.allPrice * 100
    },
    // 选中数量
    totalCount () {
      this.allCount = 0
      this.cartInfoList.forEach(item => {
        this.allCount += item.checkedCount
      })
    },
    // 删除
    deleteShop () {
    },
    checkTrue (item, pro) {
      pro.isChecked = true
      if (++item.checkedCount === item.productList.length) {
        item.checked = true
      }
      if (item.checked) {
        if (++this.allShops === this.cartInfoList.length) {
          this.isCheckAll = true
        } else {
          this.isCheckAll = false
        }
      }
    },
    checkFalse (item, pro) {
      pro.isChecked = false
      --item.checkedCount
      if (item.checked) {
        item.checked = false
        --this.allShops
      }
      this.isCheckAll = false
    },
    shopTure (item) {
      item.productList.forEach(pro => {
        if (pro.isChecked === false) {
          this.checkTrue(item, pro)
        } else {
          return ''
        }
      })
    },
    shopFalse (item) {
      item.productList.forEach(pro => {
        if (pro.isChecked === true) {
          this.checkFalse(item, pro)
        } else {
          return ''
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>

.van-nav-bar__title {
  color: #444
}
.van-nav-bar__text {
  color: #444;
}
/deep/.van-nav-bar {
  border-bottom: 5px solid #ccc;
}
.list-container {
  width: 100%;
  height: 100%;
  background-color: #f0f0f2;
}
.list-container>div:last-child {
  margin-bottom: 200px;
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
  z-index:-100;
  background-color: #f0f0f2;
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
  padding-left: 213px;
  position: absolute;
  top: 5px;
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
  bottom: 70px;
  left: 213px;
  color: #ccc;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
}
.price {
  font-size: 32px;
  color: red;
  padding-left: 20px;
}
.stepper {
  position: absolute;
  right: 20px;
  bottom: 0px;
}
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

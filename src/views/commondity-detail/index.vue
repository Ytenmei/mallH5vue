<template>
  <div class="detail" v-show="detailDate">
    <div class="narBar">
      <van-row>
        <van-col span="4">
          <van-icon color="#e43047" name="arrow-left" @click="$router.go(-1)" />
        </van-col>
        <van-col span="14" offset="1">
          <van-tabs tpe="card" v-model="active">
            <van-tab title="商品"></van-tab>
            <van-tab title="详情">
            </van-tab>
            <van-tab title="评价"></van-tab>
          </van-tabs>
        </van-col>
      </van-row>
    </div>
    <!-- 轮播图 -->
    <div v-show="!active" class="swiperShow">
      <template>
        <van-swipe :autoplay="3000" indicator-color="#e43047">
          <van-swipe-item v-for="(listPictures, index) in MobileProductByIdOpen.listPictures" :key="index">
            <img v-lazy="listPictures.picture" />
          </van-swipe-item>
        </van-swipe>
      </template>
      <!-- 商品信息 -->
      <div class="goodDetail">
        <div>{{MobileProductByIdOpen.nameFull}}</div>
        <span>￥{{MobileProductByIdOpen.salePrice}}</span>
      </div>
      <!-- 服务 -->
      <van-row class="serveData">
        <van-col span="4">服务</van-col>
        <van-col span="20">本商品由{{MobileProductByIdOpen.accountMemberName}}提供配送及服务</van-col>
      </van-row>
      <!-- 选择属性 -->
      <div class="serveData isSku">
        <van-cell @click="handleShowSku(show)" title="选择属性" is-link />
      </div>
      <template>
        <div class="buyMock">
          <div class="list" @click="handleShowPhone">
            <van-icon class="chat" name="chat" />
            <div class="custom">客服</div>
          </div>
          <div class="list" @click="$router.push({ name: 'goodList' })">
            <van-icon class="shop-o" name="shop-o" />
            <div class="shop">店铺</div>
          </div>
          <div class="list">
            <van-icon class="shop-o" name="shop-o" />
            <div class="shop">加入收藏</div>
          </div>
          <button @click="handleShowSku()" class="buy">立即购买</button>
        </div>
      </template>
    </div>
    <template v-if="active === 1" >
      <div class="showShoPDetail detail" v-html="this.photoDetail.detail"></div>
    </template>
    <!-- sku -->
      <!-- <van-popup
        v-model="show"
        round
        position="bottom"
        :style="{ height: '50%' }"
      >
      <template>
        <div>
          <van-card
            class="productCard"
            price="2.00"
            desc="已选：200,白色"
            title="剩余227件"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          />
          <van-divider class="isSkuDownDivider" />
          <div class="productConten">
            <div class="product-delcom" >
              <p>颜色</p>
              <ul class="product-footerlist">
                <li
                :key="index"
                @click="handleSeleted(index)"
                v-for="(color, index) in color"
                class="productActive">{{color}}</li>
              </ul>
              <van-divider />
            </div>
            <div class="product-delcom" >
              <p>尺寸</p>
              <ul class="product-footerlist">
                <li
                :key="index"
                v-for="(size, index) in size"
                class="productActive">{{size}}</li>
              </ul>
              <van-divider />
            </div>
          </div>
        </div>
      </template>
    </van-popup> -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="this.id"
      :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked"
      close-on-click-overlay
      show-soldout-sku
    />
  </div>
</template>

<script>
import {
  MobileProductByIdOpen,
  ProductDescProductId,
  GetMoblieProductAttrs
} from '@/api/goods'
export default {
  name: 'commondity-detail',
  data () {
    return {
      id: this.$route.params.id,
      GetAttrs: '',
      MobileProductByIdOpen: '',
      photoDetail: '',
      priceAttrs: [],
      active: 0, // tabs
      phone: 65816391,
      show: false, // isSku
      none_sku: false,
      detailDate: false,
      quantity: [],
      allStock: 0
    }
  },
  computed: {
    sku () {
      return {
        tree: [
          ...Object.keys(this.GetAttrs).map((attrs, index) => {
            return {
              k: attrs, // skuKeyName：规格类目名称
              v: Object.keys(this.GetAttrs[attrs]).map(key => {
                return {
                  name: key,
                  id: this.GetAttrs[attrs][key],
                  previewImgUrl: 'https://img.yzcdn.cn/1p.jpg'
                }
              }),
              k_s: 's' + (index + 1) // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            }
          })
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: this.priceAttrs.map((r, index) => {
          return {
            id: r.id,
            price: r.salePrice * 100,
            s1: r.priceValId.split('-')[0],
            s2: r.priceValId.split('-')[1] ? r.priceValId.split('-')[1] : '0',
            s3: r.priceValId.split('-')[2] ? r.priceValId.split('-')[2] : '0',
            stock_num: r.quantity,
            pCollection: r.priceValName.split('|')[1],
            pCollectionId: r.priceValId
          }
        }),
        price: this.MobileProductByIdOpen.salePrice, // 默认价格（单位元）
        stock_num: this.allStock, // 商品总库存
        // collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        hide_stock: false // 是否隐藏剩余库存
      }
    },
    goods () {
      return {
        // 商品标题
        title: '测试商品',
        // 默认商品 sku 缩略图
        picture: 'https://img.yzcdn.cn/1.jpg'
      }
    }
  },
  created () {
    this.handleShowProductDesc()
    this.handleShowProductAttrs()
    this.handleMobileProductByIdOpen()
  },
  methods: {
    // 购买
    onBuyClicked (item) {
      item.price = this.MobileProductByIdOpen.salePrice
      item.accountMemberId = this.MobileProductByIdOpen.accountMemberId
      if (!item.selectedSkuComb) {
        item.price = this.MobileProductByIdOpen.salePrice
      }
      window.localStorage.setItem('SplitOrder', JSON.stringify(this.MobileProductByIdOpen))
      window.localStorage.setItem('CreateCommonOrder', JSON.stringify(item))
      this.$router.push({
        name: 'order-sure'
        // params: {
        //   CreateCommonOrder: item,
        //   SplitOrder: this.MobileProductByIdOpen
        // }
      })
    },
    async handleMobileProductByIdOpen () {
      const data = await MobileProductByIdOpen(this.id)
      // console.log(data)
      this.MobileProductByIdOpen = data
    },
    handleShowSku (show) {
      this.show = !show
    },
    handleShowPhone () {
      // window.location.href = 'tel://' + this.phone
    },
    // 商品图文信息
    async handleShowProductDesc () {
      const data = await ProductDescProductId(this.id) // this.id
      this.photoDetail = data
    },
    // sku规格
    async handleShowProductAttrs () {
      const { priceAttrBaseDictionary, priceAttrs, stocks } = await GetMoblieProductAttrs(2085408) // this.id
      this.GetAttrs = priceAttrBaseDictionary
      this.allStock = stocks
      this.detailDate = true
      if (priceAttrs.length) {
        this.none_sku = false
        this.priceAttrs = priceAttrs
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  content:" ";
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index:-100;
  background-color: #f0f0f2;
}
.narBar {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 88px;
  border-bottom: 2px solid #eee;
  background-color: #fff;
}
.swiperShow {
  margin-top: 88px;
}
/deep/.van-icon-arrow-left {
  font-size: 50px;
  position: absolute;
  left: 25px;
  padding-top: 25px;
}
/deep/.van-swipe {
  width: 750px;
  height: 754px;
}
img {
  width: 100%;
  height: 100%;
}
.goodDetail {
  width: 100%;
  height: 220px;
  border-top: 1px solid #eee;
  background-color: #fff;
}
.goodDetail div:nth-child(1) {
  width: 662px;
  height: 81px;
  font-size: 30px;
  padding: 33px 50px 0px 38px;
  color: #000;
  font-family:PingFang SC;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.goodDetail span {
  position: absolute;
  display: inline-block;
  color: #E42F46;
  font-size: 40px;
  padding-top: 30px;
  padding-left: 33px;
}
.van-col--4,.van-col--20 {
  font-size: 28px;
  color: #333;
}
.van-col--4 {
  color: #666;
  padding-left: 32px;
}
.van-row {
  height: 90px;
  line-height: 90px;
  background-color: #fff;
}
.serveData {
  margin-top: 19px;
}
.isSku {
  margin-bottom: 150px;
}
.buyMock {
  width: 100%;
  height: 110px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  font-size: 22px;
  display: flex;
  text-align: center;
  border-top: 1px solid #eee;
}
.custom {
  flex: 1;
  padding-top: 20px;
  color: #979797;
}
.buy {
  width: 310px;
  height: 112px;
  font-size: 40px;
  background-color: #E42F46;
  text-align: center;
  line-height: 110px;
  color: #fff;
  border: none;
}
.chat {
  top: 23px;
  font-size: 44px;
  color: #979797;
}
.list {
  flex: 1;
}
.shop-o {
  top: 23px;
  font-size: 44px;
  color: #979797;
}
.shop {
  color: #979797;
  padding-top: 20px;
}
.iconImg {
  width: 32px;
  height: 32px;
  position: absolute;
  top: 23px;
  left: 240px;
}
.photoDetail {
  width: 100%;
  height: 64px;
  margin-bottom: 200px;
  text-align: center;
  position: relative;
}
.detailText {
  position: absolute;
  font-size: 22px;
  color: #999999;
  left: 275px;
  top: 23px;
}
.van-popup {
  padding: 15px 30px;
  box-sizing: border-box;
}
.productCard {
  background-color: #fff;
  /deep/.van-card__title {
    color: #ccc;
    position: absolute;
    top: 70px;
    width: 100%;
  }
  /deep/img {
    background: #000;
    border-radius: 10px;
  }
  /deep/.van-card__price {
    font-size: 40px;
  }
  /deep/.van-card__desc {
    color: #ccc;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
.isSkuDownDivider {
  margin: 0;
}
.isSKutitle {
  font-size: 28px;
}
.productConten {
  .product-delcom p {
    font-size: 24px;
  }
  .product-footerlist {
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 20px;
      background-color: #f0f2f5;
      margin: 10px;
      color:#101010 ;
      font-size: 26px;
      border-radius: 8px;
      .productActive {
        background-color: #FDE7EA;
        color: red;
        border: 1px solid #FDE7EA;
      }
    }
  }
}
.showShoPDetail {
  // position: static;
  background-color: #f0f2f5;
  margin-top: 100px;
  padding: 10px;
}
</style>

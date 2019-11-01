import request from '@/utils/request'
// 订单页相关接口

// 创建订单
export const CreateCommonOrder = ({
  // aId, 地址ID
  accountMemberId, // 店铺ID
  pCollection, // 规格名称
  pCollectionId, // 规格ID
  selectedNum, // 选择数量
  goodsId, // 商品ID
  note = '' // 备注
}) => {
  return request({
    method: 'POST',
    url: '/api/Mall/CreateCommonOrder',
    data: {
      addId: 0, // 地址ID
      cosList: [{
        accountId: accountMemberId, // 店铺ID
        copmList: [{
          pCollection, // 商品
          pCollectionId, // 商品属性ID
          pCount: selectedNum, // 个数
          pId: goodsId // 商品ID
        }],
        invTitle: '', // 发票
        note, // 下单备注
        orderType: 1 // 订单类型
      }],
      couponId: 0, // 优惠券ID
      sourceId: 3, // 来源
      userId: 100000050571 // 用户ID
    }
  })
}

// 地址列表获取
export const GetAnyProfilesAddress = () => {
  return request({
    method: 'POST',
    url: '/api/Order/GetAnyProfilesAddress',
    data: {
      aProfileAccountId: 100000050571 // 用户ID
    }
  })
}

// 地址更新、保存
export const CreateProfilesAddress = ({
  aAddTime,
  aAddress,
  aCityId,
  aCityName,
  aCountyId,
  aCountyName,
  aMobilePhone,
  aProfileAccountId = 100000050571,
  aProvinceId,
  aProvinceName,
  aRealName,
  aUpdateTime
}) => {
  return request({
    method: 'POST',
    url: '/api/Order/CreateProfilesAddress',
    data: {
      aAddTime, // 添加时间
      aAddress, // 详细地址
      aBestTimeId: '0',
      aCityId, // 市ID
      aCityName, // 市
      aConstruction: '',
      aCountyId, // 县ID
      aCountyName, // 县名
      aId: '0',
      aIsDefault: 'true',
      aMobilePhone, // 手机号
      aProfileAccountId, // 用户Id
      aProvinceId, // 省ID
      aProvinceName, // 省名字
      aRealName, // 用户名字
      aUpdateTime // 更新时间
    }
  })
}

// // 地址删除
export const DelProfilesAddress = aId => {
  return request({
    method: 'POST',
    url: '/api/Mall/DelProfilesAddress',
    data: {
      aId
    }
  })
}

// 运费
export const GetSplitOrder = ({
  areaId = 0, // addressId
  accountMemberId, // shopId
  sAddTime, // now time
  priceValName, // goodsAttribute
  priceValId, // goodsID
  height,
  length,
  id, // productId
  pictureDefault,
  nameFull,
  count,
  salePrice, // 价格
  postState,
  userId,
  width
}) => {
  return request({
    method: 'POST',
    url: '/api/Order/SplitOrder',
    data: {
      areaId, // 地址ID
      shoppingCartsJson: [{
        sAccountId: accountMemberId, // shopID
        sAddTime, // 当前时间
        sCollection: priceValName,
        sCollectionId: priceValId,
        sHigh: height, // height
        sLong: length, // length
        sPicturePath: 'http://mall.yufu.cn/Product- ' + id + '-0-0.0.0.html',
        sProductId: id, // id
        sProductImgUrl: pictureDefault, // pictureDefault
        sProductName: nameFull,
        sQuantity: count,
        sSaleRealPrice: salePrice,
        sShippingTemplateId: postState,
        sUpdateTime: sAddTime,
        sUserId: userId,
        sWidth: width,
        sAreaId: '0',
        sId: '0',
        sIsDelete: false,
        sIsUsed: true,
        sPickageId: '0',
        sPrice: '0',
        sShippingPrice: '0',
        sSku: '0'
      }]
    }
  })
}

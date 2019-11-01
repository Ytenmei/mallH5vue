import request from '@/utils/request'
// 购物车相关接口

// 获取用户购物车
export const GetShippingCarts = ({
  sUserId,
  cartType
}) => {
  return request({
    method: 'POST',
    url: '/api/Mall/GetShippingCarts',
    data: {
      sUserId, // 用户ID
      cartType
    }
  })
}
// 获取商品库存
export const GetMobileProductRealStock = ({
  Pid, // 商品ID
  PpvalId // 商品属性ID
}) => {
  return request({
    method: 'POST',
    url: '/api/Mall/GetMobileProductRealStock',
    data: {
      Pid,
      PpvalId
    }
  })
}
// 删除商品
export const DelShippingCarts = ({
  sIds
}) => {
  return request({
    method: 'POST',
    url: '/api/Mall/DelShippingCarts',
    data: {
      sIds
    }
  })
}

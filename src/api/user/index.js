import request from '@/utils/request'
// 用户相关接口

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

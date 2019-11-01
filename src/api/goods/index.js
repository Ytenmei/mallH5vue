import request from '@/utils/request'
// 通过id获取商品信息
export const MobileProductByIdOpen = id => {
  return request({
    method: 'POST',
    url: '/api/Mall/MobileProductByIdOpen',
    data: {
      id
    }
  })
}

// 获取商品描述信息
export const ProductDescProductId = id => {
  return request({
    method: 'POST',
    url: '/api/Mall/ProductDescProductId',
    data: {
      id
    }
  })
}

// 获取商品详细属性信息
export const GetMoblieProductAttrs = pId => {
  return request({
    method: 'POST',
    url: '/api/Mall/GetMoblieProductAttrs',
    data: {
      pId
    }
  })
}

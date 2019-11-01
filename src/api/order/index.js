// order 相关接口
import request from '@/utils/request'
// 获取订单详情
export const GetOrderById = orderId => {
  return request({
    method: 'POST',
    url: '/api/Mall/GetOrderById',
    data: {
      orderId
    }
  })
}

// 获取订单详情
export const GetOrderByPage = ({
  pageIndex,
  pageSize,
  userId,
  status
}) => {
  return request({
    method: 'POST',
    url: '/api/Mall/GetOrderByPage',
    data: {
      pageIndex,
      pageSize,
      userId,
      status
    }
  })
}

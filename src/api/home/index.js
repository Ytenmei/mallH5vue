//  home 页面接口
import request from '@/utils/request'

export const getArticles = () => {
  return request({
    method: 'POST',
    url: '/api/Mall/GetMobileAdsIndex',
    data: {
      typeId: 0
    }
  })
}
export const GetMobileActiveProducts = ({
  // pageSize,
  // pageIndex,
  activeurl
}) => {
  return request({
    method: 'POST',
    url: '/api/Mall/GetMobileActiveProducts',
    data: {
      pageSize: 18, // 一页获取个数
      pageIndex: 1, // 页数
      activeurl // 专题ID
    }
  })
}

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

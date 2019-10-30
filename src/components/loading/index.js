import { Toast } from 'vant'
import 'vant/lib/index.css'

export function toast (message, duration = 0) {
  Toast({
    type: 'loading',
    message,
    duration
  })
}

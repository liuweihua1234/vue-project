import { $get, $post } from '@/util'
export default {
  list: (params) => {
    return $get('/studentManage/student?action=list', params);
  }
}
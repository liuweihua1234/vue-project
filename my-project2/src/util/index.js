import axios from 'axios'
export const $get = (url, params) => {
  return axios.get('/api' + url, { params: params })
}

export const $post = (url, params) => {
  return axios.post('/api' + url, params)
}
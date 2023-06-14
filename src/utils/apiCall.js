import axios from 'axios'
import { TOKENS } from '@utils/constants'

export default options => {
  return axios({
    method: options.method,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    },
    url: options.url,
    params: {
      token: TOKENS.treffle,
      ...options.data,
    }
  })
  .then(response => {
    if (options.success) {
      options.success(response)
    }
  })
  .catch(error => {
    if (options.error) {
      options.error(error)
    }
    console.error(error)
  })
}
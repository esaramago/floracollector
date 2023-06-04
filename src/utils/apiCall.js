import axios from 'axios'

export default options => {
  return axios({
    method: options.method,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*' // Could work and fix the previous problem, but not in all APIs
    },
    url: options.url,
    data: options.data,
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
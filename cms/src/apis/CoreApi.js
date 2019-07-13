import axios from 'axios'
// const BASE_URL = 'http://api.thaistringers.com/api'
const BASE_URL = 'https://localhost:3001/api'
const TIMEOUT = 10000

let api = {}

export default {
  getHeader: () => {
    return api.headers
  },
  setHeader: (headers) => {
    api = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT,
      headers: headers
    })
  },
  submit: (data) => {
    return api.post('execute', data)
  }
}

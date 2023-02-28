import axios from 'axios'

const getDomain = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000'
  } else {
    return 'https://film-doms.vercel.app'
  }
}

const createApi = () => {
  const _api = axios.create({
    baseURL: `${getDomain()}`,
  })

  _api.interceptors.response.use((response) => {
    return response.data
  })

  return _api
}

const api = createApi()

export default api

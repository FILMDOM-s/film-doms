import axios from 'axios'

const getDomain = () => {
  if (process.env.NODE_ENV === 'development') {
    return '/'
  } else {
    // * change domain when backend api server is ready
    // ? 'https://www.filmdoms.com'
    return '/'
  }
}

const createApi = () => {
  const _api = axios.create({
    baseURL: `${getDomain()}`,
  })

  _api.interceptors.response.use(response => {
    return response.data
  })

  return _api
}

const api = createApi()

export default api

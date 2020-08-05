import axios from 'axios'
const ApiService = {
  init (baseURL) {
    axios.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        if (error.response && error.response.data) {
          if (error.response.data.status === '401') {
            localStorage.clear()
            window.location.href = '/'
          }
        }
        return Promise.reject(error)
      }
    )
    axios.defaults.baseURL = baseURL
    axios.interceptors.request.use((config) => {
      config.metadata = { 'request-startTime': new Date().getTime() }
      return config
    })

    axios.interceptors.response.use((response) => {
      const start = response.config.metadata['request-startTime']
      const end = new Date().getTime()
      const duration = end - start
      response.metadata = {
        requestStartTime: start,
        requestEndTime: end,
        requestDuration: duration
      }
      if (
        process.env.DEBUG_MODE !== undefined &&
        process.env.DEBUG_MODE &&
        process.client
      ) {
        console.groupCollapsed('API response url:' + response.config.url)
        console.log(response)
        console.trace()
        console.groupEnd()
      }
      return response
    })
  },

  setHeader (token) {
    axios.defaults.headers.common.Authorization = token
  },

  removeHeader () {
    axios.defaults.headers.common = {}
  },

  get (resource) {
    return axios.get(resource)
  },

  post (resource, data) {
    return axios.post(resource, data)
  },

  put (resource, data) {
    return axios.put(resource, data)
  },

  delete (resource) {
    return axios.delete(resource)
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/
  customRequest (data) {
    return axios(data)
  }
}

export default ApiService

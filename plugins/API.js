import ApiService from '../services/api.service'

ApiService.init(process.env.VUE_APP_API_HOST)

export default (ctx, inject) => {
  const token = ctx.$auth.getToken('local')
  if (token) {
    ApiService.setHeader(token)
  }
  inject('api', ApiService)
}

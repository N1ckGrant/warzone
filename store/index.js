// import { TokenService } from "../services/storage.service"
// const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({})
export const actions = {
  // SOCKET_newMessege (ctx, data) {
  //   console.log('messege recevied', data)
  // }
}
export const mutations = {}
export const getters = {
  isAuthenticated (state) {
    return state.auth.loggedIn
  },

  loggedInUser (state) {
    return state.auth.user
  }
}

import request from 'superagent'
import saPrefix from 'superagent-prefix'
import CryptoJS from 'crypto-js'

import localStore from '../utils/localStore'

const API_ROOT = process.env.API_ROOT
const prefix = saPrefix(API_ROOT)

const setSlothToken = function (req) {
  let ua = localStore.getItem('sloth.user_auth')
  if (!ua) {
    return req
  }
  let apiKey = ua.id
  let token = ua.token
  let tsMsg = apiKey + ':' + parseInt(new Date().getTime() / 1000)
  let sign = CryptoJS.HmacSHA256(tsMsg, token).toString(CryptoJS.enc.Hex)
  return req.set('X-Signature', tsMsg + ':' + sign)
}

export default {
  ping: () => {
    return request.get('/_ping')
      .use(prefix)
  },
  login: (body) => {
    return request.post('/login')
      .send(body)
      .use(prefix)
      .set('Accept', 'application/json')
  },
  logout: () => {
    return request.delete('/logout')
      .use(prefix)
      .use(setSlothToken)
  },
  getGHAccessURL: () => {
    return request.get('/github/access_url')
      .use(prefix)
  }
}

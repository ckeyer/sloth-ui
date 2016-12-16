export default {
  setItem: (key, data) => {
    if (typeof data === 'string') {
      window.localStorage.setItem('sloth.user_auth', data)
    } else {
      window.localStorage.setItem('sloth.user_auth', JSON.stringify(data))
    }
  },
  getItem: (key) => {
    let data = window.localStorage.getItem(key)
    try {
      return JSON.parse(data)
    } catch (e) {
      return data
    }
  },
  rmItem: (key) => {
    window.localStorage.removeItem(key)
  }
}

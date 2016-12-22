<template>
  Login Whit Username.

  <div>
    <div class="form-group">
      <input type="email" class="form-control" placeholder="邮箱" required="" v-model="email" >
    </div>
    <div class="form-group">
      <input type="password" class="form-control" placeholder="密码" required="" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary" :class="{disabled: !allowSubmit}" @click="login">登入</button>
    <router-link :to="{path:'/resetpassword'}"><small>找回密码</small></router-link>
  </div>
</template>

<script>
import api from '../../api/api'
import Alert from '../../utils/alert'

export default {
  name: 'login-user',
  data () {
    return {
      logo_name: 'Sloth',
      email: '',
      password: ''
    }
  },
  computed: {
    allowSubmit: function () {
      return this.email !== '' && this.password.length > 4
    }
  },
  methods: {
    login: function () {
      let body = {
        email: this.email,
        password: this.password
      }
      console.log('login.', body)

      let vm = this
      api.login(body).end(function (err, resp) {
        if (err || !Alert.check(vm, resp)) {
          return
        }

        vm.$store.dispatch('setUserAuth', resp.body.user_auth)
        vm.$store.dispatch('setAccount', resp.body.user)
        console.log('login-user', 'login: jump to /')
        vm.$router.push('/')
      })
    }
  }
}
</script>

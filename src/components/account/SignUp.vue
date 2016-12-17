<template>
  <div id="signup">
    <div class="text-center loginscreen animated fadeInDown">
      <div>
        <div>
          <h1 class="logo-title">{{logo_name}}</h1>
          Sign Up a New Account.
        </div>

        <div class="middle-box">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="用户名" required="" v-model="name" >
          </div>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="邮箱" required="" v-model="email" >
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="密码" required="" v-model="password">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="重复密码" required="" v-model="repassword">
          </div>
          <button type="submit" class="btn btn-primary" :class="{disabled: !allowSubmit}" @click="signup">注册</button>
          <router-link :to="{path:'/login'}"><small>已有账号</small></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../api/api'
import Alert from '../../utils/alert'

export default {
  name: 'signup',
  data () {
    return {
      logo_name: 'Sloth',
      name: '',
      email: '',
      password: '',
      repassword: ''
    }
  },
  computed: {
    allowSubmit: function () {
      return this.email !== '' &&
        this.name.length > 3 &&
        this.password.length > 4 &&
        this.password === this.repassword
    }
  },
  methods: {
    signup: function () {
      let body = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      console.log('login.', body)

      let vm = this
      api.signup(body).end(function (err, resp) {
        if (err || !Alert.check(vm, resp)) {
          return
        }

        vm.$store.dispatch('setUserAuth', resp.body.user_auth)
        vm.$store.dispatch('setAccount', resp.body.user)
        vm.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" scope>
@import '../../scss/style.scss';

body {
  background-color: $gray;
  text-align: center;
}
a {
  cursor: hand;
}
li i {
  font-size: 20px;
}
.fa-3 {
  font-size: 20px;
}
.logo-title {
  color: #e6e6e6;
  font-size: 120px;
  letter-spacing: -10px;
  margin-bottom: 0;
  margin-top: 20px;
}
.btn {
  width: 100% !important;
}

</style>
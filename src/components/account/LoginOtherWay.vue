<template>
  <div id="login_github">
    Login With Github
    <div>
      <a :href="ghAccessURL"><i class="fa fa-github-alt fa-4"></i></a>
      <a><i class="fa fa-wechat fa-4"></i></a>
    </div>
  </div>
</template>

<script>
import api from '../../api/api'
import Alert from '../../utils/alert'

export default {
  name: 'login-github',
  data () {
    return {
      ghAccessURL: ''
    }
  },
  created: function () {
    let vm = this
    api.getGHAccessURL().end(function (err, resp) {
      if (err) {
        Alert.error('连接服务器错误', '500')
        vm.$router.push('/login')
        return
      }
      console.log('access_url', resp.body.message)
      vm.ghAccessURL = resp.body.message
    })
  }
}
</script>

<style scope>
#login_github i {
  font-size: 80px;
  margin: 10px;
}

#login_github a {
  border: 2px;
  border-color: #444;
}
</style>
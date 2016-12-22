<template>
  <div id="github-auth">
    <h1>Github Auth</h1>
  </div>
</template>
<!-- github/auth?code=8f4de28deb2932388183 -->
<script>
import Alert from '../../utils/alert'
import api from '../../api/api'

export default {
  name: 'github-auth',
  created: function () {
    let code = this.$route.query.code
    console.log('code:', code)
    if (!code) {
      Alert.error('链接错误', 'required code.')
      return
    }

    let vm = this
    api.githubAuth(code).end(function (err, resp) {
      if (err || !Alert.check(vm, resp)) {
        return
      }

      vm.$store.dispatch('setUserAuth', resp.body.user_auth)
      vm.$store.dispatch('setAccount', resp.body.user)
      vm.$router.push('/')
    })
  }
}
</script>

<style scope>
#github-auth h1 {
  color: white;
}
</style>

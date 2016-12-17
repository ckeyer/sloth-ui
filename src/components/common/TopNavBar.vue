<template>
  <div class="top-nav-bar row border-bottom">
    <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
      <div class="navbar-header">
        <div role="search" class="navbar-form-custom" method="post" action="">
          <div class="form-group">
            <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">
          </div>
        </div>
      </div>
      <ul class="nav navbar-top-links navbar-right">
        <li>
          <a @click="logout">
            <i class="fa fa-sign-out"></i> 退出
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import api from '../../api/api'
import Alert from '../../utils/alert'

export default {
  name: 'logout',
  methods: {
    logout: function () {
      let vm = this
      api.logout().end(function (err, resp) {
        vm.$store.dispatch('removeAccount')
        vm.$store.dispatch('removeUserAuth')
        if (!err || !Alert.check(vm, resp)) {
          return
        }
      })
      vm.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.navbar-minimalize {
  float: left;
}
.navbar-minimalize a {
  padding-right: 0px;
  padding-left: 0px;
  margin-left: 15px;
}
.navbar-form-custom {
  margin-left: 15px;
}

</style>
<template>
  <div id="login">
    <div class="text-center loginscreen animated fadeInDown">
      <div>
        <div>
          <h1 class="logo-title">{{logo_name}}</h1>
        </div>

        <div class="middle-box tabs-container">
          <ul class="nav nav-tabs">
              <li :class="{ active: isUser}"><router-link to="/login"> <i class="fa fa-user fa-3"></i></router-link></li>
              <li :class="{ active: !isUser}"><router-link to="/login/others"><i class="fa fa-cloud fa-3"></i></router-link></li>
          </ul>

          <div class="tab-content">
              <div class="tab-pane active">
                  <div class="panel-body">
                    <router-view></router-view>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Alert from '../../utils/alert'

export default {
  name: 'login',
  data () {
    return {
      logo_name: 'Sloth'
    }
  },
  computed: {
    isUser: function () {
      return this.$route.path === '/login'
    }
  },
  methods: {
  }
}
</script>

 <!-- scoped -->
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
<template>
  <nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
      <ul side-navigation class="nav metismenu" id="side-menu">
        <li class="nav-header">
          <div class="profile-element" uib-dropdown>
            <a uib-dropdown-toggle href>
              <span class="clear">
                Sloth
              </span>
            </a>
          </div>
        </li>

        <li ui-sref-active="active">
          <router-link to="/dashboard">
            <i class="fa fa-laptop"></i>
            <span class="nav-label">仪表盘</span>
          </router-link>
        </li>
        <li ui-sref-active="active">
          <router-link to="/settings">
            <i class="fa fa-desktop"></i>
            <span class="nav-label">设置</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'main-nav',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    topClass: function () {
    }
  }
}
</script>

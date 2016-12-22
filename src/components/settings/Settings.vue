<template>
  <div id="settings">
    Settings

    <div class="tabs-container">
      <ul class="nav nav-tabs">
          <li class="active" v-if="isAdmin"><router-link to="/settings">Github App</router-link></li>
          <li :class=""><router-link to="/settings">None</router-link></li>
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'settings',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      isAdmin: 'isAdmin',
      getUserAuth: 'getUserAuth',
      getUser: 'getUser'
    })
  },
  created: function () {
    console.log('isAdmin', this.isAdmin)
    console.log('getUserAuth', this.getUserAuth)
    console.log('getUser', this.getUser)
  }
}
</script>

<template>
  <div id="github-app">
    <h3>Github APP</h3>

    <div class="ibox-content">
      <div class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">Client ID</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="clientId">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Client Secret</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="clientSecret">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Redirect URL</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="redirectUrl">
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-2 control-label"></label>
          <div class="col-sm-10">
            <button class="btn btn-primary" @click="submit">保存</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../api/api'
import Alert from '../../utils/alert'

export default {
  name: 'settings-github-app',
  data () {
    return {
      clientId: '',
      clientSecret: '',
      redirectUrl: ''
    }
  },
  created: function () {
    let vm = this
    api.getSettings(['gh_client_id', 'gh_client_secret', 'gh_callback_url']).end(function (err, resp) {
      if (err) {
        console.log('get settings,', err)
        return
      }

      vm.clientId = resp.body.gh_client_id
      vm.clientSecret = resp.body.gh_client_secret
      vm.redirectUrl = resp.body.gh_callback_url
    })
  },
  methods: {
    submit: function () {
      let body = {
        gh_client_id: this.clientId,
        gh_client_secret: this.clientSecret,
        gh_callback_url: this.redirectUrl
      }
      console.log('submit', body)
      let vm = this
      api.addSettings(body).end(function (err, resp) {
        if (!Alert.check(vm, resp)) {
          console.log('err', err)
          return
        }
      })
    }
  }
}
</script>
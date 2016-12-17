import Vue from 'vue'
import VueRouter from 'vue-router'

import localStore from './utils/localStore'

import Main from './components/Main'

import Login from './components/account/Login'
import LoginOtherWay from './components/account/LoginOtherWay'
import LoginUser from './components/account/LoginUser'
import SignUp from './components/account/SignUp'
import ResetPassword from './components/account/ResetPassword'

import Settings from './components/settings/Settings'
import GithubApp from './components/settings/GithubApp'

Vue.use(VueRouter)

const Foo = Vue.extend({
  template: '<h2>This is foo!</h2>'
})

const router = new VueRouter({
  mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/login',
      component: Login,
      children: [
        {
          path: 'others',
          component: LoginOtherWay
        },
        {
          path: '',
          component: LoginUser
        }
      ]
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/resetpassword',
      component: ResetPassword
    },
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Foo
        },
        {
          path: 'dashboard',
          component: Foo
        },
        {
          path: 'settings',
          component: Settings,
          children: [
            {
              path: '',
              component: GithubApp
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' &&
    to.path !== '/login/others' &&
    to.path !== '/signup') {
    let ua = localStore.getItem('sloth.user_auth')
    if (!ua) {
      console.log('should login')
      next('/login')
    }
  }
  next()
})

export default router

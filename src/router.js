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

// github callback.
import Auth from './components/github/Auth'
import Bind from './components/github/Bind'
import Github from './components/github/Github'

Vue.use(VueRouter)

const TODO = Vue.extend({
  template: '<h2>This is developing!</h2>'
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
          component: TODO
        },
        {
          path: 'dashboard',
          component: TODO
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
    },
    {
      path: '/github',
      component: Github,
      children: [
        {
          path: 'auth',
          component: Auth
        },
        {
          path: 'bind',
          component: Bind
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const whiteList = [
    '/login',
    '/login/others',
    '/signup',
    '/github/auth',
    '/github/bind'
  ]
  for (var i in whiteList) {
    if (to.path === whiteList[i]) {
      next()
      return
    }
  }
  let ua = localStore.getItem('sloth.user_auth')
  if (!ua) {
    console.log('should login')
    next('/login')
  }
  next()
  console.log('beforeEach is logined.')
})

export default router

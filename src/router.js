import Vue from 'vue'
import VueRouter from 'vue-router'

import localStore from './utils/localStore'

import Login from './components/account/Login'
import LoginOtherWay from './components/account/LoginOtherWay'
import LoginUser from './components/account/LoginUser'
import SignUp from './components/account/SignUp'
import ResetPassword from './components/account/ResetPassword'

import Main from './components/Main'

Vue.use(VueRouter)

const Foo = Vue.extend({
  template: '<p>This is foo!</p>'
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
          path: 'foo',
          component: Foo
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

import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import { hasValidToken } from '@/utils/auth'

Vue.config.productionTip = false

// 登录拦截
// router.beforeEach((to, from, next) => {
//   console.log('router.beforeEach to', to)
//   console.log('router.beforeEach from', from)
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (hasValidToken()) { // 判断本地是否存在access_token
//       next()
//     } else {
//       if (to.path === '/login') {
//         next()
//       } else {
//         next({
//           path: '/login'
//         })
//       }
//     }
//   } else {
//     next()
//   }
//   /* 如果本地 存在 token 则 不允许直接跳转到 登录页面 */
//   if (to.fullPath === '/login') {
//     if (hasValidToken()) {
//       next({
//         path: from.fullPath
//       })
//     } else {
//       next()
//     }
//   }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

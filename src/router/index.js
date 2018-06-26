import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Dashboard from '@/components/Dashboard'
import Main from '@/components/Main'
import Login from '@/components/Login'

import LogQuery from '@/components/LogQuery'
import LogManager from '@/components/LogManager'
import LogGenerator from '@/components/LogGenerator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    }, {
      path: '/',
      component: Dashboard,
      children: [
        { name: 'Dashboard', path: '/', component: LogManager },
        { name: 'LogQuery', path: '/query', component: LogQuery },
        { name: 'LogGenerator', path: '/log/parse', component: LogGenerator },
        { name: 'About', path: '/about', component: About }
      ]
    }, {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

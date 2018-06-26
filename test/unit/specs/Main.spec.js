
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)

import Main from '@/components/Main'

describe('Main.vue', () => {
  it('should render correct form contents', () => {
    const Constructor = Vue.extend(Main)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.search-btn span').textContent)
      .to.equal('查询')
  })
})

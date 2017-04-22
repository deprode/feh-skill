import Vue from 'vue'
import SkillForm from '../../src/components/SkillForm.vue'

describe('SkillForm.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(SkillForm)
    })
    expect(vm.$el.querySelector('label').textContent).toBe('スキル名')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43

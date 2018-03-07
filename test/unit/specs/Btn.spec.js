import Vue from 'vue'
import Btn  from  '@/components/Btn'

/*
Btn组件测试
*/
describe('Btn.vue', () => {
  const Constructor = Vue.extend(Btn);
  const vm = new Constructor().$mount();
  const increaseBtn = vm.$el.querySelector('.increase-btn');
  const decreaseBtn = vm.$el.querySelector('.decrease-btn');

  const clickEvent = new Event('click');

  test('the number shoude be 1', () => {
    increaseBtn.dispatchEvent(clickEvent);
    vm.$nextTick().then(() => {
      expect(vm.$el.querySelector('h1').textContent).toContain('1');
    });
  });

  test('the number shoude be 0', () => {
    decreaseBtn.dispatchEvent(clickEvent);

    vm.$nextTick().then(() => {
      expect(vm.$el.querySelector('h1').textContent).toContain('0');
    });
  });
});

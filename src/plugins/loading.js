import loadingComponent from '../components/Loading.vue';

let $vm; //loading 组件

/*
基于组件封装 的Vue插件
**/
export default {
  install(Vue, options){

    if (!$vm){

      let LoadingPlugin = Vue.extend(loadingComponent);
      let dom = document.createElement("div");
      dom.id="onlyLoading";
      document.body.appendChild(dom);

      $vm = new LoadingPlugin({
        el: dom, //必须是已经插入的dom元素
        propsData: {
          show: false
        }
      });
    }

    $vm.show = true;

    let loading = {
      show(){
        $vm.show = true;
      },
      hide(){
        $vm.show = false;
      }
    };

    Vue.mixin({
      created(){
        this.$loading = loading;
      }
    });
  }
}

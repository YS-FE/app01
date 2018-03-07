<template>
<div id="app">
  <div class="">
    <button type="button" @click="$loading.show()">显示loading</button>
    <button type="button" @click="$loading.hide()">隐藏loading</button>
  </div>

  <div class="">
    <button type="button" @click="show = false" >销毁test01</button>
    <button type="button" @click="show = true" >挂载test01</button>
  </div>

  <!-- 销毁挂载 -->
  <test01 ref="kickme" v-if="show"/>

  <router-link to="/test">User</router-link>
  <router-view/>
  
</div>
</template>

<script>
import Test01 from './components/Test01.vue'
export default {
  name: 'App',
  data(){
    return {
      show: true
    }
  },
  methods: {
  },
  components: {
    'test01': Test01
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

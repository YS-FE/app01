<template lang="html">
  <div class="router-test">
    <h1>一级路由</h1>
    <router-link to="/test/one">One</router-link>
    <router-link to="/test/two">Two</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
.router-test {
  height: 300px;
  border: 1px solid #999;
}
</style>

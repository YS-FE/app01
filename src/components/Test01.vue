<template lang="html">
  <div>
    <h1>销毁挂载</h1>
  </div>
</template>

<script>

export default {
  created(){
    console.log("I am created ...");
  },
  mounted(){
    console.log("I am mounted ...");
  },
  updated(){
    console.log("I am updated...");
  },
  destroyed(){
    console.log("I am destroyed ...");
  }
}
</script>

<style lang="css">
</style>

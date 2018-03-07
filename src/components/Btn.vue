<template lang="html">
  <div class="operation">
    <h1>{{number}}</h1>
    <button type="button" class="increase-btn" @click="increase">增加</button>
    <button type="button" class="decrease-btn" @click="decrease">减少</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number: 0
    };
  },
  methods: {
    increase(){
      this.number++;
    },
    decrease(){
      this.number--;
    }
  }
}
</script>

<style lang="css">
</style>

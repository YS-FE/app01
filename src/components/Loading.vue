<template>
<div id="onlyLoading" v-show="show" >
  <canvas id="canvas"></canvas>
</div>
</template>

<script>
export default {
  mounted() {
    var can = document.querySelector('#canvas');
    if (can) {
      can.width = 50;
      can.height = 50;
      var ctx = can.getContext('2d');

      var circle = {
        x: 25,
        y: 25,
        r: 20
      };

      ctx.strokeStyle = "#409EFF";
      ctx.lineWidth = 3;

      ctx.arc(circle.x, circle.y, circle.r, 270 / 180 * Math.PI, Math.PI, false);
      ctx.stroke();

      var startAngle = 0;

      function load() {
        startAngle = startAngle == 360 ? 0 : startAngle;
        can.style.transform = "rotate(" + startAngle + "deg)";
        startAngle += 30;

        setTimeout(function() {
          load();
        }, 50);
      }
      load();
    }
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="css">

</style>

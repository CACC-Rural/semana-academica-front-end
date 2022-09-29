<template>
  <div id="circle-container" class="rounded-full" :style="{height: radius+'px', width: radius+'px'}" />
</template>

<script>
export default {
  props: {
    radius: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
#circle-container {
  filter: drop-shadow(0px -3px 4px rgba(0, 0, 0, 0.25));
  background: linear-gradient(30deg, #0BADAD 13.39%, #136F63 86.61%);
}
</style>

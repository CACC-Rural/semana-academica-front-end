<template>
  <div id="window-container" :class="{circle}">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    circle: {
      type: Boolean,
      default: false,
    },
    circleSize: {
      type: String,
      default: '100px',
    },
    circleRadius: {
      type: String,
      default: '50%',
    },
  },
};
</script>

<style scoped>
#window-container {
  background: linear-gradient(112.55deg, rgba(255, 255, 255, 0.4) 3.33%, rgba(255, 255, 255, 0.1) 111.93%);
  backdrop-filter: blur(20px);
  border-radius: 17px;
  opacity: 0.999999;
  z-index: 1;
}
#window-container.circle::before {
  opacity: 0.8;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%,-50%);
  width: v-bind(circleSize);
  height: v-bind(circleSize);;
  border-radius: 50%;
  filter: drop-shadow(0px -3px 4px rgba(0, 0, 0, 0.25));
  background: linear-gradient(30deg, #0BADAD 13.39%, #136F63 86.61%);
  z-index: -1;
}
#window-container.circle::after {
  opacity: 0.8;
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(50%,50%);
  width: v-bind(circleSize);
  height: v-bind(circleSize);;
  border-radius: 50%;
  filter: drop-shadow(0px -3px 4px rgba(0, 0, 0, 0.25));
  background: linear-gradient(30deg, #0BADAD 13.39%, #136F63 86.61%);
  z-index: -1;
}
</style>

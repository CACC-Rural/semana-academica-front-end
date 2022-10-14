<template>
  <div id="window-container" :class="{circle, [`style-${circleStyle}`]: true}">
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
    circleStyle: {
      type: Number,
      default: 1,
      validator(value) {
        return [1, 2].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
#window-container {
  background: linear-gradient(112.55deg, rgba(255, 255, 255, 0.4) 3.33%, rgba(255, 255, 255, 0.1) 111.93%);
  backdrop-filter: blur(20px);
  border-radius: 17px;
  opacity: 0.999999;
  z-index: 1;
  &.circle {
    &[class*="style-"] {
      &::before {
        top: 0;
        left: 0;
        transform: translate(-50%,-50%);
      }
      &::after {
        bottom: 0;
        right: 0;
        transform: translate(50%,50%);
      }
      &::before, &::after {
        opacity: 0.8;
        content: "";
        position: absolute;
        width: v-bind(circleSize);
        height: v-bind(circleSize);
        border-radius: 50%;
        z-index: -1;
      }
    }
    &.style-1 {
      &::before, &::after {
        filter: drop-shadow(0px -3px 4px rgba(0, 0, 0, 0.25));
        background: linear-gradient(30deg, #0BADAD 13.39%, #136F63 86.61%);
      }
    }
    &.style-2 {
      &::before, &::after {
        background: linear-gradient(30deg, #82FF9E 13.39%, #136F63 86.61%);
      }
    }
  }
}
</style>

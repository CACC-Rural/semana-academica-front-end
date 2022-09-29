<template>
  <div id="window-container">
    <slot />
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
#window-container {
  background: linear-gradient(112.55deg, rgba(255, 255, 255, 0.4) 3.33%, rgba(255, 255, 255, 0.1) 111.93%);
  backdrop-filter: blur(20px);
  border-radius: 17px;
}
</style>

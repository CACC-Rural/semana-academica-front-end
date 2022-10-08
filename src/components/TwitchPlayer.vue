<template>
  <div id="player" class="w-full max-w-4xl aspect-video" />
</template>

<script>
export default {
  props: {
    autoplay: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    const options = {
      width: '100%',
      height: '100%',
      channel: 'gaules',
      muted: true,
      autoplay: this.autoplay,
    };
    const player = new Twitch.Player('player', options);
  },
};
</script>

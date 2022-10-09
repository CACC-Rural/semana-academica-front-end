<template>
  <div id="player" class="w-full max-w-4xl aspect-video">
    <iframe
      :src="`https://player.twitch.tv/?channel=${channel}&parent=${host}&muted=${muted}&autoplay=${autoplay}`"
      height="100%"
      width="100%"
      loading="lazy"
    />
  </div>
</template>

<script>
export default {
  props: {
    autoplay: {
      type: Boolean,
      default: false,
    },
    muted: {
      type: Boolean,
      default: true,
    },
    channel: {
      type: String,
      default: 'gaules',
    },
  },
  setup() {
    return {
      host: location.host.split(':')[0],
    };
  },
};
</script>

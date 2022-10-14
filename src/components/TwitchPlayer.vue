<template>
  <div ref="container" class="w-full max-w-4xl aspect-video">
    <iframe
      v-show="isVisible"
      ref="player"
      height="100%"
      width="100%"
      loading="lazy"
    />
  </div>
</template>

<script>
import { ref } from 'vue';

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
      isVisible: ref(false),
    };
  },
  mounted() {
    this.showPlayerWhenIntersected();
  },
  methods: {
    showPlayerWhenIntersected() {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.isVisible) {
            this.isVisible = true;
            this.$refs.player.setAttribute('src', `https://player.twitch.tv/?channel=${this.channel}&parent=${this.host}&muted=${this.muted}&autoplay=${this.autoplay}`);
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      });
      observer.observe(this.$refs.container);
    },
  },
};
</script>

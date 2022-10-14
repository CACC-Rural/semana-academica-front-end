<template>
  <div id="app-container" class="flex flex-col m-0 child:mx-auto child:z-20">
    <Header class="my-0 w-full !z-30 md:mb-20" />
    <div class="relative lg:w-3/5 md:h-[600px] -translate-y-[75px] md:w-4/5 sm:w-6/7 sm:h-[600px] xs:h-[500px] h-[600px]">
      <Window class="relative px-5 sm:px-10 md:px-20 w-full h-full text-center flex">
        <div class="m-auto pt-10 md:pt-0">
          <div class="font-bold text-5xl mb-16">
            O que é a Computing Together?
          </div>
          <div class="text-justify">
            A Semana da Computação é o evento anual dos alunos do curso de Ciência da Computação da UFRRJ,
            que se encontra em sua décima edição. Esse ano, nos dedicamos muito para trazer o melhor evento possível,
            com foco em todos os detalhes. Trazemos atividades e convidados relevantes para que possam aproveitar ao
            máximo.
          </div>
        </div>
      </Window>
      <div v-if="!isMobile" class="absolute inset-y-0 right-0 translate-x-1/2 translate-y-1/4 md:block hidden">
        <img src="./assets/sphere.webp" alt="sphere" style="height: 300px; width: 300px;">
      </div>
    </div>
    <Partners />
    <Calendar class="sm:!mx-auto !mx-4 overflow-auto" />
    <div class="mx-0 my-32 w-5/6 sm:w-1/2 md:w-2/3 lg:w-1/2">
      <Window class="sm:p-20 p-5" circle circle-size="150px" :circle-style="2">
        <div class="font-bold text-4xl mb-8 sm:ms-16 text-center">
          Por que "Computing Together"?
        </div>
        <div class="text-justify">
          A Semana da Computação é o evento anual dos alunos do curso de Ciência da Computação da UFRRJ,
          que se encontra em sua décima edição. Esse ano, nos dedicamos muito para trazer o melhor evento possível,
          com foco em todos os detalhes. Trazemos atividades e convidados relevantes para que possam aproveitar ao
          máximo.
        </div>
      </Window>
    </div>
    <TwitchPlayer class="px-6 md:px-0" :autoplay="isDesktop" />
    <div class="child:my-3 sm:child:my-0 sm:py-6 py-3 child:mx-3 child:px-4 child:py-3 child:rounded-lg sm:child:inline-block child:cursor-pointer child:select-none child:h-[60px]">
      <a href="https://www.twitch.tv/computingtogether" class="bg-[#a970ff] hover:bg-[#a970ff]/75 block" target="_blank" @click="trackStreamClick('twitch')">
        <div class="text-center">
          <img class="inline mr-3" width="40" src="./assets/twitch.svg">Assistir pela Twitch
        </div>
      </a>
      <a href="https://www.youtube.com/channel/UCOvzRTmVw2kF_8LXysarV2Q" class="bg-[#ff0000] hover:bg-[#ff0000]/75 block" target="_blank" @click="trackStreamClick('youtube')">
        <div class="text-center">
          <img class="inline mr-3" width="40" src="./assets/youtube.svg">Assistir pelo YouTube
        </div>
      </a>
    </div>
    <Footer class="mt-20 w-full" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Partners from './components/Partners.vue';
import Window from './components/Window.vue';
import Calendar from './components/Calendar.vue';
import TwitchPlayer from './components/TwitchPlayer.vue';

export default {
  components: {
    Footer,
    Header,
    Partners,
    Window,
    Calendar,
    TwitchPlayer,
  },
  setup() {
    return {
      windowWidth: window.innerWidth,
      isMobile: ref(window.innerWidth < 640),
      isDesktop: ref(window.innerWidth > 720),
    };
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
      this.isMobile = window.innerWidth < 640;
      this.isDesktop = window.innerWidth > 720;
    });
  },
  methods: {
    trackStreamClick(name) {
      const id = {
        twitch: 1,
        youtube: 2,
      };
      this.$gtag.event('click', {
        event_category: 'stream',
        event_label: 'button',
        value: id[name] || 9999,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#app-container {
  background-color: $background-color;
  color: $text-color;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
  background-image: url(./assets/line-pattern.svg), url(./assets/fundo_colorido_site_ct.webp);
  background-position: left top, left top;
  background-repeat: repeat-y;

  @media screen and (min-width: 600px) {
    background-size: contain;
  }
}
</style>

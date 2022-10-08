<template>
  <div id="app-container" class="flex flex-col m-0 child:mx-auto">
    <Header class="my-0 w-full z-10" />
    <div class="!mx-0 relative sm:-translate-x-[50px] -translate-y-[100px] translate-x-0 lg:w-3/5 md:h-[600px] md:w-4/5 sm:w-6/7 sm:h-[600px] xs:h-[550px] h-[600px]">
      <Window class="absolute left-0 top-0 p-36 sm:px-36 px-5 z-10 w-full h-full sm:text-left text-center">
        <div class="font-bold text-5xl mb-16">
          O que é a Computing  Together?
        </div>
        <div class="text-justify">
          A Semana da Computação é o evento anual dos alunos do curso de Ciência da Computação da UFRRJ,
          que se encontra em sua décima edição. Esse ano, nos dedicamos muito para trazer o melhor evento possível,
          com foco em todos os detalhes. Trazemos atividades e convidados relevantes para que possam aproveitar ao máximo.
        </div>
      </Window>
      <div class="absolute inset-y-0 right-0 translate-x-1/2 translate-y-1/4 sm:block hidden">
        <img src="./assets/sphere.webp" alt="sphere" style="height: 300px; width: 300px;">
      </div>
    </div>
    <Partners />
    <Calendar class="sm:!mx-auto !mx-4 overflow-auto" />
    <div class="mx-0 my-32 w-5/6 sm:w-1/2 md:w-2/3 lg:w-1/2">
      <Window class="sm:p-20 p-5" circle circle-size="150px">
        <div class="font-bold text-4xl mb-8 sm:ms-16 text-center">
          Por que "Computing Together"?
        </div>
        <div class="text-justify">
          A Semana da Computação é o evento anual dos alunos do curso de Ciência da Computação da UFRRJ,
          que se encontra em sua décima edição. Esse ano, nos dedicamos muito para trazer o melhor evento possível,
          com foco em todos os detalhes. Trazemos atividades e convidados relevantes para que possam aproveitar ao máximo.
        </div>
      </Window>
    </div>
    <Footer class="mt-20 w-full" />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Partners from './components/Partners.vue';
import Window from './components/Window.vue';
import Calendar from './components/Calendar.vue';

export default {
  components: {
    Footer,
    Header,
    Partners,
    Window,
    Calendar,
  },
};
</script>

<style lang="scss" scoped>
#app-container {
  background-color: $background-color;
  color: $text-color;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}
</style>

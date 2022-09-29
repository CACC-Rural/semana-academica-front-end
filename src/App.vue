<template>
  <div id="app-container" class="flex flex-col m-0 child:mx-auto">
    <Header class="my-0 w-full z-10" />
    <div class="!mx-0 relative -translate-y-[100px] -translate-x-[50px] md:h-[500px] md:w-3/5 sm:w-4/5 sm:h-[700px]">
      <Window class="absolute left-0 top-0 p-36 px-36 z-10" style="height: 100%; width: 100%;">
        <div class="font-bold text-5xl mb-16">
          O que é a Computing  Together?
        </div>
        <div>
          A Semana da Computação é o evento anual dos alunos do curso de Ciência da Computação da UFRRJ,
          que se encontra em sua décima edição. Esse ano, nos dedicamos muito para trazer o melhor evento possível,
          com foco em todos os detalhes. Trazemos atividades e convidados relevantes para que possam aproveitar ao máximo.
        </div>
      </Window>
      <div class="absolute inset-y-0 right-0 translate-x-1/2 translate-y-1/4">
        <img style="height: 300px; width: 300px;" src="./assets/sphere.png" alt="sphere">
      </div>
    </div>
    <!-- <Window class="!mx-0 py-36 px-36 w-1/2">
      <div class="font-bold text-5xl mb-16">
        O que é a Computing  Together?
      </div>
      <div>
        A Semana da Computação é o evento anual dos alunos do curso de Ciência da Computação da UFRRJ,
        que se encontra em sua décima edição. Esse ano, nos dedicamos muito para trazer o melhor evento possível,
        com foco em todos os detalhes. Trazemos atividades e convidados relevantes para que possam aproveitar ao máximo.
      </div>
      <div class="absolute top-1/2 -right-1/4 -z-10">
        <img style="height: 300px; width: 300px;" src="./assets/sphere.png" alt="sphere">
      </div>
    </Window> -->
    <Partners />
    <div class="mx-0 my-32 relative w-1/2" style="height: 400px;">
      <Circle class="absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2" :radius="150" />
      <Window class="absolute left-0 top-0 p-20 z-10" style="height: 100%; width: 100%;">
        <div class="font-bold text-4xl mb-16 text-center z-10">
          Por que "Computing Together"?
        </div>
        <div>
          A Semana da Computação é o evento anual dos alunos do curso de Ciência da Computação da UFRRJ,
          que se encontra em sua décima edição. Esse ano, nos dedicamos muito para trazer o melhor evento possível,
          com foco em todos os detalhes. Trazemos atividades e convidados relevantes para que possam aproveitar ao máximo.
        </div>
      </Window>
      <Circle class="absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2" :radius="150" />
    </div>
    <Footer class="mt-20 w-full" />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Partners from './components/Partners.vue';
import Window from './components/Window.vue';
import Circle from './components/Circle.vue';

export default {
  components: {
    Footer,
    Header,
    Partners,
    Window,
    Circle,
  },
};
</script>

<style lang="scss" scoped>
#app-container {
  background-color: $background-color;
  color: $text-color;
  font-family: 'Roboto', sans-serif;
}
</style>

<template>
  <Window class="sm:p-20 p-5" circle circle-size="150px" :circle-style="2">
    <div class="font-bold text-4xl mb-8 sm:ms-16 text-center">
      Como será a Maratona de Programação?
    </div>
    <div class="text-justify">
      <p>
        O evento será divididos em duas maratonas, no formato da Maratona SBC de Programação.
        A primeira consiste em uma maratona de programação voltada a o <span class="font-bold">público geral</span>;
        a segunda voltada aos <span class="font-bold">calouros da nossa instituição</span>, como introdução à programação competitiva.
      </p>
      <p class="pt-4">
        Ambas terão o mesmo formado com <span class="font-bold">4 horas de duração</span> e
        aproximadamente de <span class="font-bold">10 a 15 problemas</span> para serem realizados durante esse tempo.
        Somente a dificuldade mudará, para se adequar ao nível de conhecimento dos participantes em cada maratona.
      </p>
    </div>
    <div class="font-bold text-3xl sm:mt-20 mt-10 mb-8 sm:ms-16 text-center">
      Inscreva-se
    </div>
    <div class="flex gap-5 justify-center items-center">
      <a :href="links.maratona.geral" target="_blank" @click="trackStreamClick('maratonou-form')">
        <div class="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5">
          Público geral
        </div>
      </a>
      <a :href="links.maratona.calouros" target="_blank" @click="trackStreamClick('maratonou-form')">
        <div class="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5">
          Calouros
        </div>
      </a>
    </div>
    <div class="flex pt-5 sm:pt-10">
      <p class="mx-auto text-justify">
        Deseja saber mais detalhes sobre nossa iniciativa? <a class="underline hover:no-underline hover:text-green-600" :href="links.maratonou">Clique aqui</a> e acesse o Instagram do maratonou!.
      </p>
    </div>
  </Window>
</template>

<script>
import Window from './Window.vue';

export default {
  components: {
    Window,
  },
  props: {
    links: {
      type: Object,
      required: true,
    },
  },
};
</script>

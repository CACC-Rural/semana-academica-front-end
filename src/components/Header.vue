<!-- eslint-disable max-len -->
<template>
  <div class="min-h-[60px] h-[60px] flex items-center justify-between p-4 text-sm">
    <img class="max-h-[50px] h-[50px]" src="../assets/logo.svg">
    <Dropdown class="sm:hidden" :items="itens" />
    <ul
      class="
        hidden sm:flex
        flex-wrap
        items-center
        sm:mt-0
        mt-3
      "
    >
      <li v-for="item in itens" :key="item.name">
        <a target="_blank" :href="item.link" class="hover:underline mr-4 md:mr-6">{{
          item.name
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue';

const itens = [
  {
    name: 'Sobre',
    link: '#',
  },
  {
    name: 'Cronograma',
    link: '#',
  },
  {
    name: 'Contato',
    link: '#',
  },
  {
    name: 'Live',
    link: 'https://www.twitch.tv/computingtogether',
  },
];
export default {
  components: {
    Dropdown,
  },
  setup() {
    return {
      itens,
    };
  },
};
</script>

<style scoped></style>

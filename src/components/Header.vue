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
      <li v-for="item in itens" :key="item.name" @click="trackHeaderClick(item)">
        <a :target="item.target" :href="item.link" class="hover:underline mr-4 md:mr-6">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue';

const itens = [
  {
    id: 1,
    name: 'Inscrição',
    link: '#',
    target: '_self',
  },
  {
    id: 2,
    name: 'Sobre',
    link: '#',
    target: '_self',
  },
  {
    id: 3,
    name: 'Cronograma',
    link: '#cronograma',
    target: '_self',
  },
  {
    id: 4,
    name: 'Live',
    link: 'https://www.twitch.tv/computingtogether',
    target: '_blank',
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
  methods: {
    trackHeaderClick(item) {
      this.$gtag.event('click', {
        event_category: 'header',
        value: item.id,
      });
    },
  },
};
</script>

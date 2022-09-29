<template>
  <div class="min-h-[50px] flex items-center justify-between p-4 text-sm">
    <img class="max-h-[50px]" src="../assets/logo.svg">
    <ul
      class="
        flex flex-wrap
        items-center
        sm:mt-0
        mt-3
        sm:justify-center
        md:justify-start
      "
    >
      <li v-for="item in itens" :key="item.name">
        <a :href="item.link" class="hover:underline mr-4 md:mr-6">{{
          item.name
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
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
  setup() {
    return {
      itens,
    };
  },
};
</script>

<style scoped></style>

<!-- eslint-disable max-len -->
<template>
  <div class="min-h-[60px] h-[60px] flex items-center justify-between p-4 text-sm">
    <img class="max-h-[50px] h-[50px]" src="../assets/logo.svg">
    <Dropdown class="sm:hidden" :items="items" />
    <ul
      class="
        hidden sm:flex
        flex-wrap
        items-center
        sm:mt-0
        mt-3
      "
    >
      <li v-for="item in items" :key="item.name" @click="trackHeaderClick(item)">
        <a :target="item.target" :href="item.link" class="hover:underline mr-4 md:mr-6 hover:font-medium">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { headerItems as items } from '../content';
import Dropdown from './Dropdown.vue';

export default {
  components: {
    Dropdown,
  },
  setup() {
    return {
      items,
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

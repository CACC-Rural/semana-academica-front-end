<template>
  <div class="bg-black/25 shadow-black p-4 md:p-5 rounded-lg flex">
    <ul class="flex flex-wrap items-center text-sm text-gray-100 mx-auto">
      <li v-for="item in items" :key="item.name" @click="trackFooterClick(item)">
        <a class="mr-4 hover:underline md:mr-6 hover:font-bold" target="_blank" :href="item.href">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { footerItems as items } from '../content';

export default {
  setup() {
    return {
      items,
    };
  },
  methods: {
    trackFooterClick(item) {
      this.$gtag.event('click', {
        event_category: 'footer',
        value: item.id,
      });
    },
  },
};
</script>

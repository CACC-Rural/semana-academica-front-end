<template>
  <div class="bg-black/25 py-3 shadow-black">
    <div class="flex flex-row">
      <div v-for="column in columns" :key="column.name" class="first:pl-10 pr-20">
        <span class="font-bold">{{ column.name }}</span>
        <ul v-for="item in column.items" :key="item.name" @click="trackFooterClick(item)">
          <a class="hover:font-bold" target="_blank" :href="item.href">{{ item.name }}</a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    name: 'Nossas Redes',
    items: [
      {
        id: 1,
        name: 'Instagram',
        href: '#',
      },
      {
        id: 2,
        name: 'Linkedin',
        href: '#',
      },
      {
        id: 3,
        name: 'Twitter',
        href: '#',
      },
    ],
  },
];

export default {
  setup() {
    return {
      columns,
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


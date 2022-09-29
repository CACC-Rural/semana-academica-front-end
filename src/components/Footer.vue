<template>
  <div class="bg-black/25 py-3 shadow-black">
    <div class="flex flex-row">
      <div v-for="column in columns" :key="column.name" class="first:pl-10 pr-20">
        <span class="font-bold">{{ column.name }}</span>
        <ul v-for="item in column.items" :key="item.name">
          <a class=" hover:font-bold" :href="item.href">{{ item.name }}</a>
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
        name: 'Instagram',
        href: '#',
      },
      {
        name: 'Linkedin',
        href: '#',
      },
      {
        name: 'Twitter',
        href: '#',
      },
    ],
  },
  {
    name: 'Nossas Redes',
    items: [
      {
        name: 'Instagram',
        href: '#',
      },
      {
        name: 'Linkedin',
        href: '#',
      },
      {
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
};
</script>

<style>

</style>

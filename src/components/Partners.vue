<template>
  <div class="py-10 px-10">
    <h1 class="text-center text-4xl pb-5">
      Patrocinadores
    </h1>
    <div class="flex flex-row flex-wrap justify-center max-w-7xl gap-10 p-10 bg-[#071722]/25">
      <a
        v-for="partner in partners"
        :key="partner.name"
        class="shrink-0"
        target="_blank"
        rel="noopener"
        :href="partner.link"
      >
        <img
          class="md:contrast-0 hover:contrast-100 "
          loading="lazy"
          :alt="partner.name"
          :src="partner.img"
        >
      </a>
    </div>
  </div>
</template>

<script>
const partners = [
  {
    name: 'Netlify',
    img: 'https://viteconf.org/images/logos/netlify.svg',
    link: 'https://www.netlify.com/',
  },
];

const count = 10;
for (let i = 0; i < count; i++) {
  partners.push({
    name: 'Netlify',
    img: 'https://viteconf.org/images/logos/netlify.svg',
    link: 'https://www.netlify.com/',
  });
}

export default {
  setup() {
    return {
      partners,
    };
  },
};
</script>

<style scoped></style>

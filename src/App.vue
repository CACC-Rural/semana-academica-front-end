<template>
  <div>
    <video
      class="fixed max-w-none top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[-100]"
      preload="true" autoplay loop muted
    >
      <source src="/background.webm" type="video/webm">
    </video>
    <div class="flex min-w-320 max-w-1280 min-h-screen place-items-center">
      <div class="m-auto text-center">
        <h1 id="title" class="text-[3.2em] my-6 leading-tight text-white font-bold">
          Computing Together 2022
        </h1>
        <vue-countdown id="countdown" v-slot="{ days, hours, minutes, seconds }" :time="time">
          Tempo restante:
          {{ Math.floor(days / 30) }} meses, {{ days % 30 }} dias, {{ hours }} horas, {{ minutes }} minutos, {{ seconds }} segundos
        </vue-countdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const now = new Date();
    const semAcad = new Date(2022, 9, 17);

    return {
      time: semAcad - now,
    };
  },
};
</script>

<style scoped>
#title {
  -webkit-text-stroke: 1px #000;
}

#countdown {
  color: black;
}

::selection {
  color: #7fed98;
  background-color: #56a066;
}
</style>

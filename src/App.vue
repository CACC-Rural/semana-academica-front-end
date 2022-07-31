<template>
  <h1 id="title">
    Computing Together 2022
  </h1>
  <vue-countdown id="countdown" v-slot="{ days, hours, minutes, seconds }" :time="time">
    Tempo restante:
    {{ Math.floor(days / 30) }} meses, {{ days % 30 }} dias, {{ hours }} horas, {{ minutes }} minutos, {{ seconds }} segundos
  </vue-countdown>
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

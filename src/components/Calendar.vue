<template>
  <Window class="px-4 py-4">
    <h1 class="font-bold text-2xl">
      Agenda
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div v-for="item in items" :key="item.weekday" class="grid grid-cols-3 grid-rows-1 gap-0 bg-white text-black rounded-md m-1">
        <div class="m-auto">
          <div class="grid grid-cols-1 grid-rows-2 text-center w-10" :class="{'!grid-rows-3': isToday(item.date)}">
            <div class="font-bold text-lg">
              {{ getWeekday(item.date) }}
            </div>
            <div>{{ item.date.getDate() }}/{{ item.date.getMonth() + 1 }}</div>
            <div v-if="isToday(item.date)" class="bg-black text-white rounded-md text-center">
              Hoje
            </div>
          </div>
        </div>
        <div class="col-span-2 px-4 py-2 w-60">
          <ul>
            <li v-for="(event, index) in item.events" :key="event.name" class="cursor-pointer pb-1 pt-1">
              <div class="border-b-[1px] border-gray-300" :class="{'!border-0': index === item.events.length - 1}">
                <span class="font-bold">{{ event.name }}</span>
                <br>
                <span class="text-gray-600">{{ event.starts }} - {{ event.ends }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Window>
</template>

<script>
import Window from './Window.vue';

export default {
  components: {
    Window,
  },
  setup() {
    const items = [
      {
        date: '10/01/2022',
        events: [
          {
            name: 'Entrevista',
            starts: '09:30',
            ends: '10:30',
          },
          {
            name: 'Apresentação',
            starts: '14:00',
            ends: '15:30',
          },
        ],
      },
      {
        date: '10/02/2022',
        events: [
          {
            name: 'Entrevista',
            starts: '09:30',
            ends: '10:30',
          },
          {
            name: 'Apresentação',
            starts: '14:00',
            ends: '15:30',
          },
          {
            name: 'Apresentação',
            starts: '15:30',
            ends: '16:30',
          },
        ],
      },
      {
        date: '10/03/2022',
        events: [
          {
            name: 'Entrevista',
            starts: '09:30',
            ends: '10:30',
          },
          {
            name: 'Apresentação',
            starts: '14:00',
            ends: '15:30',
          },
        ],
      },
      {
        date: '10/04/2022',
        events: [
          {
            name: 'Entrevista',
            starts: '09:30',
            ends: '10:30',
          },
          {
            name: 'Apresentação',
            starts: '14:00',
            ends: '15:30',
          },
          {
            name: 'Apresentação',
            starts: '15:30',
            ends: '16:30',
          },
        ],
      },
    ];

    items.forEach(item => {
      // eslint-disable-next-line no-param-reassign
      item.date = new Date(item.date);
    });
    return {
      items,
      today: new Date(),
      weekDays: {
        0: 'Domingo',
        1: 'Segunda',
        2: 'Terça',
        3: 'Quarta',
        4: 'Quinta',
        5: 'Sexta',
        6: 'Sábado',
      },
    };
  },
  methods: {
    getWeekday(date) {
      return this.weekDays[date.getDay()].substring(0, 3);
    },
    getDay(date) {
      return date.getDate();
    },
    isToday(date) {
      return date.toDateString() === this.today.toDateString();
    },
  },
};
</script>

<style>

</style>

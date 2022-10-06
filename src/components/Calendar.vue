<!-- eslint-disable max-len -->
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
            <li v-for="(event, index) in item.events" :key="event.name" class="cursor-pointer pb-1 pt-1" @click="openModal(event)">
              <div class="border-b-[1px] border-gray-300 hover:bg-gray-100 duration-200" :class="{'border-none': index === item.events.length - 1}">
                <span class="font-bold">{{ event.name }}</span>
                <br>
                <span class="text-gray-600">{{ event.starts }} - {{ event.ends }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <TransitionRoot appear :show="showDetails" as="template">
      <Dialog as="div" class="relative z-10" @close="closeModal">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel>
                <Window class="sm:p-20 p-5 pt-20 w-full max-w-2xl">
                  <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img class="mx-auto h-32 w-32 rounded-full bg-black" :src="currentEvent.speakerImg">
                  </div>
                  <div class="font-bold text-4xl mb-8 sm:ms-16 text-center">
                    {{ currentEvent.name }}
                  </div>
                  <div class="text-justify">
                    {{ currentEvent.description }}
                  </div>
                  <div class="pt-6">
                    <img class="mx-auto" :src="currentEvent.companyImg">
                  </div>
                </Window>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </Window>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from '@headlessui/vue';
import Window from './Window.vue';

export default {
  components: {
    Window,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
  },
  setup() {
    const lorem = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `;
    const companyImg = 'https://viteconf.org/images/logos/netlify.svg';
    const items = [
      {
        date: '10/01/2022',
        events: [
          {
            name: 'Entrevista',
            starts: '09:30',
            ends: '10:30',
            speaker: 'Fulano de Tal',
            speakerImg: companyImg,
            description: lorem,
            companyImg,
          },
          {
            name: 'Apresentação',
            starts: '14:00',
            ends: '15:30',
            speaker: 'Fulano de Tal',
            speakerImg: companyImg,
            description: lorem,
            companyImg,
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
            speaker: 'Fulano de Tal',
            speakerImg: companyImg,
            description: lorem,
            companyImg,
          },
          {
            name: 'Apresentação',
            starts: '14:00',
            ends: '15:30',
            speaker: 'Fulano de Tal',
            speakerImg: companyImg,
            description: lorem,
            companyImg,
          },
          {
            name: 'Apresentação',
            starts: '15:30',
            ends: '16:30',
            speaker: 'Fulano de Tal',
            speakerImg: companyImg,
            description: lorem,
            companyImg,
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
            speaker: 'Fulano de Tal',
            speakerImg: companyImg,
            description: lorem,
            companyImg,
          },
          {
            name: 'Apresentação',
            starts: '14:00',
            ends: '15:30',
            speaker: 'Fulano de Tal',
            speakerImg: companyImg,
            description: lorem,
            companyImg,
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
            speaker: 'Fulano de Tal',
            speakerImg: companyImg,
            description: lorem,
            companyImg,
          },
          {
            name: 'Apresentação',
            starts: '14:00',
            ends: '15:30',
            speaker: 'Fulano de Tal',
            speakerImg: companyImg,
            description: lorem,
            companyImg,
          },
          {
            name: 'Apresentação',
            starts: '15:30',
            ends: '16:30',
            speaker: 'Fulano de Tal',
            speakerImg: companyImg,
            description: lorem,
            companyImg,
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
  data() {
    return {
      showDetails: false,
      currentEvent: {},
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
    closeModal() {
      this.showDetails = false;
    },
    openModal(event) {
      this.currentEvent = event;
      this.showDetails = true;
    },
  },
};
</script>

<style>

</style>

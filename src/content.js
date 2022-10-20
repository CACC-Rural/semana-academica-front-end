const footerItems = [
  {
    id: 1,
    name: 'Instagram',
    href: 'https://www.facebook.com/caccimufrrj/',
  },
  {
    id: 2,
    name: 'Linkedin',
    href: 'https://www.linkedin.com/company/caccufrrj/',
  },
  {
    id: 3,
    name: 'Twitter',
    href: 'https://twitter.com/computingtogether',
  },
  {
    id: 4,
    name: 'GitHub',
    href: 'https://github.com/CACC-Rural',
  },
];

const headerItems = [
  {
    id: 1,
    name: 'Inscrição',
    link: '#',
    target: '_self',
  },
  {
    id: 3,
    name: 'Cronograma',
    link: '#cronograma',
    target: '_self',
  },
  {
    id: 4,
    name: 'Maratona',
    link: '#maratona',
    target: '_self',
  },
  {
    id: 5,
    name: 'Live',
    link: '#twitch-player',
    target: '_self',
  },
];

const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;
const companyImgs = {
  netlify: 'https://viteconf.org/images/logos/netlify.svg',
};
const calendarItems = [
  {
    date: '11/07/2022',
    events: [
      {
        id: 1,
        name: 'Entrevista',
        starts: '09:30',
        ends: '10:30',
        speaker: {
          name: 'Fulano de Tal',
          picture: companyImgs.netlify,
        },
        description: lorem,
        companyImg: companyImgs.netlify,
      },
      {
        id: 2,
        name: 'Apresentação',
        starts: '14:00',
        ends: '15:30',
        speaker: {
          name: 'Fulano de Tal',
          picture: companyImgs.netlify,
        },
        description: lorem,
        companyImg: companyImgs.netlify,
      },
    ],
  },
  {
    date: '11/08/2022',
    events: [
      {
        id: 3,
        name: 'Entrevista',
        starts: '09:30',
        ends: '10:30',
        speaker: {
          name: 'Fulano de Tal',
          picture: companyImgs.netlify,
        },
        description: lorem,
        companyImg: companyImgs.netlify,
      },
      {
        id: 4,
        name: 'Apresentação',
        starts: '14:00',
        ends: '15:30',
        speaker: {
          name: 'Fulano de Tal',
          picture: companyImgs.netlify,
        },
        description: lorem,
        companyImg: companyImgs.netlify,
      },
      {
        id: 5,
        name: 'Apresentação',
        starts: '15:30',
        ends: '16:30',
        speaker: {
          name: 'Fulano de Tal',
          picture: companyImgs.netlify,
        },
        description: lorem,
        companyImg: companyImgs.netlify,
      },
    ],
  },
  {
    date: '11/09/2022',
    events: [
      {
        id: 6,
        name: 'Entrevista',
        starts: '09:30',
        ends: '10:30',
        speaker: {
          name: 'Fulano de Tal',
          picture: companyImgs.netlify,
        },
        description: lorem,
        companyImg: companyImgs.netlify,
      },
      {
        id: 7,
        name: 'Apresentação',
        starts: '14:00',
        ends: '15:30',
        speaker: {
          name: 'Fulano de Tal',
          picture: companyImgs.netlify,
        },
        description: lorem,
        companyImg: companyImgs.netlify,
      },
    ],
  },
  {
    date: '11/10/2022',
    events: [
      {
        id: 8,
        name: 'Entrevista',
        starts: '09:30',
        ends: '10:30',
        speaker: {
          name: 'Fulano de Tal',
          picture: companyImgs.netlify,
        },
        description: lorem,
        companyImg: companyImgs.netlify,
      },
      {
        id: 9,
        name: 'Apresentação',
        starts: '14:00',
        ends: '15:30',
        speaker: {
          name: 'Fulano de Tal',
          picture: companyImgs.netlify,
          github: 'https://github.com/CACC-Rural',
        },
        description: lorem,
        companyImg: companyImgs.netlify,
      },
      {
        id: 10,
        name: 'Apresentação',
        starts: '15:30',
        ends: '16:30',
        speaker: {
          name: 'Fulano de Tal',
          picture: companyImgs.netlify,
          instagram: 'https://www.facebook.com/caccimufrrj/',
        },
        description: lorem,
        companyImg: companyImgs.netlify,
      },
    ],
  },
  {
    date: '11/11/2022',
    events: [
      {
        id: 11,
        name: 'Entrevista',
        starts: '09:30',
        ends: '10:30',
        speaker: {
          name: 'Fulano de Tal',
          picture: companyImgs.netlify,
          instagram: 'https://www.facebook.com/caccimufrrj/',
          github: 'https://github.com/CACC-Rural',
        },
        description: lorem,
        companyImg: companyImgs.netlify,
      },
    ],
  },
  {
    date: '11/12/2022',
    events: [
      {
        id: 11,
        name: 'Entrevista',
        starts: '09:30',
        ends: '10:30',
        speaker: {
          name: 'Fulano de Tal',
          picture: companyImgs.netlify,
          instagram: 'https://www.facebook.com/caccimufrrj/',
          facebook: 'https://www.facebook.com/cienciadacomputacao',
          twitter: 'https://twitter.com/computingtogether',
          linkedin: 'https://www.linkedin.com/company/caccufrrj/',
          github: 'https://github.com/CACC-Rural',
        },
        description: lorem,
        companyImg: companyImgs.netlify,
      },
    ],
  },
];

const partners = [
  {
    name: 'Netlify',
    img: 'https://viteconf.org/images/logos/netlify.svg',
    link: 'https://www.netlify.com/',
  },
];

for (let i = 0; i < 10; i++) {
  partners.push({
    name: 'Netlify',
    img: 'https://viteconf.org/images/logos/netlify.svg',
    link: 'https://www.netlify.com/',
  });
}

export {
  headerItems,
  footerItems,
  calendarItems,
  partners,
};

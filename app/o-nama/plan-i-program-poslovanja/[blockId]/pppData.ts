import { ContentBlocksData, PppLinksData } from '@/app/helpers/types';

const marginLeftSmall = '2vw';
const marginLeftMedium = '4vw';

export const pppLinksData: PppLinksData[] = [
  {
    id: 'septembar-2022',
    label: 'SEPTEMBAR 2022.',
    amount: 'planirani fond: 7,5 EUR',
  },
  {
    id: 'nominacija-projekta',
    label: 'Nominacija projekta',
    amount: '46 EUR',
  },
];

export const contentBlocksData: ContentBlocksData = {
  'septembar-2022': [
    {
      type: 'h2',
      content: 'ADMINISTRATOR',
    },
    {
      type: 'p',
      content: '0h - 0EUR',
      weight: 'bold',
      align: 'center',
    },
    {
      type: 'h4',
      content: '0.4.3.) RAZMATRANJE NACRTA TEHNIČKOG PLANA',
    },
    {
      type: 'p',
      content:
        'Administrator razmatra predloženi nacrt tehničkog plana i odlučuje o njegovim eventualnim izmenama ili dopunama. ',
      paddingLeft: marginLeftSmall,
    },
    {
      type: 'listEvenly',
      owner: 'administrator',
      circleContent: {
        realizator: 'administrator',
        period: '2022/09',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
  ],
};

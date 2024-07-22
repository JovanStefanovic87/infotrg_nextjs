import { ContentBlocksData, MemeberData } from '@/app/helpers/types';

const bolderLine = 4;

const marginLeftSmall = '2vw';
const marginLeftMedium = '4vw';

export const contentData: MemeberData[] = [
  {
    id: 'administrator',
    name: 'Miroslav Ostrogonac',
    birth: '27.04.1975.',
    profession: 'Grafičar',
    affinities: 'administracija, grafički dizajn, leksikografija, izrada dokumenata',
    previousEngagements:
      'kasarna “Vojvoda Živojin Mišić” (četni evidentičar), trgovina “KMS d.o.o.” (magacioner/referent)',
    infotrgEngagements: 'od 01.08.2022. godine',
    phone: '0601451349',
    email: 'suinfotrg@gmail.com',
  },
];
export const contentBlocksData: ContentBlocksData = {
  administrator: [
    {
      type: 'h3',
      content: 'ADMINISTRATIVNA MANIPULACIJA',
    },
    {
      type: 'pNormal',
      content: '	Administrativna kategorizacija',
      paddingLeft: marginLeftMedium,
    },
  ],
};

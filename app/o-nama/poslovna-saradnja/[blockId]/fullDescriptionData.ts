import { PoslovnaSaradnjaData, FullDescriptionDataLinksData } from '@/app/helpers/types';

const marginLeftSmall = '2vw';
const marginLeftMedium = '4vw';

export const fullDescriptionDataLinksData: FullDescriptionDataLinksData[] = [
  {
    id: 'priprema-tehnickog-plana',
    label: 'Priprema tehničkog plana',
  },
  {
    id: 'osnivanje-upravnog-tima',
    label: 'Osnivanje upravnog tima',
  },
  {
    id: 'priprema-plana-i-programa',
    label: 'Priprema Plana i programa',
  },
  {
    id: 'osnivanje-investicionog-fonda',
    label: 'Osnivanje investicionog fonda',
  },
  {
    id: 'izrada-i-pokretanje-platforme',
    label: 'Izrada i pokretanje platforme',
  },
  {
    id: 'odrzavanje-platforme',
    label: 'Održavanje platforme',
  },
  {
    id: 'prihodovanje-od-objavljivanja-reklama',
    label: 'Prihodovanje od objavljivanja reklama',
  },
  {
    id: 'prihodovanje-od-izrade-reklama',
    label: 'Prihodovanje od izrade reklama',
  },
  {
    id: 'prihodovanje-od-usluznog-upravljanja-veb-izlozima',
    label: 'Prihodovanje od uslužnog upravljanja veb izlozima',
  },
  {
    id: 'prihodovanje-od-affiliate-posrednistva',
    label: 'Prihodovanje od affiliate posredništva',
  },
  {
    id: 'prihodovanje-od-strater-posrednistva',
    label: 'Prihodovanje od strater posredništva',
  },
  {
    id: 'prihodovanje-od-aukcija',
    label: 'Prihodovanje od aukcija',
  },
  {
    id: 'prihodovanje-od-dostave',
    label: 'Prihodovanje od dostave',
  },
  {
    id: 'prihodovanje-na-osnovu-odlozenog-placanja',
    label: 'Prihodovanje na osnovu odloženog plaćanja',
  },
  {
    id: 'raspodela-prihoda',
    label: 'Raspodela prihoda',
  },
  {
    id: 'regulisanje-stalnih-troskova',
    label: 'Regulisanje stalnih troškova',
  },
  {
    id: 'regulisanje-vanrednih-troskova',
    label: 'Regulisanje vanrednih troškova',
  },
  {
    id: 'regulisanje-iznenadnih-troskova',
    label: 'Regulisanje iznenadnih troškova',
  },
  {
    id: 'izmene-projektne-dokumentacije',
    label: 'Izmene projektne dokumentacije',
  },
  {
    id: 'izvestavanje-o-postignutim-rezultatima',
    label: 'Izveštavanje o postignutim rezultatima',
  },
  {
    id: 'kadrovske-izmene',
    label: 'Kadrovske izmene',
  },
  {
    id: 'organizacija-zamenika',
    label: 'Organizacija zamenika',
  },
];

export const contentBlocksData: PoslovnaSaradnjaData = {
  'priprema-tehnickog-plana': [
    {
      description:
        'U samom početku, autor projekta priprema Tehnički plan za izradu veb platforme.',
      coverImage: '/images/poslovna-saradnja/ps11.jpg',
    },
    {
      description: 'Tehnički plan sadrži detaljan opis svih funkcija platforme.',
      coverImage: '/images/poslovna-saradnja/ps12.jpg',
    },
  ],
  'osnivanje-upravnog-tima': [
    {
      description:
        'Autor projekta okuplja članove upravnog tima zaduženog za upravljanje projektom.',
      coverImage: '/images/poslovna-saradnja/ps13.jpg',
    },
    {
      description:
        'Članovi upravnog tima razmatraju, vrše eventualne korekcije i odobravaju Tehnički plan.',
      coverImage: '/images/poslovna-saradnja/ps14.jpg',
    },
    {
      description: 'Koordinator projekta priprema Ugovor o saradnji.',
      coverImage: '/images/poslovna-saradnja/ps15.jpg',
    },
    {
      description:
        'Ugovorom o saradnji se definišu prava i obaveze svih petoro članova upravnog tima: koordinatora, administratora, vebmastera, marketing menadžera i PR menadžera.',
      coverImage: '/images/poslovna-saradnja/ps16.jpg',
    },
    {
      description: 'Autor projekta i članovi upravnog tima potpisuju Ugovor o saradnji.',
      coverImage: '/images/poslovna-saradnja/ps17.jpg',
    },
    {
      description:
        'Svaki član upravnog tima, uz odobrenje ostalih članova, angažuje određeni broj potrebnih asistenata.',
      coverImage: '/images/poslovna-saradnja/ps18.jpg',
    },
    {
      description:
        'Članovi upravnog tima sa odabranim asistentima potpisuju zasebne ugovore u kojima određuju sopstvena pravila saradnje unutar njihovih sektora delovanja.',
      coverImage: '/images/poslovna-saradnja/ps19.jpg',
    },
  ],
  'priprema-plana-i-programa': [
    {
      description:
        'Na bazi Tehničkog plana, autor priprema Plan i program za razvoj poslovne strategije projekta, u kojem se definišu radni ciljevi i poslovni potezi koje vode do ostvarenja istih.',
      coverImage: '/images/poslovna-saradnja/ps20.jpg',
    },
    {
      description:
        'Plan i program poslovanja obuhvata predviđanja tehničke ekspanzije projekta, odnosno faze povećanja tehničkih kapaciteta platforme u određenim etapama razvoja projekta.',
      coverImage: '/images/poslovna-saradnja/ps21.jpg',
    },
    {
      description:
        'Plan i program poslovanja obuhvata predviđanja prostorne ekspanzije projekta, odnosno zone proširenja poslovnog delovanja, koje se kreću od lokalne, preko međugradske, pa sve do mogućnosti globalne pokrivenosti.',
      coverImage: '/images/poslovna-saradnja/ps22.jpg',
    },
    {
      description:
        'Nakon izrade, članovi upravnog tima razmatraju, vrše eventualne korekcije i odobravaju Plan i program poslovanja.',
      coverImage: '/images/poslovna-saradnja/ps23.jpg',
    },
  ],
};

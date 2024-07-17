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
    id: 'septembar-2022',
    label: 'SEPTEMBAR 2022.',
    amount: 'planirani fond: 7,5 EUR',
  },
  {
    id: 'oktobar-2022-avgust-2023',
    label: 'Oktobar 2022. - avgust 2023.',
    amount: 'planirani fond: 1.456,5 EUR',
  },
  {
    id: 'septembar-2023',
    label: 'Septembar 2023.',
    amount: 'planirani fond: 200 EUR',
  },
  {
    id: 'oktobar-2023',
    label: 'Oktobar 2023.',
    amount: 'planirani fond: 116,5 EUR',
  },
  {
    id: 'januar-2024',
    label: 'Januar 2024.',
    amount: 'planirani fond: 57 EUR',
  },
  {
    id: 'februar-2024',
    label: 'Februar 2024.',
    amount: 'planirani fond: 200 EUR',
  },
  {
    id: 'mart-2024',
    label: 'Mart 2024.',
    amount: 'planirani fond: 200 EUR',
  },
  {
    id: 'maj-2024',
    label: 'Maj 2024.',
    amount: 'planirani fond: 95 EUR',
  },
  {
    id: 'jun-2024',
    label: 'Jun 2024.',
    amount: 'planirani fond: 1.806 EUR',
  },
];
export const contentBlocksData: ContentBlocksData = {
  'septembar-2022': [
    {
      type: 'h2',
      content: 'ADMINISTRATOR',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(0 h - 0 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.3.) RAZMATRANJE NACRTA TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'Administrator razmatra predloženi nacrt tehničkog plana i odlučuje o njegovim eventualnim izmenama ili dopunama. ',
      paddingLeft: marginLeftMedium,
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
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'AUTOR',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(0 h - 7,5 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'gayMedium',
    },
    {
      type: 'h4',
      content: '0.1.1.)  GRAFIČKA PRIPREMA NACRTA TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'Autor izrađuje nacrt tehničkog plana projekta čija centralna tema je veb platforma namenjena oglašavanju proizvoda. U tehničkom planu je predstavljeno funkcionisanje platforme i njen dizajn.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2022/09',
        optimum: '1 plan',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.1.2.) ŠTAMPANJE NACRTA TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'Autor priprema nacrt tehničkog plana u štampanoj formi, pogodan za pokazivanje i deljenje potencijalnim saradnicima.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2022/09',
        optimum: '5 nacrta',
        angažman: '0 h',
        fond: '7,5 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.2.1.) ZAŠTITA AUTORSKIH PRAVA',
    },
    {
      type: 'pNormal',
      content: 'Autor određuje ima projekta i na isti vrši zaštitu autorskih prava.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2022/09',
        optimum: '1 projekat',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.3.1.) OKUPLJANJE SARADNIKA',
    },
    {
      type: 'pNormal',
      content:
        'Autor okuplja oko sebe petoricu saradnika kojima poverava realizaciju tehničkog plana: koordinatora projekta, vebmastera, administratora, marketing menadžera i PR menadžera. ',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2022/09',
        optimum: '1 sastanak',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'KOORDINATOR',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(0 h - 0 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.1.) RAZMATRANJE NACRTA TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'Koordinator razmatra predloženi nacrt tehničkog plana i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2022/09',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'MARKETING MENADŽER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(0 h - 0 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.4.) RAZMATRANJE NACRTA TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'Marketing menadžer razmatra predloženi nacrt tehničkog plana i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'marketing-manager',
      circleContent: {
        realizator: 'marketing menadžer',
        period: '2022/09',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'PR MENADŽER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(0 h - 0 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.5.) RAZMATRANJE NACRTA TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'PR menadžer razmatra predloženi nacrt tehničkog plana i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'pr',
      circleContent: {
        realizator: 'pr menadžer',
        period: '2022/09',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(0 h - 0 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.2.) RAZMATRANJE NACRTA TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'Vebmaster razmatra predloženi nacrt tehničkog plana i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2022/09',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'hr',
    },
  ],
  'oktobar-2022-avgust-2023': [
    {
      type: 'h2',
      content: 'OKTOBAR 2022.',
      color: 'black',
    },
    {
      type: 'h2',
      content: 'planirani fond: 115,5 EUR',
      color: 'black',
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(11,5 h - 115,5 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.8.) IZRADA PROBNE PLATFORME (1/10)',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu nacrta tehničkog plana, vebmaster izrađuje probnu verziju platforme koja je pogodna za pregled na mobilnim telefonima. Na probnoj platformi je prikazan dizajn njenih stranica, sve njene funkcije i relacije između stranica, kao i drugi elementi neophodni da bi se moglo sprovesti testiranje.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2022/10',
        optimum: '1,5 relacija',
        angažman: '11,5 h',
        fond: '115,5 EUR',
      },
    },
    {
      type: 'hr',
      height: 4,
    },
    {
      type: 'h2',
      content: 'NOVEMBAR 2022.',
      color: 'black',
    },
    {
      type: 'h2',
      content: 'planirani fond: 115,5 EUR',
      color: 'black',
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(11,5 h - 115,5 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.8.) IZRADA PROBNE PLATFORME (2/10)',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu nacrta tehničkog plana, vebmaster izrađuje probnu verziju platforme koja je pogodna za pregled na mobilnim telefonima. Na probnoj platformi je prikazan dizajn njenih stranica, sve njene funkcije i relacije između stranica, kao i drugi elementi neophodni da bi se moglo sprovesti testiranje.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2022/11',
        optimum: '1,5 relacija',
        angažman: '11,5 h',
        fond: '115,5 EUR',
      },
    },
    {
      type: 'hr',
      height: 4,
    },
    {
      type: 'h2',
      content: 'DECEMBAR 2022.',
      color: 'black',
    },
    {
      type: 'h2',
      content: 'planirani fond: 115,5 EUR',
      color: 'black',
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(11,5 h - 115,5 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.8.) IZRADA PROBNE PLATFORME (3/10)',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu nacrta tehničkog plana, vebmaster izrađuje probnu verziju platforme koja je pogodna za pregled na mobilnim telefonima. Na probnoj platformi je prikazan dizajn njenih stranica, sve njene funkcije i relacije između stranica, kao i drugi elementi neophodni da bi se moglo sprovesti testiranje.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2022/12',
        optimum: '1,5 relacija',
        angažman: '11,5 h',
        fond: '115,5 EUR',
      },
    },
    {
      type: 'hr',
      height: 4,
    },
    {
      type: 'h2',
      content: 'JANUAR 2023.',
      color: 'black',
    },
    {
      type: 'h2',
      content: 'planirani fond: 115,5 EUR',
      color: 'black',
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(11,5 h - 115,5 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.8.) IZRADA PROBNE PLATFORME (4/10)',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu nacrta tehničkog plana, vebmaster izrađuje probnu verziju platforme koja je pogodna za pregled na mobilnim telefonima. Na probnoj platformi je prikazan dizajn njenih stranica, sve njene funkcije i relacije između stranica, kao i drugi elementi neophodni da bi se moglo sprovesti testiranje.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2023/01',
        optimum: '1,5 relacija',
        angažman: '11,5 h',
        fond: '115,5 EUR',
      },
    },
    {
      type: 'hr',
      height: 4,
    },
    {
      type: 'h2',
      content: 'FEBRUAR 2023.',
      color: 'black',
    },
    {
      type: 'h2',
      content: 'planirani fond: 286,5 EUR',
      color: 'black',
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'MARKETING MENADŽER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(0 h - 171 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.3.2.) NABAVKA RAČUNARA',
    },
    {
      type: 'pNormal',
      content:
        'Marketing menadžer obezbeđuje računar za potrebe svog rada, putem sredstava iz investicionog fonda.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'marketing-manager',
      circleContent: {
        realizator: 'marketing menadžer',
        period: '2023/02',
        optimum: '1 računar',
        angažman: '0 h',
        fond: '171 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(11,5 h - 115,5 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.8.) IZRADA PROBNE PLATFORME (5/10)',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu nacrta tehničkog plana, vebmaster izrađuje probnu verziju platforme koja je pogodna za pregled na mobilnim telefonima. Na probnoj platformi je prikazan dizajn njenih stranica, sve njene funkcije i relacije između stranica, kao i drugi elementi neophodni da bi se moglo sprovesti testiranje.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2023/02',
        optimum: '1,5 relacija',
        angažman: '11,5 h',
        fond: '115,5 EUR',
      },
    },
    {
      type: 'hr',
      height: 4,
    },
    {
      type: 'h2',
      content: 'MART 2023.',
      color: 'black',
    },
    {
      type: 'h2',
      content: 'planirani fond: 115,5 EUR',
      color: 'black',
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(11,5 h - 115,5 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.8.) IZRADA PROBNE PLATFORME (6/10)',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu nacrta tehničkog plana, vebmaster izrađuje probnu verziju platforme koja je pogodna za pregled na mobilnim telefonima. Na probnoj platformi je prikazan dizajn njenih stranica, sve njene funkcije i relacije između stranica, kao i drugi elementi neophodni da bi se moglo sprovesti testiranje.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2023/03',
        optimum: '1,5 relacija',
        angažman: '11,5 h',
        fond: '115,5 EUR',
      },
    },
    {
      type: 'hr',
      height: 4,
    },
    {
      type: 'h2',
      content: 'APRIL 2023.',
      color: 'black',
    },
    {
      type: 'h2',
      content: 'planirani fond: 115,5 EUR',
      color: 'black',
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(11,5 h - 115,5 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.8.) IZRADA PROBNE PLATFORME (7/10)',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu nacrta tehničkog plana, vebmaster izrađuje probnu verziju platforme koja je pogodna za pregled na mobilnim telefonima. Na probnoj platformi je prikazan dizajn njenih stranica, sve njene funkcije i relacije između stranica, kao i drugi elementi neophodni da bi se moglo sprovesti testiranje.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2023/04',
        optimum: '1,5 relacija',
        angažman: '11,5 h',
        fond: '115,5 EUR',
      },
    },
    {
      type: 'hr',
      height: 4,
    },

    {
      type: 'h2',
      content: 'MAJ 2023.',
      color: 'black',
    },
    {
      type: 'h2',
      content: 'planirani fond: 130,5 EUR',
      color: 'black',
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'AUTOR',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(0 h - 15 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.2.3.) OBNOVA INTERNET DOMENA (1/3)',
    },
    {
      type: 'pNormal',
      content: 'Autor vrši godišnju obnovu internet domena sredstvima iz investicionog fonda.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2023/05',
        optimum: '1 domen',
        angažman: '0 h',
        fond: '15 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'APRIL 2023.',
      color: 'black',
    },
    {
      type: 'h2',
      content: 'planirani fond: 115,5 EUR',
      color: 'black',
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(11,5 h - 115,5 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.8.) IZRADA PROBNE PLATFORME (8/10)',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu nacrta tehničkog plana, vebmaster izrađuje probnu verziju platforme koja je pogodna za pregled na mobilnim telefonima. Na probnoj platformi je prikazan dizajn njenih stranica, sve njene funkcije i relacije između stranica, kao i drugi elementi neophodni da bi se moglo sprovesti testiranje.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2023/05',
        optimum: '1,5 relacija',
        angažman: '11,5 h',
        fond: '115,5 EUR',
      },
    },
    {
      type: 'hr',
      height: 4,
    },
    {
      type: 'h2',
      content: 'JUN 2023.',
      color: 'black',
    },
    {
      type: 'h2',
      content: 'planirani fond: 115,5 EUR',
      color: 'black',
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(11,5 h - 115,5 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.8.) IZRADA PROBNE PLATFORME (9/10)',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu nacrta tehničkog plana, vebmaster izrađuje probnu verziju platforme koja je pogodna za pregled na mobilnim telefonima. Na probnoj platformi je prikazan dizajn njenih stranica, sve njene funkcije i relacije između stranica, kao i drugi elementi neophodni da bi se moglo sprovesti testiranje.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2023/06',
        optimum: '1,5 relacija',
        angažman: '11,5 h',
        fond: '115,5 EUR',
      },
    },
    {
      type: 'hr',
      height: 4,
    },
    {
      type: 'h2',
      content: 'JUL 2023.',
      color: 'black',
    },
    {
      type: 'h2',
      content: 'planirani fond: 115,5 EUR',
      color: 'black',
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(11,5 h - 115,5 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.8.) IZRADA PROBNE PLATFORME (10/10)',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu nacrta tehničkog plana, vebmaster izrađuje probnu verziju platforme koja je pogodna za pregled na mobilnim telefonima. Na probnoj platformi je prikazan dizajn njenih stranica, sve njene funkcije i relacije između stranica, kao i drugi elementi neophodni da bi se moglo sprovesti testiranje.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2023/07',
        optimum: '1,5 relacija',
        angažman: '11,5 h',
        fond: '115,5 EUR',
      },
    },
    {
      type: 'hr',
      height: 4,
    },
    {
      type: 'h2',
      content: 'AVGUST 2023.',
      color: 'black',
    },
    {
      type: 'h2',
      content: 'planirani fond: 0 EUR',
      color: 'black',
    },
    {
      type: 'hr',
      height: 4,
    },
  ],
  'septembar-2023': [
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(20,5 h - 200 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.12.) ANKETA TEHNIČKOG PLANA (1/2)',
    },
    {
      type: 'pNormal',
      content:
        'Vebmaster u više navrata sprovodi testiranje tehničkog plana tako što obavlja anketu sa nasumičnim ispitanicima, pokazujući im probnu platformu na osnovu čega se procenjuje kako se ispitanici snalaze u upotrebi platforme i kako ocenjuju njenu svrhu, funkcionalnost i dizajn, a rezultati ankete se upisuju u anketni formular.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2023/09',
        optimum: '5 ispitanika',
        angažman: '8,5 h',
        fond: '83,5 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.4.14.) DORADA PROBNE PLATFORME (1/2)',
    },
    {
      type: 'pNormal',
      content:
        'Ukoliko rezultati ankete nisu zadovoljavajući, vebmaster u saradnji sa autorom vrši određene izmene u samoj strukturi funkcionisanja ili dizajna platforme, pripremajući je za ponovnu anketu, sve dok rezultati ne budu zadovoljavajući.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2023/09',
        optimum: '7,5 relacija',
        angažman: '12 h',
        fond: '116,5 EUR',
      },
    },
    {
      type: 'hr',
    },
  ],
  'oktobar-2023': [
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(20,5 h - 116,5 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.14.) DORADA PROBNE PLATFORME (2/2)',
    },
    {
      type: 'pNormal',
      content:
        'Ukoliko rezultati ankete nisu zadovoljavajući, vebmaster u saradnji sa autorom vrši određene izmene u samoj strukturi funkcionisanja ili dizajna platforme, pripremajući je za ponovnu anketu, sve dok rezultati ne budu zadovoljavajući.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2023/10',
        optimum: '7,5 relacija',
        angažman: '12 h',
        fond: '116,5 EUR',
      },
    },
    {
      type: 'hr',
    },
  ],
  'januar-2024': [
    {
      type: 'h2',
      content: 'ADMINISTRATOR',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(10 h - 57 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.9.) IZRADA I ŠTAMPANJE ANKETNOG FORMULARA',
    },
    {
      type: 'pNormal',
      content:
        'Administrator grafički priprema i štampa formular u koji će se upisivati rezultati prilikom testiranja platforme.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'administrator',
      circleContent: {
        realizator: 'administrator',
        period: '2024/01',
        optimum: '4 formulara',
        angažman: '10 h',
        fond: '57 EUR',
      },
    },
    {
      type: 'hr',
    },
  ],
  'februar-2024': [
    {
      type: 'h2',
      content: 'GRAFIČKI DIZAJNER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(8,5 h - 50 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.13.) ANKETA TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'Grafički dizajner sprovodi testiranje tehničkog plana tako što obavlja anketu sa nasumičnim ispitanicima, pokazujući im probnu platformu na osnovu čega se procenjuje kako se ispitanici snalaze u upotrebi platforme i kako ocenjuju njenu svrhu, funkcionalnost i dizajn, a rezultati ankete se upisuju u anketni formular.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'graphic-designer',
      circleContent: {
        realizator: 'grafički dizajner',
        period: '2024/02',
        optimum: '5 ispitanika',
        angažman: '8,5 h',
        fond: '50 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'MARKETING MENADŽER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(8,5 h - 50 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.11.) ANKETA TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'Marketing menadžer sprovodi testiranje tehničkog plana tako što obavlja anketu sa nasumičnim ispitanicima, pokazujući im probnu platformu na osnovu čega se procenjuje kako se ispitanici snalaze u upotrebi platforme i kako ocenjuju njenu svrhu, funkcionalnost i dizajn, a rezultati ankete se upisuju u anketni formular.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'marketing-manager',
      circleContent: {
        realizator: 'marketing dizajner',
        period: '2024/02',
        optimum: '5 ispitanika',
        angažman: '8,5 h',
        fond: '50 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'PR MENADŽER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(8,5 h - 50 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.10.) ANKETA TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'PR menadžer sprovodi testiranje tehničkog plana tako što obavlja anketu sa nasumičnim ispitanicima, pokazujući im probnu platformu na osnovu čega se procenjuje kako se ispitanici snalaze u upotrebi platforme i kako ocenjuju njenu svrhu, funkcionalnost i dizajn, a rezultati ankete se upisuju u anketni formular.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'pr',
      circleContent: {
        realizator: 'pr dizajner',
        period: '2024/02',
        optimum: '5 ispitanika',
        angažman: '8,5 h',
        fond: '50 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(17 h - 50 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.12.) ANKETA TEHNIČKOG PLANA (2/2)',
    },
    {
      type: 'pNormal',
      content:
        'Vebmaster u više navrata sprovodi testiranje tehničkog plana tako što obavlja anketu sa nasumičnim ispitanicima, pokazujući im probnu platformu na osnovu čega se procenjuje kako se ispitanici snalaze u upotrebi platforme i kako ocenjuju njenu svrhu, funkcionalnost i dizajn, a rezultati ankete se upisuju u anketni formular.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'pr dizajner',
        period: '2024/02',
        optimum: '5 ispitanika',
        angažman: '17 h',
        fond: '50 EUR',
      },
    },
    {
      type: 'hr',
    },
  ],
  'mart-2024': [
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(30 h - 300 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.7.) DORADA NACRTA TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'Shodno studiji tehničke izvodljivosti, vebmaster vrši doradu ili dopunu nacrta tehničkog plana.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'pr dizajner',
        period: '2024/03',
        optimum: '1 nacrt',
        angažman: '30 h',
        fond: '300 EUR',
      },
    },
    {
      type: 'hr',
    },
  ],
  'maj-2024': [
    {
      type: 'h2',
      content: 'AUTOR',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(0 h - 15 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.2.3.) OBNOVA INTERNET DOMENA (2/3)',
    },
    {
      type: 'pNormal',
      content:
        'Shodno studiji tehničke izvodljivosti, vebmaster vrši doradu ili dopunu nacrta tehničkog plana.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2024/05',
        optimum: '1 domen',
        angažman: '0 h',
        fond: '15 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(8 h - 80 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.6.) STUDIJA TEHNIČKE IZVODLJIVOSTI',
    },
    {
      type: 'pNormal',
      content:
        'Vebmaster sprovodi studiju tehničke izvodljivosti na osnovu nacrta tehničkog plana i idejnih rešenja autora, testirajući opcije i mogućnosti tehničke realizacije.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2024/05',
        optimum: '1 test',
        angažman: '8 h',
        fond: '80 EUR',
      },
    },
    {
      type: 'hr',
    },
  ],
  'jun-2024': [
    {
      type: 'h2',
      content: 'ADMINISTRATOR',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(6 h - 30 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.20.) POTPISIVANJE TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content: 'Administrator potpisuje odštampani Tehnički plan.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'administrator',
      circleContent: {
        realizator: 'administrator',
        period: '2024/06',
        optimum: '1 primerak',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.4.) PRIPREMA PLANA RADA',
    },
    {
      type: 'pNormal',
      content:
        'Administrator podnosi izveštaj u kojem procenjuje sve svoje planirane aktivnosti oko projekta, predviđa svoj angažman i utrošeno vreme.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'administrator',
      circleContent: {
        realizator: 'administrator',
        period: '2024/06',
        optimum: '6 stranica',
        angažman: '6 h',
        fond: '30 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.11.) RAZMATRANJE NACRTA PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content:
        'Administrator razmatra predloženi nacrt plana i programa poslovanja i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'administrator',
      circleContent: {
        realizator: 'administrator',
        period: '2024/06',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.18.) POTPISIVANJE PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content: 'Administrator potpisuje Plan i program poslovanja.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'administrator',
      circleContent: {
        realizator: 'administrator',
        period: '2024/06',
        optimum: '1 primerak',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.6.4.) RAZMATRANJE NACRTA UGOVORA O SARADNJI',
    },
    {
      type: 'pNormal',
      content:
        'Administrator razmatra predloženi nacrt ugovora o saradnji i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'administrator',
      circleContent: {
        realizator: 'administrator',
        period: '2024/06',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.6.11.) POTPISIVANJE UGOVORA O SARADNJI',
    },
    {
      type: 'pNormal',
      content: 'Administrator potpisuje Ugovor o saradnji.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'administrator',
      circleContent: {
        realizator: 'administrator',
        period: '2024/06',
        optimum: '4 primerka',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '1.3.3.) POTPISIVANJE UGOVORA O DELU ZA PRVU ETAPU',
    },
    {
      type: 'pNormal',
      content: 'Administrator potpisuje Ugovor o delu sa za prvu etapu.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'administrator',
      circleContent: {
        realizator: 'administrator',
        period: '2024/06',
        optimum: '2 primerka',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'AUTOR',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(96 h - 511 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.15.) IZRADA TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'Ukoliko su rezultati ankete zadovoljavajući, autor pristupa izradi Tehničkog plana kao zvaničnog dokumenta na osnovu kojeg će se izrađivati veb platforma.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2024/06',
        optimum: '7,5 relacija',
        angažman: '45 h',
        fond: '225 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.4.16.) ŠTAMPANJE TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'Pored izrade u elektronskom obliku, autor priprema Tehnički plan i u formi štampanog dokumenta.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2024/06',
        optimum: '60 stranica',
        angažman: '0 h',
        fond: '15,5 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.4.17.) POTPISIVANJE TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content: 'Autor potpisuje odštampani Tehnički plan.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2024/06',
        optimum: '1 primerak',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.1.) PRIPREMA PLANA RADA',
    },
    {
      type: 'pNormal',
      content:
        'Autor podnosi izveštaj u kojem procenjuje sve svoje planirane aktivnosti oko projekta, predviđa svoj angažman i utrošeno vreme.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2024/06',
        optimum: '6 stranica',
        angažman: '6 h',
        fond: '30 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.8.) IZRADA NACRTA PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu dostavljenih planova rada svih članova upravnog tima, autor izrađuje nacrt plana i programa poslovanja u kojem sažeto predstavlja redosled svih poslovnih koraka i vremenske rokove potrebne za njihovu realizaciju.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2024/06',
        optimum: '60 stranica',
        angažman: '30 h',
        fond: '150 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.14.) IZRADA PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu odobrenog nacrta, autor sastavlja sveobuhvatni raspored rada, potom u elektronskom obliku izrađuje Plan i program poslovanja koji, kao zvanični dokument, određuje periode razvoja u realizaciji projekta, vremenske rokove i propisuje sve dalje korake kojih će se pridržavati svi članovi upravnog tima.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2024/06',
        optimum: '60 stranica',
        angažman: '15 h',
        fond: '75 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.15.) ŠTAMPANJE PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content:
        'Nakon izrade u elektronskom obliku, autor priprema Plan i program poslovanja u formi štampanog dokumenta.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2024/06',
        optimum: '60 stranica',
        angažman: '0 h',
        fond: '15,5 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.16.) POTPISIVANJE PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content: 'Autor potpisuje Plan i program poslovanja.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2024/06',
        optimum: '1 primerak',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.6.2.) RAZMATRANJE NACRTA UGOVORA O SARADNJI',
    },
    {
      type: 'pNormal',
      content:
        'Autor razmatra predloženi nacrt ugovora o saradnji i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2024/06',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.6.8.) POTPISIVANJE UGOVORA O SARADNJI',
    },
    {
      type: 'pNormal',
      content: 'Autor potpisuje Ugovor o saradnji.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'autor',
      circleContent: {
        realizator: 'autor',
        period: '2024/06',
        optimum: '4 primerka',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'GRAFIČKI DIZAJNER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(6 h - 30 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.5.7.) PRIPREMA PLANA RADA',
    },
    {
      type: 'pNormal',
      content:
        'Grafički dizajner podnosi izveštaj u kojem procenjuje sve svoje planirane aktivnosti oko projekta, predviđa svoj angažman i utrošeno vreme.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'graphic-designer',
      circleContent: {
        realizator: 'grafički dizajner',
        period: '2024/06',
        optimum: '6 stranica',
        angažman: '6 h',
        fond: '30 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'KOORDINATOR',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(38 h - 299 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.18.) POTPISIVANJE TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content: 'Koordinator potpisuje odštampani Tehnički plan.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '1 primerak',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.2.) PRIPREMA PLANA RADA',
    },
    {
      type: 'pNormal',
      content:
        'Koordinator podnosi izveštaj u kojem procenjuje sve svoje planirane aktivnosti oko projekta, predviđa svoj angažman i utrošeno vreme.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '6 stranica',
        angažman: '6 h',
        fond: '45 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.9.) RAZMATRANJE NACRTA PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content:
        'Koordinator razmatra predloženi nacrt plana i programa poslovanja i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.17.) POTPISIVANJE PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content: 'Koordinator potpisuje Plan i program poslovanja.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '1 primerak',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.22.) IZRADA TABELE ZA BELEŽENJE OSTVARENIH CILJEVA',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu Plana i programa poslovanja, koordinator izrađuje u elektronskom obliku tabelu koja prikazuje sve zadate radne ciljeve i u kojoj se evidentiraju realizovani koraci u razvoju projekta.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '30 stranica',
        angažman: '6 h',
        fond: '45 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.6.1.) IZRADA NACRTA UGOVORA O SARADNJI',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu Plana i programa poslovanja, koordinator izrađuje nacrt ugovora o saradnji u kojem u kratkim crtama opisuje sva prava i obaveze svih lica uključenih u projekat.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '30 stranica',
        angažman: '10 h',
        fond: '75 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.6.7.) IZRADA I ŠTAMPANJE UGOVORA O SARADNJI',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu odobrenog nacrta, koordinator izrađuje i štampa Ugovor o saradnji kao zvanični dokument koji reguliše prava i obaveze svih lica uključenih u projekat.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '30 stranica',
        angažman: '10 h',
        fond: '80 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.6.9.) POTPISIVANJE UGOVORA O SARADNJI',
    },
    {
      type: 'pNormal',
      content: 'Koordinator potpisuje Ugovor o saradnji.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '4 primerka',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.7.1.) PRIPREMA DOKUMENTA ZA EVIDENCIJU INVENTARA',
    },
    {
      type: 'pNormal',
      content:
        'Koordinator priprema elektronski dokument u kojem se vodi popis i evidencija sve opreme potrebne za osposobljavanje i funkcionisanje projekta.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '1 dokument',
        angažman: '2 h',
        fond: '15 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.7.3.) PRIPREMA DOKUMENTA ZA EVIDENCIJU BUDŽETA',
    },
    {
      type: 'pNormal',
      content:
        'Koordinator priprema elektronski dokument u kojem se vodi evidencija svih novčanih transakcija vezanih za projekat i stanje budžeta.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '1 dokument',
        angažman: '2 h',
        fond: '15 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.7.5.) PRIPREMA BUDŽETNE KASE',
    },
    {
      type: 'pNormal',
      content:
        'Koordinator uspostavlja bezbedan sistem odlaganja, čuvanja i upotrebe uloženih novčanih sredstava, i o tome upoznaje samo svog imenovanog zamenika.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '1 budžetna kasa',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.7.6.) IZRADA PRIZNANICA ZA INTERNE NOVČANE TRANSAKCIJE',
    },
    {
      type: 'pNormal',
      content:
        'Koordinator priprema u elektronskom obliku šablon priznanica za sve interne novčane transakcije, prihode i rashode.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '1 šablon',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '1.1.1.) IZRADA I ŠTAMPANJE UGOVORA O DELU ZA PRVU ETAPU',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu Tehničkog plana i Plana i programa poslovanja, koordinator izrađuje i štampa Ugovor o delu u kojem se posebno navode svi njegovi radni zadaci, rokovi i naknade za prvu etapu.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '6 stranica',
        angažman: '1 h',
        fond: '8 EUR',
      },
    },
    {
      type: 'h4',
      content: '1.1.2.) POTPISIVANJE UGOVORA O DELU ZA PRVU ETAPU',
    },
    {
      type: 'pNormal',
      content: 'Koordinator potpisuje Ugovor o delu za prvu etapu.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '2 primerka',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '1.1.19.) PRIPREMA OBRASCA ZA IZVEŠTAVANJE O REZULTATIMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content:
        'Koordinator priprema elektronski obrazac namenjen prezentaciji poslovnih rezultata, pogodan za periodično dostavljanje na uvid svim investitorima.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '1 obrazac',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '1.2.1.) IZRADA I ŠTAMPANJE UGOVORA O DELU SA VEBMASTEROM ZA PRVU ETAPU',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu Tehničkog plana i Plana i programa poslovanja, koordinator izrađuje i štampa Ugovor o delu u kojem se posebno navode svi vebmasterovi radni zadaci, rokovi i naknade za prvu etapu.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '6 stranica',
        angažman: '1 h',
        fond: '8 EUR',
      },
    },
    {
      type: 'h4',
      content: '1.2.2.) POTPISIVANJE UGOVORA O DELU SA VEBMASTEROM ZA PRVU ETAPU',
    },
    {
      type: 'pNormal',
      content: 'Koordinator potpisuje Ugovor o delu sa vebmasterom za prvu etapu.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '2 primerka',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '1.3.1.) IZRADA I ŠTAMPANJE UGOVORA O DELU SA ADMINISTRATOROM ZA PRVU ETAPU',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu Tehničkog plana i Plana i programa poslovanja, koordinator izrađuje i štampa Ugovor o delu u kojem se posebno navode svi administratorovi radni zadaci, rokovi i naknade za prvu etapu.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '6 stranica',
        angažman: '0 h',
        fond: '8 EUR',
      },
    },
    {
      type: 'h4',
      content: '1.3.2.) POTPISIVANJE UGOVORA O DELU SA ADMINISTRATOROM ZA PRVU ETAPU',
    },
    {
      type: 'pNormal',
      content: 'Koordinator potpisuje Ugovor o delu sa administratorom za prvu etapu.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'koordinator',
      circleContent: {
        realizator: 'koordinator',
        period: '2024/06',
        optimum: '2 primerka',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'MARKETING MENADŽER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(6 h - 30 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.21.) POTPISIVANJE TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content:
        'Grafički dizajner sprovodi testiranje tehničkog plana tako što obavlja anketu sa nasumičnim ispitanicima, pokazujući im probnu platformu na osnovu čega se procenjuje kako se ispitanici snalaze u upotrebi platforme i kako ocenjuju njenu svrhu, funkcionalnost i dizajn, a rezultati ankete se upisuju u anketni formular.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'marketing-manager',
      circleContent: {
        realizator: 'marketing menadžer',
        period: '2024/06',
        optimum: '1 primerak',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.5.) PRIPREMA PLANA RADA',
    },
    {
      type: 'pNormal',
      content:
        'Marketing menadžer podnosi izveštaj u kojem procenjuje sve svoje planirane aktivnosti oko projekta, predviđa svoj angažman i utrošeno vreme.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'marketing-manager',
      circleContent: {
        realizator: 'marketing menadžer',
        period: '2024/06',
        optimum: '6 stranica',
        angažman: '6 h',
        fond: '30 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.12.) RAZMATRANJE NACRTA PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content:
        'Marketing menadžer razmatra predloženi nacrt plana i programa poslovanja i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'marketing-manager',
      circleContent: {
        realizator: 'marketing menadžer',
        period: '2024/06',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.19.) POTPISIVANJE PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content: 'Marketing menadžer potpisuje Plan i program poslovanja.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'marketing-manager',
      circleContent: {
        realizator: 'marketing menadžer',
        period: '2024/06',
        optimum: '1 primerak',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.6.5.) RAZMATRANJE NACRTA UGOVORA O SARADNJI',
    },
    {
      type: 'pNormal',
      content:
        'Marketing menadžer razmatra predloženi nacrt ugovora o saradnji i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'marketing-manager',
      circleContent: {
        realizator: 'marketing menadžer',
        period: '2024/06',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.6.12.) POTPISIVANJE UGOVORA O SARADNJI',
    },
    {
      type: 'pNormal',
      content: 'Marketing menadžer potpisuje Ugovor o saradnji.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'marketing-manager',
      circleContent: {
        realizator: 'marketing menadžer',
        period: '2024/06',
        optimum: '4 primerka',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'PR MENADŽER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(3 h - 18 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.22.) POTPISIVANJE TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content: 'PR menadžer potpisuje odštampani Tehnički plan.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'pr',
      circleContent: {
        realizator: 'pr menadžer',
        period: '2024/06',
        optimum: '1 primerak',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.6.) PRIPREMA PLANA RADA',
    },
    {
      type: 'pNormal',
      content:
        'PR menadžer podnosi izveštaj u kojem procenjuje sve svoje planirane aktivnosti oko projekta, predviđa svoj angažman i utrošeno vreme.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'pr',
      circleContent: {
        realizator: 'PR menadžer',
        period: '2024/06',
        optimum: '3 stranice',
        angažman: '3 h',
        fond: '18 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.13.) RAZMATRANJE NACRTA PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content:
        'PR menadžer razmatra predloženi nacrt plana i programa poslovanja i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'pr',
      circleContent: {
        realizator: 'PR menadžer',
        period: '2024/06',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.20.) POTPISIVANJE PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content: 'PR menadžer potpisuje Plan i program poslovanja.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'pr',
      circleContent: {
        realizator: 'PR menadžer',
        period: '2024/06',
        optimum: '1 primerak',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.6.6.) RAZMATRANJE NACRTA UGOVORA O SARADNJI',
    },
    {
      type: 'pNormal',
      content:
        'PR menadžer razmatra predloženi nacrt ugovora o saradnji i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'pr',
      circleContent: {
        realizator: 'PR menadžer',
        period: '2024/06',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.6.13.) POTPISIVANJE UGOVORA O SARADNJI',
    },
    {
      type: 'pNormal',
      content: 'PR menadžer potpisuje Ugovor o saradnji.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'pr',
      circleContent: {
        realizator: 'PR menadžer',
        period: '2024/06',
        optimum: '4 primerka',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'hr',
    },
    {
      type: 'h2',
      content: 'VEBMASTER',
      color: 'black',
    },
    {
      type: 'h2',
      content: '(89 h - 888 EUR)',
      weight: 'bold',
      align: 'center',
      color: 'grayMedium',
    },
    {
      type: 'h4',
      content: '0.4.19.) POTPISIVANJE TEHNIČKOG PLANA',
    },
    {
      type: 'pNormal',
      content: 'Vebmaster potpisuje odštampani Tehnički plan.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2024/06',
        optimum: '1 primerak',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.3.) PRIPREMA PLANA RADA',
    },
    {
      type: 'pNormal',
      content:
        'Vebmaster podnosi izveštaj u kojem procenjuje sve svoje planirane aktivnosti oko projekta, predviđa svoj angažman i utrošeno vreme.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2024/06',
        optimum: '4,5 stranice',
        angažman: '4,5 h',
        fond: '43 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.10.) RAZMATRANJE NACRTA PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content:
        'Vebmaster razmatra predloženi nacrt plana i programa poslovanja i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2024/06',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.5.21.) POTPISIVANJE PLANA I PROGRAMA POSLOVANJA',
    },
    {
      type: 'pNormal',
      content: 'Vebmaster potpisuje Plan i program poslovanja.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2024/06',
        optimum: '1 primerak',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.6.3.) RAZMATRANJE NACRTA UGOVORA O SARADNJI',
    },
    {
      type: 'pNormal',
      content:
        'Vebmaster razmatra predloženi nacrt ugovora o saradnji i odlučuje o njegovim eventualnim izmenama ili dopunama.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2024/06',
        optimum: '1 nacrt',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '0.6.10.) POTPISIVANJE UGOVORA O SARADNJI',
    },
    {
      type: 'pNormal',
      content: 'Vebmaster potpisuje Ugovor o saradnji.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2024/06',
        optimum: '4 primerka',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '1.1.3.) POTPISIVANJE UGOVORA O DELU SA KOORDINATOROM ZA PRVU ETAPU',
    },
    {
      type: 'pNormal',
      content: 'Vebmaster potpisuje Ugovor o delu sa koordinatorom za prvu etapu.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2024/06',
        optimum: '2 primerka',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '1.2.3.) POTPISIVANJE UGOVORA O DELU ZA PRVU ETAPU',
    },
    {
      type: 'pNormal',
      content: 'Vebmaster potpisuje Ugovor o delu za prvu etapu.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2024/06',
        optimum: '2 primerka',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    {
      type: 'h4',
      content: '1.2.4.) IZRADA PLATFORME ZA PRVU ETAPU',
    },
    {
      type: 'pNormal',
      content:
        'Na osnovu tehničkog plana, vebmaster izrađuje platformu za prvu etapu razvoja, osposobljavajući je za objavljivanje investicionog plana i programa, kao i svih drugih neophodnih informacija koji se tiču početnog investiranja.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2024/06',
        optimum: '1/3 platforme',
        angažman: '84,5 h',
        fond: '845 EUR',
      },
    },
    {
      type: 'h4',
      content: '1.2.7.) TESTIRANJE PLATFORME ZA PRVU ETAPU',
    },
    {
      type: 'pNormal',
      content:
        'Vebmaster testira platformu i uverava se u njeno efikasno funkcionisanje predviđeno za prvu etapu razvoja projekta.',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'listEvenly',
      owner: 'webmaster',
      circleContent: {
        realizator: 'vebmaster',
        period: '2024/06',
        optimum: '1 test',
        angažman: '0 h',
        fond: '0 EUR',
      },
    },
    { type: 'hr' },
  ],
};

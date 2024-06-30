import { ContentBlocksData } from '../helpers/types';

export interface BasicInformation {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
}

export const contentData: BasicInformation[] = [
  {
    id: 'block1',
    title: 'Block 1',
    description: 'This is the first block.',
    coverImage: '/images/image1.jpg',
  },
  {
    id: 'block2',
    title: 'Block 2',
    description: 'This is the second block.',
    coverImage: '/images/image2.jpg',
  },
  {
    id: 'block3',
    title: 'Block 3',
    description: 'This is the second block.',
    coverImage: '/images/image2.jpg',
  },
  {
    id: 'block4',
    title: 'Block 4',
    description: 'This is the second block.',
    coverImage: '/images/image2.jpg',
  },
  {
    id: 'investiocioni-fond',
    title: 'Investicioni Fond',
    description:
      'Investicioni fond obuhvata sva potrebna finansijska sredstva koja se ulažu u razvoj projekta sve do njegovog samostalnog funkcionisanja. Sredstva iz investicionog fonda se raspoređuju i ulažu u više razvojnih etapa projekta. Nakon faze pripreme i prikupljanja finansijskih sredstava, projekat započinje eskperimentalno delovanje na manjoj lokaciji poput tržnog centra (buvljaka), sa manjim tehničkim kapacitetima koji se sve više razvijaju kako projekat napreduje iz etape u etapu. Potom se novac ulaže u prostornu ekspanziju projekta na čitav grad (Suboticu), a u završnoj fazi projekat se širi i na druge gradove.',
  },
];

export const contentBlocksData: ContentBlocksData = {
  block1: [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    { type: 'image', url: ['/images/image1.jpg'] },
    { type: 'text', content: 'Here is some more explanation with an image below.' },
    { type: 'image', url: ['/images/image1.jpg', '/images/image2.jpg'] },
    { type: 'text', content: 'Final part of the explanation.' },
  ],
  block2: [
    { type: 'text', content: 'This is the first part of the explanation.' },
    { type: 'image', url: ['/images/image1.jpg'] },
    { type: 'text', content: 'Here is some more explanation with an image below.' },
    { type: 'image', url: ['/images/image1.jpg', '/images/image2.jpg'] },
    { type: 'text', content: 'Final part of the explanation.' },
  ],
  block3: [
    { type: 'text', content: 'This is the first part of the explanation.' },
    { type: 'image', url: ['/images/image1.jpg'] },
    { type: 'text', content: 'Here is some more explanation with an image below.' },
    { type: 'image', url: ['/images/image1.jpg', '/images/image2.jpg'] },
    { type: 'text', content: 'Final part of the explanation.' },
  ],
  'investiocioni-fond': [
    {
      type: 'text',
      content:
        'Investicioni fond obuhvata sva potrebna finansijska sredstva koja se ulažu u razvoj projekta sve do njegovog samostalnog funkcionisanja. Sredstva iz investicionog fonda se raspoređuju i ulažu u više razvojnih etapa projekta. Nakon faze pripreme i prikupljanja finansijskih sredstava, projekat započinje eskperimentalno delovanje na manjoj lokaciji poput tržnog centra (buvljaka), sa manjim tehničkim kapacitetima koji se sve više razvijaju kako projekat napreduje iz etape u etapu. Potom se novac ulaže u prostornu ekspanziju projekta na čitav grad (Suboticu), a u završnoj fazi projekat se širi i na druge gradove.',
    },
    { type: 'hr' },
    {
      type: 'list',
      listContent: [
        {
          type: 'paragraph1',
          text: 'Fond za planiranje i pripremu',
          amount: '4.272 EUR',
          subitems: [
            { type: 'paragraph2', text: 'Priprema nacrta tehničkog plana', amount: '7,5 EUR' },
            { type: 'paragraph2', text: 'Nominacija projekta', amount: '46 EUR' },
            { type: 'paragraph2', text: 'Okupljanje saradnika', amount: '171 EUR' },
            {
              type: 'paragraph2',
              text: 'Testiranje i izrada Tehničkog plana',
              amount: '2.349 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Priprema Plana i programa poslovanja',
              amount: '468,5 EUR',
            },
            { type: 'paragraph2', text: 'Priprema Ugovora o saradnji', amount: '155 EUR' },
            { type: 'paragraph2', text: 'Priprema i održavanje budžeta', amount: '1.075 EUR' },
          ],
        },
        {
          type: 'paragraph1',
          text: 'Fond za prikupljanje finansijskih sredstava',
          amount: '3.261 EUR',
          subitems: [
            {
              type: 'paragraph2',
              text: 'Priprema Investicionog plana i programa',
              amount: '407 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Priprema platforme za investicioni fond',
              amount: '993 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Oglašavanje Investicionog plana i programa',
              amount: '1.125,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Kontaktiranje potencijalnih investitora',
              amount: '735,5 EUR',
            },
          ],
        },
        {
          type: 'paragraph1',
          text: 'Fond za uvođenje preglednika po mapama za buvljak',
          amount: '15.011 EUR',
          subitems: [
            {
              type: 'paragraph2',
              text: 'Priprema platforme za preglednik po mapama',
              amount: '5.341 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Popis buvljaka i objavljivanje informacija',
              amount: '3.890 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Upoznavanje prodavaca sa platformom',
              amount: '655,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Objavljivanje probnih besplatnih reklama',
              amount: '416 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Navođenje kupaca na veliki broj pregleda',
              amount: '3.958,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Navođenje prodavaca na plaćeno oglašavanje',
              amount: '750 EUR',
            },
          ],
        },
        {
          type: 'paragraph1',
          text: 'Fond za uvođenje veb izloga za prodajne objekte na buvljaku',
          amount: '5.625 EUR',
          subitems: [
            {
              type: 'paragraph2',
              text: 'Priprema platforme za veb izloge',
              amount: '3.928 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Otvaranje promotivnog veb izloga',
              amount: '397 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Promocija veb izloga prodavcima',
              amount: '1.300 EUR',
            },
          ],
        },
        {
          type: 'paragraph1',
          text: 'Fond za uvođenje enciklopedije proizvoda na buvljaku',
          amount: '2.553,5 EUR',
          subitems: [
            {
              type: 'paragraph2',
              text: 'Priprema platforme za enciklopediju proizvoda',
              amount: '1.373 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Otvaranje promotivnih stranica enciklopedije proizvoda',
              amount: '526,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Promocija enciklopedije proizvoda prodavcima',
              amount: '654 EUR',
            },
          ],
        },
        {
          type: 'paragraph1',
          text: 'Fond za ekspanziju projekta u Subotici',
          amount: '16.218,5',
          subitems: [
            {
              type: 'paragraph2',
              text: 'Priprema platforme za Suboticu',
              amount: '8 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Popis Subotice i objavljivanje informacija',
              amount: '8.887,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Navođenje prodavaca na upotrebu veb izloga',
              amount: '3.660 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Objavljivanje probnih besplatnih reklama',
              amount: '119 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Navođenje kupaca na veliki broj pregleda',
              amount: '2.644 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Navođenje prodavaca na plaćeno oglašavanje',
              amount: '900 EUR',
            },
          ],
        },
        {
          type: 'paragraph1',
          text: 'Fond za ekspanziju projekta izvan Subotice',
          amount: '3.059 EUR',
          subitems: [
            {
              type: 'paragraph2',
              text: 'Priprema platforme za Srbiju',
              amount: '8 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Osnivanje firme',
              amount: '958 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Organizovanje međugradskih inkasanata',
              amount: '443,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Pribavljanje spiska svih prodajnih objekata',
              amount: '90,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Priprema prezentacije uspešnosti oglašavanja',
              amount: '0 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Navođenje prodavaca na plaćeno oglašavanje',
              amount: '436 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Promocija platforme putem medija',
              amount: '1.123 EUR',
            },
          ],
        },
      ],
    },
  ],
};

export const hyperlinks = [
  { text: 'ipsum', url: '/ulaganje/block6' },
  { text: 'explanation', url: '/ulaganje/block8' },
  { text: 'Fond za planiranje i pripremu', url: '/ulaganje/Fond-za-planiranje-i-pripremu' },
  { text: 'Priprema nacrta tehničkog plana', url: '/ulaganje/Priprema-nacrta-tehničkog-plana' },
  { text: 'Nominacija projekta', url: '/ulaganje/Fond-za-planiranje-i-pripremu' },
  { text: 'Okupljanje saradnika', url: '/ulaganje/Fond-za-planiranje-i-pripremu' },
  { text: 'Testiranje i izrada Tehničkog plana', url: '/ulaganje/Fond-za-planiranje-i-pripremu' },
  { text: 'Priprema Plana i programa poslovanja', url: '/ulaganje/Fond-za-planiranje-i-pripremu' },
  { text: 'Priprema Ugovora o saradnji', url: '/ulaganje/Fond-za-planiranje-i-pripremu' },
  { text: 'Priprema i održavanje budžeta', url: '/ulaganje/Fond-za-planiranje-i-pripremu' },
  {
    text: 'Priprema Investicionog plana i programa',
    url: '/ulaganje/Fond-za-prikupljanje-finansijskih-sredstava',
  },
  {
    text: 'Priprema platforme za investicioni fond',
    url: '/ulaganje/Fond-za-prikupljanje-finansijskih-sredstava',
  },
  {
    text: 'Oglašavanje Investicionog plana i programa',
    url: '/ulaganje/Fond-za-prikupljanje-finansijskih-sredstava',
  },
  {
    text: 'Kontaktiranje potencijalnih investitora',
    url: '/ulaganje/Fond-za-prikupljanje-finansijskih-sredstava',
  },
  {
    text: 'Priprema platforme za preglednik po mapama',
    url: '/ulaganje/Fond-za-uvođenje-preglednika-po-mapama-za-buvljak',
  },
  {
    text: 'Popis buvljaka i objavljivanje informacija',
    url: '/ulaganje/Fond-za-uvođenje-preglednika-po-mapama-za-buvljak',
  },
  {
    text: 'Upoznavanje prodavaca sa platformom',
    url: '/ulaganje/Fond-za-uvođenje-preglednika-po-mapama-za-buvljak',
  },
  {
    text: 'Objavljivanje probnih besplatnih reklama',
    url: '/ulaganje/Fond-za-uvođenje-preglednika-po-mapama-za-buvljak',
  },
  {
    text: 'Navođenje kupaca na veliki broj pregleda',
    url: '/ulaganje/Fond-za-uvođenje-preglednika-po-mapama-za-buvljak',
  },
  {
    text: 'Navođenje prodavaca na plaćeno oglašavanje',
    url: '/ulaganje/Fond-za-uvođenje-preglednika-po-mapama-za-buvljak',
  },
  {
    text: 'Priprema platforme za veb izloge',
    url: '/ulaganje/Fond-za-uvođenje-veb-izloga-za-prodajne-objekte-na-buvljaku',
  },
  {
    text: 'Otvaranje promotivnog veb izloga',
    url: '/ulaganje/Fond-za-uvođenje-veb-izloga-za-prodajne-objekte-na-buvljaku',
  },
  {
    text: 'Promocija veb izloga prodavcima',
    url: '/ulaganje/Fond-za-uvođenje-veb-izloga-za-prodajne-objekte-na-buvljaku',
  },
  {
    text: 'Priprema platforme za enciklopediju proizvoda',
    url: '/ulaganje/Fond-za-uvođenje-enciklopedije-proizvoda-na-buvljaku',
  },
  {
    text: 'Otvaranje promotivnih stranica enciklopedije proizvoda',
    url: '/ulaganje/Fond-za-uvođenje-enciklopedije-proizvoda-na-buvljaku',
  },
  {
    text: 'Promocija enciklopedije proizvoda prodavcima',
    url: '/ulaganje/Fond-za-uvođenje-enciklopedije-proizvoda-na-buvljaku',
  },
  {
    text: 'Priprema platforme za Suboticu',
    url: '/ulaganje/Fond-za-ekspanziju-projekta-u-Subotici',
  },
  {
    text: 'Popis Subotice i objavljivanje informacija',
    url: '/ulaganje/Fond-za-ekspanziju-projekta-u-Subotici',
  },
  {
    text: 'Navođenje prodavaca na upotrebu veb izloga',
    url: '/ulaganje/Fond-za-ekspanziju-projekta-u-Subotici',
  },
  {
    text: 'Objavljivanje probnih besplatnih reklama',
    url: '/ulaganje/Fond-za-ekspanziju-projekta-u-Subotici',
  },
  {
    text: 'Navođenje kupaca na veliki broj pregleda',
    url: '/ulaganje/Fond-za-ekspanziju-projekta-u-Subotici',
  },
  {
    text: 'Navođenje prodavaca na plaćeno oglašavanje',
    url: '/ulaganje/Fond-za-ekspanziju-projekta-u-Subotici',
  },
  {
    text: 'Priprema platforme za Srbiju',
    url: '/ulaganje/Fond-za-ekspanziju-projekta-izvan-Subotice',
  },
  { text: 'Osnivanje firme', url: '/ulaganje/Fond-za-ekspanziju-projekta-izvan-Subotice' },
  {
    text: 'Organizovanje međugradskih inkasanata',
    url: '/ulaganje/Fond-za-ekspanziju-projekta-izvan-Subotice',
  },
  {
    text: 'Pribavljanje spiska svih prodajnih objekata',
    url: '/ulaganje/Fond-za-ekspanziju-projekta-izvan-Subotice',
  },
  {
    text: 'Priprema prezentacije uspešnosti oglašavanja',
    url: '/ulaganje/Fond-za-ekspanziju-projekta-izvan-Subotice',
  },
  {
    text: 'Navođenje prodavaca na plaćeno oglašavanje',
    url: '/ulaganje/Fond-za-ekspanziju-projekta-izvan-Subotice',
  },
  {
    text: 'Promocija platforme putem medija',
    url: '/ulaganje/Fond-za-ekspanziju-projekta-izvan-Subotice',
  },
];

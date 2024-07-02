import { ContentBlocksData, InvesticioniFondLinksData } from '@/app/helpers/types';

export const investicioniFondLinksData: InvesticioniFondLinksData[] = [
  {
    id: 'priprema-nacrta-tehnickog-plana',
  },
  {
    id: 'nominacija-projekta',
  },
  {
    id: 'okupljanje-saradnika',
  },
  {
    id: 'testiranje-i-izrada-tehnickog-plana',
  },
  {
    id: 'priprema-plana-i-programa-poslovanja',
  },
  {
    id: 'priprema-ugovora-o-saradnji',
  },
  {
    id: 'priprema-i-odrzavanje-budzeta',
  },
  {
    id: 'priprema-platforme-za-preglednik-po-mapama',
  },
  {
    id: 'popis-buvljaka-i-objavljivanje-informacija',
  },
  {
    id: 'upoznavanje-prodavaca-sa-platformom',
  },
  {
    id: 'objavljivanje-probnih-besplatnih-reklama',
  },
  {
    id: 'navodjenje-kupaca-na-veliki-broj-pregleda',
  },
  {
    id: 'navodjenje-prodavaca-na-placeno-oglasavanje',
  },
  {
    id: 'priprema-platforme-za-veb-izloge',
  },
  {
    id: 'otvaranje-promotivnog-veb-izloga',
  },
  {
    id: 'promocija-veb-izloga-prodavcima',
  },
  {
    id: 'priprema-platforme-za-enciklopediju-proizvoda',
  },
  {
    id: 'otvaranje-promotivnih-stranica-enciklopedije-proizvoda',
  },
  {
    id: 'promocija-enciklopedije-proizvoda-prodavcima',
  },
  {
    id: 'priprema-platforme-za-suboticu',
  },
  {
    id: 'popis-subotice-i-objavljivanje-informacija',
  },
  {
    id: 'navodjenje-prodavaca-na-upotrebu-veb-izloga',
  },
  {
    id: 'objavljivanje-probnih-besplatnih-reklama',
  },
  {
    id: 'navodjenje-kupaca-na-veliki-broj-pregleda',
  },
  {
    id: 'navodjenje-prodavaca-na-placeno-oglasavanje',
  },
  {
    id: 'priprema-platforme-za-srbiju',
  },
  {
    id: 'osnivanje-firme',
  },
  {
    id: 'organizovanje-medjugradskih-inkasanata',
  },
  {
    id: 'pribavljanje-spiska-svih-prodajnih-objekata',
  },
  {
    id: 'priprema-prezentacije-uspesnosti-oglasavanja',
  },
  {
    id: 'navodjenje-prodavaca-na-oglasavanje',
  },
  {
    id: 'promocija-platforme-putem-medija',
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
  'nominacija-projekta': [
    {
      type: 'text',
      content:
        'Investicioni fond obuhvata sva potrebna finansijska sredstva koja se ulažu u razvoj projekta sve do njegovog samostalnog funkcionisanja. Sredstva iz investicionog fonda se raspoređuju i ulažu u više razvojnih etapa projekta.',
    },
    { type: 'hr' },
    {
      type: 'h2',
      content: 'VREDNOST INVESTICIONOG FONDA',
    },
    {
      type: '2XLboldCenter',
      content: '50.000 EUR',
    },
    { type: 'hr' },
    {
      type: 'h2',
      content: 'RASPODELA INVESTICIONOG FONDA',
    },
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
          listStyle: 'number',
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
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za uvođenje  preglednika po mapama za buvljak',
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
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za uvođenje veb izloga za prodajne objekte na buvljaku',
          amount: '5.625 EUR',
          subitems: [
            { type: 'paragraph2', text: 'Priprema platforme za veb izloge', amount: '3.928 EUR' },
            { type: 'paragraph2', text: 'Otvaranje promotivnog veb izloga', amount: '397 EUR' },
            { type: 'paragraph2', text: 'Promocija veb izloga prodavcima', amount: '1.300 EUR' },
          ],
          listStyle: 'number',
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
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za ekspanziju projekta u Subotici',
          amount: '16.218,5 EUR',
          subitems: [
            { type: 'paragraph2', text: 'Priprema platforme za Suboticu', amount: '8 EUR' },
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
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za ekspanziju projekta izvan Subotice',
          amount: '3.059 EUR',
          subitems: [
            { type: 'paragraph2', text: 'Priprema platforme za Srbiju', amount: '8 EUR' },
            { type: 'paragraph2', text: 'Osnivanje firme', amount: '958 EUR' },
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
            { type: 'paragraph2', text: 'Navođenje prodavaca na oglašavanje', amount: '436 EUR' },
            { type: 'paragraph2', text: 'Promocija platforme putem medija', amount: '1.123 EUR' },
          ],
          listStyle: 'number',
        },
      ],
    },
  ],
  'Priprema nacrta tehnickog plana': [
    {
      type: 'text',
      content:
        'Investicioni fond obuhvata sva potrebna finansijska sredstva koja se ulažu u razvoj projekta sve do njegovog samostalnog funkcionisanja. Sredstva iz investicionog fonda se raspoređuju i ulažu u više razvojnih etapa projekta.',
    },
    { type: 'hr' },
    {
      type: 'h2',
      content: 'VREDNOST INVESTICIONOG FONDA',
    },
    {
      type: '2XLboldCenter',
      content: '50.000 EUR',
    },
    { type: 'hr' },
    {
      type: 'h2',
      content: 'RASPODELA INVESTICIONOG FONDA',
    },
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
          listStyle: 'number',
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
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za uvođenje  preglednika po mapama za buvljak',
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
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za uvođenje veb izloga za prodajne objekte na buvljaku',
          amount: '5.625 EUR',
          subitems: [
            { type: 'paragraph2', text: 'Priprema platforme za veb izloge', amount: '3.928 EUR' },
            { type: 'paragraph2', text: 'Otvaranje promotivnog veb izloga', amount: '397 EUR' },
            { type: 'paragraph2', text: 'Promocija veb izloga prodavcima', amount: '1.300 EUR' },
          ],
          listStyle: 'number',
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
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za ekspanziju projekta u Subotici',
          amount: '16.218,5 EUR',
          subitems: [
            { type: 'paragraph2', text: 'Priprema platforme za Suboticu', amount: '8 EUR' },
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
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za ekspanziju projekta izvan Subotice',
          amount: '3.059 EUR',
          subitems: [
            { type: 'paragraph2', text: 'Priprema platforme za Srbiju', amount: '8 EUR' },
            { type: 'paragraph2', text: 'Osnivanje firme', amount: '958 EUR' },
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
            { type: 'paragraph2', text: 'Navođenje prodavaca na oglašavanje', amount: '436 EUR' },
            { type: 'paragraph2', text: 'Promocija platforme putem medija', amount: '1.123 EUR' },
          ],
          listStyle: 'number',
        },
      ],
    },
  ],
};

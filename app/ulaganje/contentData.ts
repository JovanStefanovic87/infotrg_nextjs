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
    id: 'investiocioniFond',
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
  investiocioniFond: [
    {
      type: 'text',
      content:
        'Investicioni fond obuhvata sva potrebna finansijska sredstva koja se ulažu u razvoj projekta sve do njegovog samostalnog funkcionisanja. Sredstva iz investicionog fonda se raspoređuju i ulažu u više razvojnih etapa projekta. Nakon faze pripreme i prikupljanja finansijskih sredstava, projekat započinje eskperimentalno delovanje na manjoj lokaciji poput tržnog centra (buvljaka), sa manjim tehničkim kapacitetima koji se sve više razvijaju kako projekat napreduje iz etape u etapu. Potom se novac ulaže u prostornu ekspanziju projekta na čitav grad (Suboticu), a u završnoj fazi projekat se širi i na druge gradove.',
    },
    { type: 'hr' },
    {
      type: 'list',
      listContent: [
        { type: 'paragraph1', text: 'Fond za planiranje i pripremu', amount: '4.272 EUR' },
        { type: 'paragraph2', text: 'Priprema nacrta tehničkog plana', amount: '7,5 EUR' },
        { type: 'paragraph2', text: 'Nominacija projekta', amount: '46 EUR' },
        { type: 'paragraph2', text: 'Okupljanje saradnika', amount: '171 EUR' },
        { type: 'paragraph2', text: 'Testiranje i izrada Tehničkog plana', amount: '2.349 EUR' },
        { type: 'paragraph2', text: 'Priprema Plana i programa poslovanja', amount: '468,5 EUR' },
        { type: 'paragraph2', text: 'Priprema Ugovora o saradnji', amount: '155 EUR' },
        { type: 'paragraph2', text: 'Priprema i održavanje budžeta', amount: '1.075 EUR' },
      ],
    },
  ],
};

export const hyperlinks = [
  { text: 'ipsum', url: '/ulaganje/block1' },
  { text: 'explanation', url: '/ulaganje/block2' },
];

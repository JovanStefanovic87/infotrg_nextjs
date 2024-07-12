import { Route } from './helpers/types';

export const routes: Route[] = [
  {
    label: 'Početna',
    href: '/',
    icon: '/icons/home.svg',
    subRoutes: [],
  },
  {
    label: 'O nama',
    href: '/o-nama',
    icon: '/icons/about.svg',
    subRoutes: [
      {
        label: 'Investicioni fond',
        href: '/investicionifond',
        icon: '/icons/about.svg',
        
      },
      {
        label: 'Istorija',
        href: '/o-nama/istorija',
        icon: '/icons/about.svg',
        subRoutes: [
          {
            label: 'Period 1',
            href: '/o-nama/istorija/period-1',
            icon: '/icons/about.svg',
            subRoutes: [],
          },
          {
            label: 'Period 2',
            href: '/o-nama/istorija/period-2',
            icon: '/icons/about.svg',
            subRoutes: [],
          },
        ],
      },
    ],
  },
  {
    label: 'Ulaganje',
    href: '/ulaganje',
    icon: '/icons/invest.svg',
    subRoutes: [
      {
        label: 'Investicioni fond',
        href: '/ulaganje/investicioni-fond',
        icon: '/icons/about.svg',
        subRoutes: [
          {
            label: 'Stanovi',
            href: '/ulaganje/nekretnine/stanovi',
            icon: '/icons/about.svg',
            subRoutes: [],
          },
          {
            label: 'Kuće',
            href: '/ulaganje/nekretnine/kuce',
            icon: '/icons/about.svg',
            subRoutes: [],
          },
        ],
      },
      {
        label: 'Akcije',
        href: '/ulaganje/akcije',
        icon: '/icons/about.svg',
        subRoutes: [
          {
            label: 'Domaće',
            href: '/ulaganje/akcije/domace',
            icon: '/icons/about.svg',
            subRoutes: [],
          },
          {
            label: 'Inostrane',
            href: '/ulaganje/akcije/inostrane',
            icon: '/icons/about.svg',
            subRoutes: [
              {
                label: 'Stanovi',
                href: '/ulaganje/nekretnine/stanovi',
                icon: '/icons/about.svg',
                subRoutes: [],
              },
              {
                label: 'Kuće',
                href: '/ulaganje/nekretnine/kuce',
                icon: '/icons/about.svg',
                subRoutes: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
    icon: '/icons/phoneMail.svg',
    subRoutes: [],
  },
];

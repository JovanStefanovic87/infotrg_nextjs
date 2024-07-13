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
        label: 'Poslovna saradnja',
        href: '/o-nama/poslovna-saradnja',
        icon: '/icons/about.svg',
      },
      {
        label: 'Platforma',
        href: '/o-nama/platforma',
        icon: '/icons/about.svg',
        subRoutes: [],
      },
      {
        label: 'Tim',
        href: '/o-nama/tim',
        icon: '/icons/about.svg',
        subRoutes: [],
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
        subRoutes: [],
      },
      {
        label: 'Investicioni plan i program',
        href: '/ulaganje/investicioni-plan-i-program',
        icon: '/icons/about.svg',
        subRoutes: [],
      },
      {
        label: 'Investitori',
        href: '/ulaganje/investitori',
        icon: '/icons/about.svg',
        subRoutes: [],
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

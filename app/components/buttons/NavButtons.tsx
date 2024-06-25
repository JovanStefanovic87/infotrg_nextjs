import React from 'react';
import { usePathname } from 'next/navigation';
import HeaderLinkButton from './HeaderLinkButton';
import { routes } from '../../routes';
import { Route } from '../../helpers/types';

const NavButtons: React.FC = () => {
  const currentPath = usePathname();

  return <nav className='flex space-x-4'>{renderButtons(routes, true)}</nav>;

  function renderButtons(routes: Route[], isTopLevel: boolean) {
    return routes.map((route) => {
      const isActive: boolean = currentPath === route.href;
      const hasChildren: boolean = !!(route.subRoutes && route.subRoutes.length > 0);

      return (
        <div key={route.href} className='relative'>
          <HeaderLinkButton
            label={route.label}
            href={route.href}
            isActive={isActive}
            hasChildren={hasChildren}
            subRoutes={route.subRoutes}
            isTopLevel={isTopLevel}
          />
        </div>
      );
    });
  }
};

export default NavButtons;

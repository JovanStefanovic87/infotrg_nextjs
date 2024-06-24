import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import HeaderLinkButton from './HeaderLinkButton';
import { routes } from '../../routes';
import { Route } from '../../helpers/types';

const NavButtons: React.FC = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const handleMouseEnter = (href: string) => {
    // Implement logic here if needed when mouse enters a button
  };

  const handleMouseLeave = (href: string) => {
    // Implement logic here if needed when mouse leaves a button
  };

  return (
    <nav className='flex space-x-4'>
      {renderButtons(routes, true)} {/* Pass true for top-level links */}
    </nav>
  );

  function renderButtons(routes: Route[], isTopLevel: boolean) {
    return routes.map((route) => {
      const isActive: boolean = currentPath === route.href;
      const hasChildren: boolean = !!(route.subRoutes && route.subRoutes.length > 0);

      return (
        <div key={route.href} className='relative'>
          <HeaderLinkButton
            label={route.label}
            href={route.href}
            icon={route.icon}
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

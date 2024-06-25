'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Route } from '../../helpers/types';
import BreadcrumbsContainer from '../containers/BreadcrumbsContainer';

interface BreadcrumbProps {
  routes: Route[];
}

const findRouteByHref = (routes: Route[], href: string): Route | undefined => {
  for (const route of routes) {
    if (route.href === href) {
      return route;
    }
    if (route.subRoutes) {
      const foundRoute = findRouteByHref(route.subRoutes, href);
      if (foundRoute) {
        return foundRoute;
      }
    }
  }
  return undefined;
};

const findBreadcrumbPath = (routes: Route[], href: string): Route[] => {
  for (const route of routes) {
    if (href.startsWith(route.href)) {
      if (route.href === href) {
        return [route];
      }
      if (route.subRoutes) {
        const subPath = findBreadcrumbPath(route.subRoutes, href);
        if (subPath.length > 0) {
          return [route, ...subPath];
        }
      }
    }
  }
  return [];
};

const getFullBreadcrumbPath = (routes: Route[], href: string): Route[] => {
  const path = findBreadcrumbPath(routes, href);
  const homeRoute = routes.find((route) => route.href === '/');
  if (homeRoute && path[0]?.href !== '/') {
    return [homeRoute, ...path];
  }
  return path;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ routes }) => {
  const currentPath = usePathname();
  const [breadcrumbPath, setBreadcrumbPath] = useState<Route[]>([]);

  useEffect(() => {
    const path = getFullBreadcrumbPath(routes, currentPath);
    setBreadcrumbPath(path);
  }, [currentPath, routes]);

  if (breadcrumbPath.length === 0) {
    return null;
  }

  return (
    <BreadcrumbsContainer>
      {breadcrumbPath.length > 3 ? (
        <>
          <Link href={breadcrumbPath[0].href}>
            <span className='text-gray-500 hover:text-blue-600'>{breadcrumbPath[0].label}</span>
          </Link>
          <span className='mx-1'>/</span>
          <span className='text-gray-500'>...</span>
          <span className='mx-1'>/</span>
          <Link href={breadcrumbPath[breadcrumbPath.length - 2].href}>
            <span className='text-gray-500 hover:text-blue-600'>
              {breadcrumbPath[breadcrumbPath.length - 2].label}
            </span>
          </Link>
          <span className='mx-1'>/</span>
          <span className='font-medium text-blue-600'>
            {breadcrumbPath[breadcrumbPath.length - 1].label}
          </span>
        </>
      ) : (
        breadcrumbPath.map((route, index) => (
          <React.Fragment key={route.href}>
            {index === breadcrumbPath.length - 1 ? (
              <span className='font-medium text-white'>{route.label}</span>
            ) : (
              <Link href={route.href}>
                <span className='text-gray-500 hover:text-blue-600'>{route.label}</span>
              </Link>
            )}
            {index < breadcrumbPath.length - 1 && <span className='mx-1'>/</span>}
          </React.Fragment>
        ))
      )}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumb;

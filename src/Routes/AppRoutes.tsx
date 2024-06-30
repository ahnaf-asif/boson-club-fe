import { useRoutes } from 'react-router-dom';
import { ReactElement } from 'react';
import { About, Home } from '@/Pages';

export interface RouteType {
  path: string;
  element: ReactElement;
}

const routeList: RouteType[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
];

export const AppRoutes = () => {
  return useRoutes(routeList);
};

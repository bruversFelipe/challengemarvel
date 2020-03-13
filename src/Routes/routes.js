import { lazy } from 'react';

const Home = lazy(() => import('../Pages/Home'));
const Heroes = lazy(() => import('../Pages/Heroes'));
const IndividualHero = lazy(() => import('../Pages/IndividualHero'));

const routes = [
  {
    key: 1,
    path: '/',
    exact: true,
    Component: Home,
    title: 'Bem Vindo',
  },
  {
    key: 2,
    path: '/heroes',
    exact: true,
    Component: Heroes,
    title: 'Heroes',
  },
  {
    key: 3,
    path: '/individual-hero',
    exact: true,
    Component: IndividualHero,
    title: 'Individual Hero',
  },
];

export default routes;

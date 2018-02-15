import React from 'react';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import ClassComponentDemo from '../../components/ClassComponentDemo'
import PropsDemo from '../concepts/PropsDemo'
import LifeCycleCodepen from '../concepts/LifeCycleCodepen'
import TimePiecesApp from '../../components/apps/timer-apps/TimePiecesApp'
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptApp'
import FriendsListApp from '../apps/friends-list-app/FriendsListApp'
import MovieSearchApp from '../apps/movie-search-app/MovieApp'

export const routes = [
    {
      path: '/' || '/home',
      exact: true,
      sidebar: () => <div>Home</div>,
      main: () => <Home />
    },
    {
      path: '/functionalcomponent',
      exact: true,
      main: () => <FunctionalComponentDemo />
    },
    {
      path: '/jsxrules',
      exact: true,
      main: () => <JSXRules />
    },
    {
      path: '/classcomponent',
      exact: true,
      main: () => <ClassComponentDemo />
    },
    {
      path: "/propsdemo",
      exact: true,
      main: () => <PropsDemo />
    },
    {
      path: "/lifecycle",
      exact: true,
      main: () => <LifeCycleCodepen />
    },
    {
      path: '/resources',
      exact: true,
      sidebar: () => <div>Works Cited</div>,
      main: () => <Resources />
  },
  {
    path: "/timer",
    exact: true,
    main: () => <TimePiecesApp />
  },
  {
    path: '/reactconceptlist',
    exact: true,
    main: () => <ReactConceptsApp />
  },
  {
    path: '/movie',
    exact: true,
    main: () => <MovieSearchApp />
  },
  {
    path: '/friends',
    exact: true,
    main: () => <FriendsListApp />
  }
]
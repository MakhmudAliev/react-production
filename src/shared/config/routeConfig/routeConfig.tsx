import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not-found',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: RoutePaths.main, element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: RoutePaths.about, element: <AboutPage /> },
  [AppRoutes.NOT_FOUND]: { path: RoutePaths['not-found'], element: <NotFound /> },
};
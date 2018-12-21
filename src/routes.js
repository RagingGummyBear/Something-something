import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import FormPage from './components/pages/FormPage';
import DynamicRoutePage from './components/pages/DynamicRoutePage';
import NotFoundPage from './components/pages/NotFoundPage';
import PanelLeftPage from './components/pages/PanelLeftPage';
import PanelRightPage from './components/pages/PanelRightPage';
import LoginPage from './components/pages/LoginPage';
import ExpertSearchPage from './components/pages/ExpertSearchPage';
import DeveloperDetailsPage from './components/pages/DeveloperDetailsPage';

export default [

  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/login-page/',
    component: LoginPage,
  },
  {
    path: '/expert-search/',
    component: ExpertSearchPage,
  },
  {
    path: '/developer-details/',
    component: DeveloperDetailsPage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },

];

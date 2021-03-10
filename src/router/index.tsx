import Home1 from '../components/home1';
import Home2 from '../components/home2';
import Home3 from '../components/home3';

const indexRouter = [
  { path: '/Home1', component: Home1 },
  { path: '/Home2', component: Home2 },
  { path: '/Home3', component: Home3 },
  { path: '/', component: Home2 },
];

export default indexRouter;

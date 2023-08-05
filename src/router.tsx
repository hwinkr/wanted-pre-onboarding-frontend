import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';
import AuthLayout from './components/AuthLayout';

interface RouterItem {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
}

const routerDatas: RouterItem[] = [
  {
    id: 0,
    path: '/signup',
    label: '회원가입',
    element: <SignUp />,
  },
  {
    id: 1,
    path: '/signin',
    label: '로그인',
    element: <Login />,
  },
  {
    id: 2,
    path: '/todo',
    label: '투두리스트',
    element: <Todo />,
  },
];

// TODO
// createBrowserRouter(routes, option) : option 자리엔 생략가능한 객체(basename, window를 key로 가짐) -> 배포할 때, basename을 사용해야 함.

export const routers = createBrowserRouter(
  routerDatas.map((router: RouterItem) => {
    return {
      path: router.path,
      element: <AuthLayout>{router.element}</AuthLayout>,
    };
  }),
);

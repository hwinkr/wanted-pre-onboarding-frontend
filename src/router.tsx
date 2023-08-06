import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';
import AuthLayout from './components/AuthLayout';
import Home from './pages/Home';

interface RouterItem {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
  loginChecked: boolean;
}

const routerDatas: RouterItem[] = [
  {
    id: 0,
    path: '/',
    label: '홈페이지',
    element: <Home />,
    loginChecked: false,
  },
  {
    id: 1,
    path: '/signup',
    label: '회원가입',
    element: <SignUp />,
    loginChecked: true,
  },
  {
    id: 2,
    path: '/signin',
    label: '로그인',
    element: <Login />,
    loginChecked: true,
  },
  {
    id: 3,
    path: '/todo',
    label: '투두리스트',
    element: <Todo />,
    loginChecked: true,
  },
];

// TODO
// createBrowserRouter(routes, option) : option 자리엔 생략가능한 객체(basename, window를 key로 가짐) -> 배포할 때, basename을 사용해야 함.

export const routers = createBrowserRouter(
  routerDatas.map((router: RouterItem) => {
    if (router.loginChecked) {
      return {
        path: router.path,
        element: <AuthLayout>{router.element}</AuthLayout>,
      };
    }
    return {
      path: router.path,
      element: router.element,
    };
  }),
);

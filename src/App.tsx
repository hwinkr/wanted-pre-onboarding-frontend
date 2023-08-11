import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';
import AuthLayout from './components/AuthLayout';
import TodoProvider from './components/Provider/TodoProvider';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<TodoProvider />}>
            <Route path="/todo" element={<Todo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

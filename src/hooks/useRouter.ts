import { useNavigate } from 'react-router-dom';

const useRouter = () => {
  const navigate = useNavigate();
  const current = window.location.pathname;

  return {
    current,
    routerTo: (path: string) => navigate(path),
  };
};

export default useRouter;

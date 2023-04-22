import { useNavigate } from 'react-router-dom';
import { Routes } from 'src/routes';
import Cookies from 'js-cookie';
import { useGetMeQuery } from 'src/schemas/generated';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

export const ProtectedLayout: React.FC<Props> = ({ children }) => {
  const { data, loading, called } = useGetMeQuery();
  const navigate = useNavigate();

  const token = Cookies.get('access-token');
  if (!token) {
    navigate(Routes.SIGN_IN);
  }

  useEffect(() => {
    if (!data?.me?.id && !loading && called) {
      navigate(Routes.SIGN_IN);
    }
  }, [called, data?.me?.id, loading, navigate]);

  if(loading && called && !data) return <></>

  return <>{children}</>;
};

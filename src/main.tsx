import * as ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import { SignInPage } from './pages/sign-in';

import { GlobalStyle } from './styles/global';
import { ThemeProvider } from '@mui/material';
import { lightTheme } from './themes/theme';
import { ApolloInitProvider } from './_apollo';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import i18n from './i18n/init';
import { ForgotPasswordPage } from './pages/forgot-password';
import { Routes } from './routes';
import { ResetPasswordPage } from './pages/reset-password';
import { ProductsPage } from './pages/products';
import { ProtectedLayout } from './layouts/protected-layout';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ru from 'date-fns/locale/ru';
import { ProviderPage } from './pages/providers';
import { ContragentsPage } from './pages/contragents';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
i18n;

const router = createBrowserRouter([
  {
    path: Routes.SIGN_IN,
    element: <SignInPage />,
  },
  {
    path: '/',
    element: <Navigate to={Routes.SIGN_IN} />,
  },
  {
    path: Routes.CONTRAGENTS,
    element: (
      <ProtectedLayout>
        <ContragentsPage />
      </ProtectedLayout>
    ),
  },
  {
    path: Routes.PROVIDERS,
    element: (
      <ProtectedLayout>
        <ProviderPage />
      </ProtectedLayout>
    ),
  },
  {
    path: Routes.FORGOT_PASSWORD,
    element: <ForgotPasswordPage />,
  },
  {
    path: Routes.RESET_PASSWORD,
    element: <ResetPasswordPage />,
  },
  {
    path: Routes.PRODUCTS,
    element: (
      <ProtectedLayout>
        <ProductsPage />
      </ProtectedLayout>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <LocalizationProvider adapterLocale={ru} dateAdapter={AdapterDayjs}>
      <ApolloInitProvider>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ApolloInitProvider>
    </LocalizationProvider>
  </StrictMode>
);

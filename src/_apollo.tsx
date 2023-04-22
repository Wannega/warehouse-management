import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';
import { onError } from '@apollo/client/link/error';
import { redirect } from 'react-router';
import { Routes } from './routes';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
});

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
});

const cookieLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    console.log(operation.operationName);

    if (!response.data) return response;
    if (operation.operationName === 'resetPassword') {
      Cookies.set('access-token', response.data?.resetPassword.jwt, {
        expires: 1,
        sameSite: 'strict',
      });
      redirect(Routes.PRODUCTS);
    }
    if (operation.operationName === 'signIn') {
      Cookies.set('access-token', response.data?.login.jwt, {
        expires: 1,
        sameSite: 'strict',
      });
      redirect(Routes.PRODUCTS);
    }
    return response;
  });
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('access-token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
  link: cookieLink.concat(errorLink.concat(authLink.concat(httpLink))),
});

interface Props {
  children: React.ReactNode;
}

export const ApolloInitProvider: React.FC<Props> = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

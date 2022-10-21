import React from 'react';
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => (
  <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>
);

export default QueryClientProvider;

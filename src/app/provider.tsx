// app/providers.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProvider } from './context';
import React from 'react';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        {children}
      </AppProvider>
    </QueryClientProvider>
  );
}

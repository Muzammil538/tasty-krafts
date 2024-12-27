// src/components/Layout.tsx

import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-20">
        {children}
      </main>
    </div>
  );
}

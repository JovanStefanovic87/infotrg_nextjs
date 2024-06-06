'use client';
import '../styles/globals.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import { Providers } from './globalRedux/provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className='flex'>
        <Sidebar />
        <div className='flex-1'>
          <Providers>
            <Header />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}

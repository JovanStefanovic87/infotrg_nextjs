'use client';
import '../styles/globals.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import { SidebarProvider } from './context/SidebarContext';
import { Providers } from './globalRedux/provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className='flex flex-col min-h-screen bg-blueMain'>
        <SidebarProvider>
          <div className='flex flex-1'>
            <Sidebar />
            <div className='flex-1 flex flex-col'>
              <Providers>
                <Header />
                <main className='flex-1'>{children}</main>
              </Providers>
            </div>
          </div>
          <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}

import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <main className='bg-main flex flex-col flex-grow min-h-screen items-center relative w-full h-main mt-header md:ml-slotsWidth overflow-hidden'>
      {children}
    </main>
  );
};

export default Main;

import React, { ReactNode } from 'react';

interface Props {
  onContentModalClose: () => void;
  children: ReactNode;
}

const ContentModalContainer: React.FC<Props> = ({ onContentModalClose, children }) => {
  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-75 z-40' onClick={onContentModalClose} />
      <div className='fixed inset-0 flex w-11/12 lg:max-w-screen-lg h-5/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
        {children}
      </div>
    </>
  );
};

export default ContentModalContainer;

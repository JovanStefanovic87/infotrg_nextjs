import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PageContainer: React.FC<Props> = ({ children }) => {
  return <div className='container mx-auto px-3 lg:px-6'>{children}</div>;
};

export default PageContainer;

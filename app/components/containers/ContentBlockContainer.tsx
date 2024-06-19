import React, { ReactNode } from 'react';
import { ContentBlockItem } from '../../helpers/types';

interface ContainerProps {
  contentBlocks: ContentBlockItem[];
  openContentModal: (contentBlocks: ContentBlockItem[]) => void;
  children?: ReactNode;
}

const ContentBlockContainer: React.FC<ContainerProps> = ({
  contentBlocks,
  openContentModal,
  children,
}) => {
  return (
    <div
      className='flex items-center justify-center relative hover:transform hover:scale-105 transition-transform cursor-pointer'
      onClick={() => openContentModal(contentBlocks)}
    >
      {children}
    </div>
  );
};

export default ContentBlockContainer;

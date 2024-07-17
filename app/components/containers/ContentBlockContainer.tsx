import React, { ReactNode } from 'react';
import { ContentBlockItem } from '../../helpers/types';

interface ContainerProps {
  contentBlocks: ContentBlockItem[];
  openContentModal: (contentBlocks: ContentBlockItem[]) => void;
  isLink?: boolean;
  children?: ReactNode;
}

const ContentBlockContainer: React.FC<ContainerProps> = ({
  contentBlocks,
  openContentModal,
  isLink = true,
  children,
}) => {
  return (
    <div
      className={`flex items-stretch justify-center sm:shadow-black sm:shadow-inner rounded-md relative h-full transition-transform transform ${
        isLink && 'sm:hover:scale-105 lg:hover:scale-105 cursor-pointer'
      }`}
      onClick={() => openContentModal(contentBlocks)}
    >
      {children}
    </div>
  );
};

export default ContentBlockContainer;

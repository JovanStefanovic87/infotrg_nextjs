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
      className={`flex items-stretch justify-center rounded-md relative h-full transition-transform transform ${
        isLink && 'sm:hover:scale-95 lg:hover:scale-x-95 cursor-pointer'
      }`}
      onClick={() => openContentModal(contentBlocks)}
    >
      {children}
    </div>
  );
};

export default ContentBlockContainer;

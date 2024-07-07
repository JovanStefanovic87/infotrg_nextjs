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
      className={`flex items-center justify-center relative transition-transform transform ${
        isLink && 'hover:scale-105 lg:hover:scale-105 cursor-pointer'
      } mb-4 lg:mb-0`}
      onClick={() => openContentModal(contentBlocks)}
    >
      {children}
    </div>
  );
};

export default ContentBlockContainer;

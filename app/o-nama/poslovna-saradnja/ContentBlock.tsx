import React from 'react';
import ContentBlockContainer from '../../components/containers/ContentBlockContainer';
import CoverImage from '../../components/image/CoverImage';
import BlockTitle from '../../components/text/BlockTitle';
import { ContentBlockItem } from '../../helpers/types';

interface Props {
  title: string;
  description: string;
  coverImage?: string;
  contentBlocks: ContentBlockItem[];
  openContentModal: (contentBlocks: ContentBlockItem[]) => void;
}

const ContentBlock: React.FC<Props> = ({
  title,
  description,
  coverImage,
  contentBlocks,
  openContentModal,
}) => {
  const maxLines = 6;

  return (
    <ContentBlockContainer contentBlocks={contentBlocks} openContentModal={openContentModal}>
      <div className='cursor-pointer w-full md:p-2 md:h-120 h-auto'>
        <div className='flex flex-col h-full bg-white p-4'>
          <BlockTitle text={title} />
          <div className='text-gray-800 text-base leading-relaxed mb-2 max-w-full flex-grow overflow-hidden'>
            <p className={`line-clamp-${maxLines}`}>{description}</p>
          </div>
          {coverImage && (
            <div className='mt-4'>
              <CoverImage src={coverImage} alt={title} />
            </div>
          )}
          <div className='mt-auto'>
            <button className='text-blue-500 mt-2 border border-blueLight bg-blueLightest px-4 py-2 rounded-md self-start'>
              Vidi još
            </button>
          </div>
        </div>
      </div>
    </ContentBlockContainer>
  );
};

export default ContentBlock;

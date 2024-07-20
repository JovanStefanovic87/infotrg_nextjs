import React from 'react';
import ContentBlockContainer from '../../components/containers/ContentBlockContainer';
import CoverImage from '../../components/image/CoverImage';
import BlockTitle from '../../components/text/BlockTitle';
import { ContentBlockItem } from '../../helpers/types';

interface Props {
  title: string;
  description: string;
  coverImage?: string;
  name: string;
  contentBlocks: ContentBlockItem[];
  openContentModal: (contentBlocks: ContentBlockItem[]) => void;
}

const ContentBlock: React.FC<Props> = ({
  title,
  description,
  coverImage,
  name,
  contentBlocks,
  openContentModal,
}) => {
  const maxLines = 24;

  return (
    <ContentBlockContainer contentBlocks={contentBlocks} openContentModal={openContentModal}>
      <div className='cursor-pointer w-full sm:p-2 h-auto rounded-md overflow-hidden'>
        <div className='flex flex-col h-full bg-gradient-white p-4 rounded-md overflow-hidden'>
          <BlockTitle text={title} align='center' />
          <div className='text-gray-800 text-base leading-relaxed mb-2 max-w-full flex-grow'>
            <p>{description}</p>
          </div>
          {coverImage && (
            <div className='mt-4'>
              <CoverImage src={coverImage} alt={title} />
            </div>
          )}
          <p className='text-center'>Angažovano lice:</p>
          <p className='text-center'>{name}</p>
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

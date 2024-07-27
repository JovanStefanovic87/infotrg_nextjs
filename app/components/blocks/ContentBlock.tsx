import React from 'react';
import ContentBlockContainer from '../containers/ContentBlockContainer';
import CoverImage from '../image/CoverImage';
import { ContentBlockItem } from '../../helpers/types';
import BlockText from '@/app/components/text/BlockText';
import BlockTitleWrap from '@/app/components/text/BlockTitileWrap';

interface Props {
  title: string;
  description: string;
  descriptionAlign?: 'center' | 'left' | 'right';
  coverImage?: string;
  contentBlocks: ContentBlockItem[];
  openContentModal?: (contentBlocks: ContentBlockItem[]) => void;
  isLink?: boolean;
}

const ContentBlock: React.FC<Props> = ({
  title,
  description,
  descriptionAlign = 'center',
  coverImage,
  contentBlocks,
  openContentModal = () => {},
  isLink = true,
}) => {
  return (
    <ContentBlockContainer
      contentBlocks={contentBlocks}
      openContentModal={openContentModal}
      isLink={isLink}
    >
      <div className='cursor-pointer w-full p-2 h-auto rounded-none overflow-auto sm:rounded-md sm:overflow-hidden'>
        <div className='flex flex-col h-full bg-gradient-white p-4 rounded-none overflow-auto sm:rounded-md sm:overflow-hidden'>
          {title && <BlockTitleWrap text={title} />}

          {coverImage && (
            <div className='mt-4'>
              <CoverImage src={coverImage} alt={coverImage} useModal />
            </div>
          )}
          <BlockText description={description} maxLines={2} align={descriptionAlign} />
          {isLink && (
            <div className='mt-auto'>
              <button className='text-blue-500 mt-2 border border-blueLight bg-blueLightest px-4 py-2 rounded-md self-start'>
                Vidi još
              </button>
            </div>
          )}
        </div>
      </div>
    </ContentBlockContainer>
  );
};

export default ContentBlock;

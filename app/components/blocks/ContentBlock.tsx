import React from 'react';
import ContentBlockContainer from '../containers/ContentBlockContainer';
import CoverImage from '../image/CoverImage';
import { ContentBlockItem } from '../../helpers/types';
import BlockText from '@/app/components/text/BlockText';
import BlockTitleWrap from '@/app/components/text/BlockTitileWrap';
import ContentBlockInnerContainer from '../containers/ContentBlockInnerContainer';

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
      <ContentBlockInnerContainer>
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
      </ContentBlockInnerContainer>
    </ContentBlockContainer>
  );
};

export default ContentBlock;

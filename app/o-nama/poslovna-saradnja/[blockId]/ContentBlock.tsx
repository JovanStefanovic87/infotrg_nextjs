'use client';
import React, { useState } from 'react';
import ContentBlockContainer from '../../../components/containers/ContentBlockContainer';
import CoverImage from '../../../components/image/CoverImage';
import { ContentBlockItem } from '../../../helpers/types';
import ImageModal from '@/app/components/modals/ImageModal';
import Devider from '@/app/components/ui/Devider';
import BlockTextFullContent from '@/app/components/text/BlockTextFullContent';

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
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  return (
    <>
      <ContentBlockContainer
        contentBlocks={contentBlocks}
        openContentModal={() => openContentModal}
        isLink={false}
      >
        <div className='cursor-pointer w-full sm:p-2 h-full rounded-md'>
          <div className='flex flex-col h-full bg-white px-4 rounded-md'>
            {coverImage && (
              <div className='mt-4'>
                <CoverImage src={coverImage} alt={title} openImageModal={openImageModal} useModal />
              </div>
            )}
            <BlockTextFullContent description={description} />
          </div>
        </div>
      </ContentBlockContainer>
      <div className='block sm:hidden'>
        <Devider />
      </div>
      {isImageModalOpen && (
        <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
      )}
    </>
  );
};

export default ContentBlock;

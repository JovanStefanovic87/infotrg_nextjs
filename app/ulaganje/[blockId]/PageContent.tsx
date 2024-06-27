'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { contentData, contentBlocksData } from '../contentData';
import ImageModal from '../../components/modals/ImageModal';
import { ContentBlockItem } from '../../helpers/types';
import ImageBlock from '../ImageBlock';
import TextWrapped from '../../components/text/TextWrapped';
import PageTitle from '@/app/components/text/PageTitle';
import PageContainer from '@/app/components/containers/PageContainer';

interface ContentBlocksData {
  [key: string]: ContentBlockItem[];
}

const PageContent: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const pathname = usePathname();
  const blockId: string = pathname.split('/').pop() || '';

  const block = contentData.find((item) => item.id === blockId);
  const contentBlocks = (contentBlocksData as ContentBlocksData)[blockId] || [];

  if (!block) return <p>Block not found</p>;

  return (
    <PageContainer>
      <PageTitle title={block.title} />
      <div className='relative pt-6 bg-white shadow-md rounded-lg p-4'>
        {contentBlocks.map((block, index) => (
          <div key={index} className='mb-6'>
            {block.type === 'text' ? (
              typeof block.content === 'string' ? (
                <TextWrapped block={block.content} />
              ) : (
                block.content.map((paragraph, paraIndex) => (
                  <TextWrapped key={paraIndex} block={paragraph} />
                ))
              )
            ) : block.type === 'image' ? (
              Array.isArray(block.content) ? (
                block.content.map((image, imgIndex) => (
                  <ImageBlock
                    key={imgIndex}
                    image={image}
                    imgIndex={imgIndex}
                    openImageModal={openImageModal}
                  />
                ))
              ) : (
                <ImageBlock
                  key={index}
                  image={block.content as string}
                  imgIndex={index}
                  openImageModal={openImageModal}
                />
              )
            ) : null}
          </div>
        ))}
      </div>
      {isImageModalOpen && (
        <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
      )}
    </PageContainer>
  );
};

export default PageContent;

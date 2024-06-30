'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { contentData, contentBlocksData } from '../contentData';
import ImageModal from '../../components/modals/ImageModal';
import ImageBlock from '../ImageBlock';
import TextWrapped from '../../components/text/TextWrapped';
import PageTitle from '@/app/components/text/PageTitle';
import PageContainer from '@/app/components/containers/PageContainer';
import Devider from '@/app/components/ui/Devider';
import OrderedList from '@/app/components/text/OrderedList';
import TitleSecond from '@/app/components/text/TitleSecond';
import TextBoldCenter from '@/app/components/text/TextBoldCenter';

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
  const contentBlocks = (contentBlocksData as any)[blockId] || [];

  if (!block) return <p>Block not found</p>;

  return (
    <PageContainer>
      <PageTitle title={block.title} />
      <div className='relative pt-6 bg-white shadow-md rounded-lg p-4'>
        {contentBlocks.length > 0 &&
          contentBlocks.map((block: any, index: number) => (
            <div key={index} className='mb-6'>
              {block.type === 'text' ? (
                <TextWrapped block={block.content || ''} />
              ) : block.type === 'image' ? (
                Array.isArray(block.url) ? (
                  block.url.map((image: string, imgIndex: number) => (
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
                    image={block.content || ''}
                    imgIndex={index}
                    openImageModal={openImageModal}
                  />
                )
              ) : block.type === 'devider' ? (
                <Devider />
              ) : block.type === 'paragraph1' || block.type === 'paragraph2' ? (
                <TextWrapped block={block.content || ''} />
              ) : block.type === 'hr' ? (
                <Devider />
              ) : block.type === 'list' ? (
                <OrderedList items={[block]} />
              ) : block.type === 'h2' ? (
                <TitleSecond text={block.content} />
              ) : block.type === '2XLboldCenter' ? (
                <TextBoldCenter text={block.content} />
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

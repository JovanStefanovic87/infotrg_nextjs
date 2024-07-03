'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { investicioniFondLinksData, contentBlocksData } from './investicioniFondData';
import ImageModal from '../../../components/modals/ImageModal';
import ImageBlock from '../../ImageBlock';
import TextWrapped from '../../../components/text/TextWrapped';
import H1 from '@/app/components/text/H1';
import PageContainer from '@/app/components/containers/PageContainer';
import Devider from '@/app/components/ui/Devider';
import OrderedList from '@/app/components/text/OrderedList';
import H2 from '@/app/components/text/H2';
import H2BoldCenter from '@/app/components/text/H2BoldCenter';
import H3 from '@/app/components/text/H3';
import H4 from '@/app/components/text/H4';
import TextBold from '@/app/components/text/TextBold';

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

  const block = investicioniFondLinksData.find((item) => item.id === blockId);
  const contentBlocks = (contentBlocksData as any)[blockId] || [];

  if (!block) return <p>Block not found</p>;

  return (
    <PageContainer>
      <H1 title={'Investicioni fond'} />
      <div className='relative pt-6 bg-white shadow-md rounded-lg p-4'>
        <H2BoldCenter text={block.listOrder} />
        <H2BoldCenter text={`${block.label}`} />
        <TextBold text={block.amount} align='center' />
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
                <H2 text={block.content} align='center' />
              ) : block.type === '2XLboldCenter' ? (
                <H2BoldCenter text={block.content} />
              ) : block.type === 'h3' ? (
                <H3 text={block.content} />
              ) : block.type === 'h4' ? (
                <H4 text={block.content} />
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

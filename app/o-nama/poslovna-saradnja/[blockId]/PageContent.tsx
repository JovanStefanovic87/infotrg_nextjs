'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { fullDescriptionDataLinksData, contentBlocksData } from './fullDescriptionData';
import ImageModal from '../../../components/modals/ImageModal';
import ImageBlockWithDescription from '../../../components/image/ImageBlockWithDescription';
import TextWrapped from '../../../components/text/TextWrapped';
import H1 from '@/app/components/text/H1';
import PageContainer from '@/app/components/containers/PageContainer';
import Devider from '@/app/components/ui/Devider';
import OrderedList from '@/app/components/text/OrderedList';
import H2 from '@/app/components/text/H2';
import Text from '@/app/components/text/Text';
import ContentBlock from '../ContentBlock';

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

  const block = fullDescriptionDataLinksData.find((item) => item.id === blockId);

  const contentBlocks = (contentBlocksData as any)[blockId] || [];

  if (!block) return <p>Block not found</p>;

  return (
    <PageContainer>
      <H1 title='Poslovna saradnja' />
      <div className='relative pt-6 bg-white shadow-md rounded-lg p-4'>
        <H2 text={block.label.toUpperCase()} weight='bold' align='center' padding={4} />
        <div className='flex flex-wrap'>
          {contentBlocks.length > 0 &&
            contentBlocks.map((block: any, index: number) => (
              <div key={index} className='mb-6'>
                <ContentBlock
                  title={block.title}
                  description={block.description}
                  coverImage={block.coverImage}
                  contentBlocks={[]}
                  openContentModal={() => {}}
                />
              </div>
            ))}
        </div>
        {isImageModalOpen && (
          <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
        )}
      </div>
    </PageContainer>
  );
};

export default PageContent;

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
import H2Title from '@/app/components/text/H2Title';
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
      <H1 title='POSLOVNA SARADNJA' />
      <div className='p-2'>
        <H2Title text={block.label.toUpperCase()} padding={10} />
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-0 sm:gap-8 bg-white sm:bg-transparent
        }`}
      >
        {contentBlocks.length > 0 &&
          contentBlocks.map((block: any, index: number) => (
            <div key={index}>
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
    </PageContainer>
  );
};

export default PageContent;

'use client';
import React, { useState, useEffect } from 'react';
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
  const [columns, setColumns] = useState(0); // Initialize columns with 0

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setColumns(3); // xl: 3 columns
      } else if (width >= 1024) {
        setColumns(2); // lg: 2 columns
      } else if (width >= 768) {
        setColumns(2); // md: 2 columns
      } else {
        setColumns(1); // sm and below: 1 column
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

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

  const renderGrid = () => {
    // Render nothing if columns aren't calculated yet
    if (columns === 0) return null;

    const rows: JSX.Element[] = [];
    for (let i = 0; i < contentBlocks.length; i += columns) {
      const rowItems = contentBlocks.slice(i, i + columns);
      rows.push(
        <div key={i} className={`grid grid-cols-${rowItems.length} gap-0 sm:gap-8`}>
          {rowItems.map((block: any, index: number) => (
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
        </div>,
      );
    }
    return rows;
  };

  return (
    <PageContainer>
      <H1 title='POSLOVNA SARADNJA' pb={0} />
      <div className='px-2 pb-4 sm:pb-8'>
        <H2Title text={block.label.toUpperCase()} padding={10} />
      </div>
      {/* Conditionally render grid content */}
      {columns > 0 && <div className='bg-white sm:bg-transparent'>{renderGrid()}</div>}
      {isImageModalOpen && (
        <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
      )}
    </PageContainer>
  );
};

export default PageContent;

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
import ContentBlock from './ContentBlock';

const PageContent: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [columns, setColumns] = useState<number | null>(null); // Initialize columns as null

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

  if (!block || columns === null) return null; // Render nothing until columns are calculated

  const renderGrid = () => {
    const rows: JSX.Element[] = [];
    const totalBlocks = contentBlocks.length;
    const maxColumns = Math.min(columns, totalBlocks); // Ensure we don't exceed the number of content blocks

    for (let i = 0; i < totalBlocks; i += maxColumns) {
      const rowItems = contentBlocks.slice(i, i + maxColumns);
      const colWidth = `calc(${100 / maxColumns}% - 1rem)`; // Adjust spacing as needed

      rows.push(
        <div key={i} className="grid" style={{ gridTemplateColumns: `repeat(${maxColumns}, ${colWidth})`, gap: '0px' }}>
          {rowItems.map((block: any, index: number) => {
            // Calculate column span based on available items and empty cells
            const remainingColumns = maxColumns - rowItems.length;
            const colSpan = remainingColumns > 0 ? maxColumns : 1;

            return (
              <div key={index} style={{ gridColumn: `span ${colSpan}`}}>
                <ContentBlock
                  title={block.title}
                  description={block.description}
                  coverImage={block.coverImage}
                  contentBlocks={[]}
                  openContentModal={() => openImageModal(block.coverImage)}
                />
              </div>
            );
          })}
        </div>,
      );
    }
    return rows;
  };

  return (
    <PageContainer>
      <H1 title='POSLOVNA SARADNJA' />
      <div className='p-2'>
        <H2Title text={block.label.toUpperCase()} padding={10} />
      </div>
      <div className='bg-white sm:bg-transparent'>{renderGrid()}</div>
      {isImageModalOpen && (
        <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
      )}
    </PageContainer>
  );
};

export default PageContent;

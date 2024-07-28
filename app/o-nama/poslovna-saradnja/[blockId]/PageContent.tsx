'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { fullDescriptionDataLinksData, contentBlocksData } from './fullDescriptionData';
import ImageModal from '../../../components/modals/ImageModal';
import H1 from '@/app/components/text/H1';
import PageContainer from '@/app/components/containers/PageContainer';
import H2Title from '@/app/components/text/H2Title';
import ContentBlock from '@/app/components/blocks/ContentBlock';
import renderGridSystem2 from '@/app/helpers/renderGridSystem2';

const PageContent: React.FC = () => {
  const [columns, setColumns] = useState<number | null>(null);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setColumns(3);
      } else if (width >= 1024) {
        setColumns(2);
      } else if (width >= 768) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pathname = usePathname();
  const blockId: string = pathname.split('/').pop() || '';

  const block = fullDescriptionDataLinksData.find((item) => item.id === blockId);

  const contentBlocks = (contentBlocksData as any)[blockId] || [];

  if (!block || columns === null) return null;

  return (
    <PageContainer>
      <H1 title='POSLOVNA SARADNJA' pb='0' />
      <div className='pb-4 sm:pb-10'>
        <H2Title text={block.label.toUpperCase()} padding={10} />
      </div>
      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden'>
        {renderGridSystem2({
          contentBlocks,
          columns,
          renderBlock: (block) => (
            <ContentBlock
              title={''}
              description={block.description}
              coverImage={block.coverImage}
              contentBlocks={[]}
              openContentModal={() => {}}
              isLink={false}
            />
          ),
        })}
      </div>
    </PageContainer>
  );
};

export default PageContent;

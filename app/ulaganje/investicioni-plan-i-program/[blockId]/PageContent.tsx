'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { contentData, contentBlocksData } from './investPlan';
import H1 from '@/app/components/text/H1';
import PageContainer from '@/app/components/containers/PageContainer';
import H2Title from '@/app/components/text/H2Title';
import ContentBlockImageNumber from '@/app/components/blocks/ContentBlockImageNumber';
import renderGridSystem2 from '@/app/helpers/renderGridSystem2';
import useScrollToTop from '@/app/helpers/useScrollToTop';

const PageContent: React.FC = () => {
  useScrollToTop();
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

  const pathname = usePathname();
  const blockId: string = pathname.split('/').pop() || '';

  const block = contentData.find((item) => item.id === blockId);
  const contentBlocks = (contentBlocksData as any)[blockId] || [];

  if (!block || columns === null) return null;

  return (
    <PageContainer>
      <H1 title='INVESTICIONI PLAN I PROGRAM' pb='0' />
      <div className='pb-4 sm:pb-10'>
        <H2Title text={block.title.toUpperCase()} padding={10} />
      </div>
      {renderGridSystem2({
        contentBlocks,
        columns,
        useLink: block.isLink,
        children: (block) => (
          <ContentBlockImageNumber
            title={block.title}
            description={block.description}
            coverImage={block.coverImage}
            contentBlocks={[]}
            openContentModal={() => {}}
            isLink={block.isLink}
          />
        ),
      })}
    </PageContainer>
  );
};

export default PageContent;

'use client';
import React, { useState, useEffect } from 'react';
import ContentBlockWithModal from '@/app/components/blocks/ContentBlockWithModal';
import H2Title from '@/app/components/text/H2Title';
import renderGridSystem from '@/app/helpers/renderGridSystem';
import useScrollToTop from '@/app/helpers/useScrollToTop';

interface Props {
  contentData: any[];
  title: string;
  id: string;
}

const InfotrgPlatform: React.FC<Props> = ({ contentData, title, id }) => {
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

  if (columns === null) return null;

  return (
    <div className='mt-4' id={id}>
      <div className='p-2'>
        <H2Title text={title} padding={10} />
      </div>
      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden'>
        {renderGridSystem({
          contentData,
          columns: columns,
          useLink: false,
          children: (block) => (
            <ContentBlockWithModal
              title={block.title}
              description={block.description || ''}
              coverImage={block.coverImage}
              contentBlocks={[]}
              openContentModal={() => {}}
              content={block.content}
            />
          ),
        })}
      </div>
    </div>
  );
};

export default InfotrgPlatform;

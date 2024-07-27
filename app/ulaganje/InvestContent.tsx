'use client';
import React, { useState, useEffect } from 'react';
import { contentData, mapIdToPath } from './ulaganjeData';
import ContentBlock from '../components/blocks/ContentBlock';
import H1 from '../components/text/H1';
import PageContainer from '../components/containers/PageContainer';
import renderGridSystem from '@/app/helpers/renderGridSystem';
import H2 from '../components/text/H2';

const InvestContent: React.FC = () => {
  const [columns, setColumns] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <PageContainer>
      <H1 title='ULAGANJE U INFOTRG' pb='2rem' />
      <div className='flex flex-col items-center bg-mainWhite rounded-lg p-6 shadow-lg mb-4'>
        <H2
          text='Infotrgov investicioni program omogućava svakom fizičkom licu sticanje vlasničkog udela u poslovnom projektu, uz minimalnu mesečnu zaradu od 10% na uložena sredstva i garanciju povrata uloženog novca u slučaju raskida suvlasničkog odnosa.'
          align='center'
          color='black'
        />
      </div>
      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden mb-4'>
        {renderGridSystem({
          contentData,
          columns: columns,
          useLink: true,
          mapIdToPath: (id: string) => mapIdToPath(id),
          children: (block) => (
            <ContentBlock
              title={block.title}
              description={block.description}
              coverImage={block.coverImage}
              contentBlocks={[]}
              openContentModal={() => {}}
            />
          ),
        })}
      </div>
    </PageContainer>
  );
};

export default InvestContent;

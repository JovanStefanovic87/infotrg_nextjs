'use client';
import React, { useState, useEffect } from 'react';
import { contentData, listOfLinks } from './BussinessCooperationData';
import ContentBlock from './ContentBlock';
import H1 from '../../components/text/H1';
import PageContainer from '../../components/containers/PageContainer';
import H2Title from '@/app/components/text/H2Title';
import Devider from '@/app/components/ui/Devider';
import UnorderedList from '@/app/components/text/UnorderedList';

const BussinessCooperation: React.FC = () => {
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

  const renderGrid = () => {
    const rows: JSX.Element[] = [];
    const totalBlocks = contentData.length;
    const maxColumns = Math.min(columns, totalBlocks);

    for (let i = 0; i < totalBlocks; i += maxColumns) {
      const rowItems = contentData.slice(i, i + maxColumns);
      const colWidth = `calc(${100 / maxColumns}%)`;

      rows.push(
        <div
          key={i}
          className='grid items-stretch content-stretch justify-stretch'
          style={{ gridTemplateColumns: `repeat(${maxColumns}, ${colWidth})` }}
        >
          {rowItems.map((block: any, index: number) => {
            const remainingColumns = maxColumns - rowItems.length;
            const colSpan = remainingColumns > 0 ? maxColumns : 1;

            return (
              <div key={index} style={{ gridColumn: `span ${colSpan}` }}>
                <ContentBlock
                  title={''}
                  description={block.description}
                  coverImage={block.coverImage}
                  contentBlocks={[]}
                  openContentModal={() => {}}
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
      <H1 title='POSLOVNA SARADNJA' pb='0' />
      <div className='p-2 pb-4 sm:pb-10'>
        <H2Title text='SAŽET PRIKAZ POSLOVNE SARADNJE' padding={10} />
      </div>
      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden mb-4'>
        {renderGrid()}
      </div>
      <H2Title text='OPŠIRNIJI PRIKAZ POSLOVNE SARADNJE' padding={24} />
      <div className='flex bg-white p-8 items-start md:items-center rounded-md'>
        <UnorderedList items={listOfLinks} />
      </div>
    </PageContainer>
  );
};

export default BussinessCooperation;

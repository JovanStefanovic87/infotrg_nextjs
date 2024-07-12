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

  if (columns === null) return null; // Render nothing until columns are calculated

  const renderGrid = () => {
    const rows: JSX.Element[] = [];
    const totalBlocks = contentData.length;
    const maxColumns = Math.min(columns, totalBlocks); // Ensure we don't exceed the number of content blocks

    for (let i = 0; i < totalBlocks; i += maxColumns) {
      const rowItems = contentData.slice(i, i + maxColumns);
      const colWidth = `calc(${100 / maxColumns}% - 1rem)`; // Adjust spacing as needed

      rows.push(
        <div
          key={i}
          className='grid items-stretch content-stretch justify-stretch'
          style={{ gridTemplateColumns: `repeat(${maxColumns}, ${colWidth})` }}
        >
          {rowItems.map((block: any, index: number) => {
            // Calculate column span based on available items and empty cells
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
      <div className='bg-white sm:bg-transparent'>{renderGrid()}</div>
      <div className='py-8'>
        <Devider />
      </div>
      <H2Title text='OPŠIRNIJI PRIKAZ POSLOVNE SARADNJE' padding={24} />
      <div className='flex flex-col bg-white p-8 items-start md:items-center rounded-md'>
        <UnorderedList items={listOfLinks} />
      </div>
    </PageContainer>
  );
};

export default BussinessCooperation;

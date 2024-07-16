'use client';
import React, { useState, useEffect } from 'react';
import { contentData, listOfLinks } from './BussinessPlanData';
import ContentBlock from './ContentBlock';
import H1 from '../../components/text/H1';
import PageContainer from '../../components/containers/PageContainer';
import H2Title from '@/app/components/text/H2Title';
import ContentBlockLinks from './ContentBlockLinks';
import Link from 'next/link';
import Devider2 from '@/app/components/ui/Devider2';

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
    const maxColumns = Math.min(columns || 1, 3);

    let rowIndex = 0;

    while (rowIndex < totalBlocks) {
      const rowItems = contentData.slice(rowIndex, rowIndex + maxColumns);

      let colWidth;
      if (rowItems.length === 1) {
        colWidth = `100%`;
      } else if (rowItems.length === 2) {
        colWidth = `50%`;
      } else {
        colWidth = `calc(${100 / maxColumns}%)`;
      }

      rows.push(
        <div
          key={rowIndex}
          className='grid items-stretch content-stretch justify-stretch'
          style={{ gridTemplateColumns: `repeat(${rowItems.length}, ${colWidth})` }}
        >
          {rowItems.map((block: any, index: number) => (
            <div key={index} style={{ gridColumn: `span 1` }}>
              <ContentBlock
                title={''}
                description={block.description}
                date={block.date}
                coverImage={block.coverImage}
                contentBlocks={[]}
                openContentModal={() => {}}
              />
            </div>
          ))}
        </div>,
      );

      rowIndex += maxColumns;
    }

    return rows;
  };

  const renderGridLinks = () => {
    const rows: JSX.Element[] = [];
    const totalBlocks = listOfLinks.length;
    const maxColumns = Math.min(columns || 1, 3);

    let rowIndex = 0;

    while (rowIndex < totalBlocks) {
      const rowItems = listOfLinks.slice(rowIndex, rowIndex + maxColumns);

      let colWidth;
      if (rowItems.length === 1) {
        colWidth = `100%`;
      } else if (rowItems.length === 2) {
        colWidth = `50%`;
      } else {
        colWidth = `calc(${100 / maxColumns}%)`;
      }

      rows.push(
        <div
          key={rowIndex}
          className='grid items-stretch content-stretch justify-stretch'
          style={{ gridTemplateColumns: `repeat(${rowItems.length}, ${colWidth})` }}
        >
          {rowItems.map((block) => (
            <Link key={block.id} href={`/o-nama/plan-i-program-poslovanja/${block.id}`}>
              <ContentBlockLinks
                title={block.title}
                description={block.description}
                contentBlocks={[]}
                openContentModal={() => {}}
              />
            </Link>
          ))}
          <div className='flex sm:hidden'>
            <Devider2 marginY={4} />
          </div>
        </div>,
      );

      rowIndex += maxColumns;
    }

    return rows;
  };

  return (
    <PageContainer>
      <H1 title='PLAN I PROGRAM POSLOVANJA' pb='0' />
      <div className='p-2 pb-4 sm:pb-10'>
        <H2Title text='SAŽET PRIKAZ PLANA I PROGRAMA POSLOVANJA' padding={10} />
      </div>
      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden mb-4'>
        {renderGrid()}
      </div>
      <H2Title text='OPŠIRNIJI PRIKAZ PLANA I PROGRAMA POSLOVANJA' padding={24} />
      <div className='bg-transparent rounded-md overflow-hidden mb-4'>{renderGridLinks()}</div>
    </PageContainer>
  );
};

export default BussinessCooperation;

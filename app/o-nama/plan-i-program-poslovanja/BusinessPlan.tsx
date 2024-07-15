'use client';
import React, { useState, useEffect } from 'react';
import { contentData, listOfLinks } from './BussinessPlanData';
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
    const maxColumns = Math.min(columns || 1, 3); // Maksimalno tri kolone po redu

    let rowIndex = 0;

    while (rowIndex < totalBlocks) {
      const rowItems = contentData.slice(rowIndex, rowIndex + maxColumns);

      // Izračunavamo širinu svake kolone tako da odgovara širini reda, bez obzira na broj blokova u redu
      let colWidth;
      if (rowItems.length === 1) {
        colWidth = `100%`; // Jedan blok u redu zauzima sve tri kolone
      } else if (rowItems.length === 2) {
        colWidth = `50%`; // Dva bloka u redu dele dve kolone po pola
      } else {
        colWidth = `calc(${100 / maxColumns}%)`; // Tri bloka u redu dele tri kolone po jedna
      }

      rows.push(
        <div
          key={rowIndex}
          className='grid items-stretch content-stretch justify-stretch'
          style={{ gridTemplateColumns: `repeat(${rowItems.length}, ${colWidth})` }}
        >
          {/* Mapiramo blokove u trenutnom redu */}
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
        </div>
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
      <H2Title text='OPŠIRNIJI PRIKAZ POSLOVNE SARADNJE' padding={24} />
      <div className='sm:p-2'>
        <div className='flex justify-center bg-gradient-white p-8 items-start md:items-center rounded-md'>
          <UnorderedList items={listOfLinks} />
        </div>
      </div>
    </PageContainer>
  );
};

export default BussinessCooperation;

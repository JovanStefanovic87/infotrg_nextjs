'use client';
import React, { useState, useEffect } from 'react';
import ContentBlock from './ContentBlock';
import H2Title from '@/app/components/text/H2Title';

interface Props {
  contentData: any[];
  title: string;
  id: string;
}

const InfotrgPlatform: React.FC<Props> = ({ contentData, title, id }) => {
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
        colWidth = `calc(${100}%)`;
      } else if (rowItems.length === 2) {
        colWidth = `calc(${50}%)`;
      } else {
        colWidth = `calc(${100 / maxColumns}%)`;
      }

      rows.push(
        <div
          key={rowIndex}
          className='grid sm:grid-cols-2 md:grid-cols-3'
          style={{ gridTemplateColumns: `repeat(${maxColumns}, ${colWidth})` }}
        >
          {rowItems.map((block: any, index: number) => (
            <div key={index} style={{ gridColumn: `span 1` }}>
              <ContentBlock
                title={block.title}
                description={block.description}
                coverImage={block.coverImage}
                contentBlocks={[]}
              />
            </div>
          ))}

          {Array(maxColumns - rowItems.length)
            .fill(null)
            .map((_, emptyIndex) => (
              <div key={`empty-${emptyIndex}`} />
            ))}
        </div>,
      );

      rowIndex += maxColumns;
    }

    return rows;
  };

  return (
    <div className='mt-4' id={id}>
      <div className='p-2'>
        <H2Title text={title} padding={10} />
      </div>
      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden'>{renderGrid()}</div>
    </div>
  );
};

export default InfotrgPlatform;

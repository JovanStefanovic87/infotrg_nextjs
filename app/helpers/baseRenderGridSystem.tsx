import React from 'react';
import { BasicInformation } from './types';

interface BaseProps {
  contentData: BasicInformation[];
  columns?: number;
  children: (block: BasicInformation) => React.ReactNode;
  mapIdToPath: (id: string) => string;
}

const baseRenderGridSystem = ({ contentData, columns = 1, children, mapIdToPath }: BaseProps) => {
  const rows: JSX.Element[] = [];
  const totalBlocks = contentData.length;
  const maxColumns = Math.min(columns, 3);

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
        {rowItems.map((block) => (
          <div key={block.id} style={{ gridColumn: `span 1` }}>
            {children(block)}
          </div>
        ))}
      </div>,
    );

    rowIndex += maxColumns;
  }

  return <div className='bg-white sm:bg-transparent rounded-md overflow-hidden mb-4'>{rows}</div>;
};

export default baseRenderGridSystem;

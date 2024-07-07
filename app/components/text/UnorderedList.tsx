import React from 'react';
import Link from 'next/link';
import { ListOfLinksData, ListOfLinks } from '../../helpers/types'; // Adjust the path as per your project structure
import { hyperlinks } from '../../ulaganje/ulaganjeData'; // Adjust the path as per your project structure
import { isTextHyperlinked } from '../../helpers/universalFunctions';

interface Props {
  items: ListOfLinksData[];
}

const UnorderedList: React.FC<Props> = ({ items }) => {
  const renderListItem = (item: ListOfLinks, index: number) => {
    switch (item.type) {
      case 'H2BoldCenter':
        return (
          <h2 className='font-bold text-center mb-4' key={index}>
            {item.text}
          </h2>
        );
      case 'h3':
        return (
          <h3 className='font-semibold mb-2' key={index}>
            {item.text}
          </h3>
        );
      case 'H3BoldCenter':
        return (
          <h3 className='font-bold text-center mb-2' key={index}>
            {item.text}
          </h3>
        );
      case 'h4':
        return (
          <h4 className='font-semibold mb-1' key={index}>
            {item.text}
          </h4>
        );
      case 'text':
        return (
          <p className='mb-2' key={index}>
            {item.text}
          </p>
        );
      case 'divider':
        return <hr className='my-4' key={index} />;
      case 'list':
        // Implement list rendering logic here if needed
        return null;
      case 'p':
        return (
          <p className='mb-2' key={index}>
            {item.text}
          </p>
        );
      case 'hr':
        return <hr className='my-4' key={index} />;
      default:
        return null;
    }
  };

  return (
    <div className='space-y-4'>
      {items.map((list, index) => (
        <div key={index}>
          {Object.keys(list).map((key) => {
            const listItem = list[key];
            return renderListItem(listItem, index);
          })}
        </div>
      ))}
    </div>
  );
};

export default UnorderedList;

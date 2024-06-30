import React from 'react';
import { ContentBlockItem } from '../../helpers/types';

interface Props {
  items: ContentBlockItem[];
}

const OrderedList: React.FC<Props> = ({ items }) => {
  return (
    <div className='space-y-4'>
      {items.map((item, index) => (
        <div key={index}>
          {item.listContent?.map((listItem, listIndex) => (
            <div key={listIndex} className='mb-4 pt-4'>
              {listItem.type === 'paragraph1' && (
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-2 border-b border-dotted border-gray-700'>
                  <div className='font-bold mb-2 md:mb-0 flex-1'>{`${listIndex}. ${listItem.text}`}</div>
                  <div className='text-right font-bold w-full lg:w-auto'>{listItem.amount}</div>
                </div>
              )}
              {listItem.type === 'paragraph1' && listItem.subitems && (
                <div className='pl-4'>
                  {listItem.subitems.map((subItem, subIndex) => (
                    <div
                      key={`${listIndex}-${subIndex}`}
                      className='border-b border-dotted border-gray-400 pt-2'
                    >
                      <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='font-normal mb-2 md:mb-0 w-full'>{`${listIndex}.${
                          subIndex + 1
                        } ${subItem.text}`}</div>
                        <div className='w-full text-right'>{subItem.amount}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrderedList;

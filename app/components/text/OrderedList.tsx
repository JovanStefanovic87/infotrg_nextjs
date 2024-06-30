import React from 'react';
import { ContentBlockItem } from '../../helpers/types';
import { hyperlinks } from '../../ulaganje/contentData';
import { isTextHyperlinked } from '../../helpers/universalFunctions';
import Link from 'next/link';

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
                  <div className='font-bold mb-2 md:mb-0 flex-1 text-grayDarkest'>{`${listIndex}. ${listItem.text}`}</div>
                  <div className='text-right font-bold w-full md:w-auto text-grayDarkest'>
                    {listItem.amount}
                  </div>
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
                        <div className='font-normal mb-2 md:mb-0 w-full'>
                          {`${listIndex}.${subIndex + 1} `}
                          {isTextHyperlinked(subItem.text, hyperlinks) ? (
                            <Link href={isTextHyperlinked(subItem.text, hyperlinks) as string}>
                              <span className='text-blue-500 underline text-hyperlink'>
                                {subItem.text}
                              </span>
                            </Link>
                          ) : (
                            subItem.text
                          )}
                        </div>
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

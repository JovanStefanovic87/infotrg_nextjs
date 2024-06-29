import React from 'react';

interface Paragraph1 {
  type: 'paragraph1';
  text: string;
  amount: string;
}

interface Paragraph2 {
  type: 'paragraph2';
  text: string;
  amount: string;
}

interface Props {
  items: (Paragraph1 | Paragraph2)[];
}

const OrderedList: React.FC<Props> = ({ items }) => {
  console.log(items);
  return (
    <div className='space-y-4'>
      {items.map((item, index) => {
        if (item.type === 'paragraph1') {
          return (
            <div key={index}>
              <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-2 border-b border-dotted border-gray-700'>
                <div className='font-bold mb-2 md:mb-0 w-full'>{`${index}. ${item.text}`}</div>
                <div className='w-full text-right font-bold'>{item.amount}</div>
              </div>
              <div className='pl-4'>
                {items
                  .filter((subItem) => subItem.type === 'paragraph2')
                  .map((subItem, subIndex) => (
                    <div
                      key={`${index}-${subIndex}`}
                      className='border-b border-dotted border-gray-400 pt-2'
                    >
                      <div className='flex flex-col md:flex-row items-center justify-between '>
                        <div className='font-normal mb-2 md:mb-0 w-full'>{`${index}.${
                          subIndex + 1
                        }. ${subItem.text}`}</div>
                        <div className={'w-full text-right'}>{subItem.amount}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default OrderedList;

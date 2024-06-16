'use client';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';

interface ContentBlockItem {
  type: 'text' | 'image';
  content: string;
}

type Props = {
  title: string;
  content: string;
  images: string[];
  contentBlocks: ContentBlockItem[];
  openModal: (image: string, title: string) => void;
};

const CollapsibleContentBlock: React.FC<Props> = ({
  title,
  content,
  images,
  openModal,
  contentBlocks,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  console.log(contentBlocks);

  return (
    <div className='border-b border-gray-300 my-4'>
      <button
        onClick={toggleContent}
        className='w-full flex justify-between items-center text-left py-4 px-6 bg-gray-200 hover:bg-gray-300 focus:outline-none'
      >
        <h2 className='text-lg font-semibold'>{title}</h2>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-content' : 'max-h-0'
        }`}
      >
        <div className='py-4 px-6 bg-gray-100'>
          {contentBlocks &&
            contentBlocks.map((block, index) => (
              <div key={index}>
                {block.type === 'text' ? (
                  <p className='text-gray-800'>{block.content}</p>
                ) : (
                  <div className='flex flex-wrap'>
                    {Array.isArray(block.content) &&
                      block.content.map((imagePath, imgIndex) => (
                        <div
                          key={imgIndex}
                          className='cursor-pointer w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 p-2'
                          onClick={() => openModal(imagePath, title)}
                        >
                          <div
                            className='relative w-full mb-4 cursor-pointer'
                            style={{ paddingBottom: '100%' }}
                          >
                            <Image
                              src={imagePath}
                              alt={`Image ${index + 1}`}
                              layout='fill'
                              objectFit='cover'
                              className='rounded-lg shadow-md'
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleContentBlock;

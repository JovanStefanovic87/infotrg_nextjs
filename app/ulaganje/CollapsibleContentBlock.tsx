'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import CollapsibleContentBlockConainer from '../components/containers/CollapsibleContentBlockConainer';
import CollapsibleContentBlockButton from '../components/buttons/ColsapsibleContentBlockToggleButton';

interface ContentBlockItem {
  type: 'text' | 'image';
  content: string | string[];
}

type Props = {
  title: string;
  contentBlocks: ContentBlockItem[];
  openModal: (image: string, title: string) => void;
};

const CollapsibleContentBlock: React.FC<Props> = ({ title, openModal, contentBlocks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string | undefined>(() => (isOpen ? 'auto' : '0px'));

  const updateMaxHeight = useCallback(() => {
    setMaxHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : '0px');
  }, [isOpen]);

  useEffect(() => {
    setMaxHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : '0px');
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      updateMaxHeight();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateMaxHeight]);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CollapsibleContentBlockConainer>
      <CollapsibleContentBlockButton title={title} isOpen={isOpen} onClick={toggleContent} />
      <div
        className='overflow-hidden transition-max-height duration-500 ease-in-out'
        style={{ maxHeight }}
      >
        <div ref={contentRef} className='py-4 px-6 bg-gray-100 flex flex-col items-center'>
          {contentBlocks &&
            contentBlocks.map((block, index) => (
              <div key={index} className='w-full flex flex-col items-center'>
                {block.type === 'text' ? (
                  <p className='text-gray-800 break-words w-full text-base leading-relaxed mt-2 mb-4 max-w-xl'>
                    {block.content}
                  </p>
                ) : (
                  <div className='flex flex-wrap justify-center items-center'>
                    {Array.isArray(block.content) &&
                      block.content.map((imagePath, imgIndex) => (
                        <div
                          key={imgIndex}
                          className='cursor-pointer p-2'
                          onClick={() => openModal(imagePath, title)}
                        >
                          <div className='relative w-full'>
                            <Image
                              src={imagePath}
                              alt={`Image ${index + 1}`}
                              width={300}
                              height={300}
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
    </CollapsibleContentBlockConainer>
  );
};

export default CollapsibleContentBlock;

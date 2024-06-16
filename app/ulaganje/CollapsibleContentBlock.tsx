'use client';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import CollapsibleContentBlockContainer from '../components/containers/CollapsibleContentBlockConainer';

interface ContentBlockItem {
  type: 'text' | 'image';
  content: string | string[];
}

interface Props {
  title: string;
  openModal: (image: string, title: string) => void;
  contentBlocks: ContentBlockItem[];
}

const CollapsibleContentBlock: React.FC<Props> = ({ title, openModal, contentBlocks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CollapsibleContentBlockContainer>
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
          {contentBlocks.map((block, index) => {
            if (block.type === 'text') {
              return <p key={index}>{block.content as string}</p>;
            }
            if (block.type === 'image') {
              return (block.content as string[]).map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className='relative w-full mb-4 cursor-pointer'
                  onClick={() => openModal(img, title)}
                >
                  <Image src={img} alt={`${title}-${imgIndex}`} width={720} height={480} />
                </div>
              ));
            }
          })}
        </div>
      </div>
    </CollapsibleContentBlockContainer>
  );
};

export default CollapsibleContentBlock;

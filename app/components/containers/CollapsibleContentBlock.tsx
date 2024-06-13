'use client';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';

type Props = {
  title: string;
  content: string;
  images: string[];
  openModal: (image: string, title: string) => void;
};

const CollapsibleContentBlock: React.FC<Props> = ({ title, content, images, openModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

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
          {images.map((img, index) => (
            <div
              key={index}
              className='relative w-full mb-4 cursor-pointer'
              onClick={() => openModal(img, title)}
            >
              <Image src={img} alt={`${title}-${index}`} width={720} height={480} />
            </div>
          ))}
          <div>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleContentBlock;

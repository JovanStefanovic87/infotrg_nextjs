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
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className='py-4 px-6 bg-gray-100'>
          {isOpen && (
            <>
              {images.map((img, index) => (
                <div
                  key={index}
                  className='relative w-full h-64 mb-4 cursor-pointer'
                  onClick={() => openModal(img, title)}
                >
                  <Image src={img} alt={`${title}-${index}`} layout='fill' objectFit='cover' />
                </div>
              ))}
              <div className='max-h-96 overflow-y-auto'>
                <p>{content}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleContentBlock;

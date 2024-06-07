'use client';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

type Props = {
  title: string;
  children: React.ReactNode;
};

const CollapsibleContentBlock: React.FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border-b border-gray-300 my-4'>
      <button
        onClick={toggleContent}
        className='w-full text-left py-4 px-6 bg-gray-200 hover:bg-gray-300 focus:outline-none flex justify-between items-center'
      >
        <h2 className='text-lg font-semibold'>{title}</h2>
        {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className='py-4 px-6 bg-gray-100'>{children}</div>
      </div>
    </div>
  );
};

export default CollapsibleContentBlock;

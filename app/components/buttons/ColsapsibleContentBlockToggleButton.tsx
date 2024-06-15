// components/ToggleButton.tsx
import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type Props = {
  title: string;
  isOpen: boolean;
  onClick: () => void;
};

const ColsapsibleContentBlockToggleButton: React.FC<Props> = ({ title, isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='w-full flex justify-between items-center text-left py-4 px-6 bg-gray-200 hover:bg-gray-300 focus:outline-none'
    >
      <h2 className='text-lg font-semibold'>{title}</h2>
      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
    </button>
  );
};

export default ColsapsibleContentBlockToggleButton;

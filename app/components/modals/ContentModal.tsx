import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';
import { MdClose } from 'react-icons/md';

interface Props {
  images: string[];
  content: string;
  onClose: () => void;
}

const ContentModal: React.FC<Props> = ({ images, content, onClose }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  return (
    <div
      className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-45'
      onClick={onClose}
    >
      <div
        className='bg-white w-11/12 lg:max-w-screen-lg h-5/6 p-4 overflow-y-auto z-45'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute top-4 right-4 bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-red-700 focus:outline-none transition duration-200 ease-in-out transform hover:scale-110'
          aria-label='Close Modal'
        >
          <MdClose className='w-6 h-6' />
        </button>
        {images.map((image, index) => (
          <div key={index} className='relative mb-4 flex items-center justify-center'>
            <div onClick={() => openImageModal(image)} className='cursor-pointer'>
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                sizes='(max-width: 768px) 100vw, 33vw'
                width={500}
                height={500}
              />
            </div>
          </div>
        ))}
        <p className='break-words overflow-wrap-anywhere'>{content}</p>
      </div>
      {isImageModalOpen && (
        <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
      )}
    </div>
  );
};

export default ContentModal;

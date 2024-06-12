import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';
import { MdClose } from 'react-icons/md';

interface Props {
  images: string[];
  content: string;
  onContentModalClose: () => void;
}

const ContentModal: React.FC<Props> = ({ images, content, onContentModalClose }) => {
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
    <>
      <div className='fixed inset-0 bg-black bg-opacity-75 z-40' onClick={onContentModalClose} />
      <div className='fixed inset-0 flex w-11/12 lg:max-w-screen-lg h-5/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
        <div className='relative bg-white p-4 lg:overflow-y-auto overflow-y-hidden w-full h-full'>
          <button
            onClick={onContentModalClose}
            className='absolute top-4 right-4 bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-red-700 focus:outline-none transition duration-200 ease-in-out transform hover:scale-110 cursor-pointer z-50'
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
      </div>
      {isImageModalOpen && (
        <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
      )}
    </>
  );
};

export default ContentModal;

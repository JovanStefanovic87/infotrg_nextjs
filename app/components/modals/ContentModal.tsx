import React, { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';
import { MdClose } from 'react-icons/md';
import { ContentBlockItem } from '../../helpers/types';
import ContentModalContainer from '../containers/ContentModalContainer';

interface Props {
  title: string;
  contentBlocks: ContentBlockItem[];
  onContentModalClose: () => void;
}

const ContentModal: React.FC<Props> = ({ title, contentBlocks, onContentModalClose }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  console.log(contentBlocks);

  return (
    <>
      <ContentModalContainer onContentModalClose={onContentModalClose}>
        <div className='relative bg-white rounded-lg shadow-lg p-6 lg:overflow-y-auto overflow-y-hidden w-full h-full border-4 border-blueLighter'>
          <button
            onClick={onContentModalClose}
            className='absolute top-4 right-4 bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-red-700 focus:outline-none transition duration-200 ease-in-out transform hover:scale-110 cursor-pointer z-50'
            aria-label='Close Modal'
          >
            <MdClose className='w-6 h-6' />
          </button>
          <h2 className='text-2xl font-bold text-center mb-4'>{title}</h2>
          <div className='relative z-40 pt-16'>
            {contentBlocks.map((block, index) => (
              <div key={index} className='mb-6'>
                {block.type === 'image' ? (
                  Array.isArray(block.content) ? (
                    block.content.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className='relative mb-4 flex items-center justify-center'
                      >
                        <div
                          onClick={() => openImageModal(image)}
                          className='cursor-pointer transition duration-200 ease-in-out transform hover:scale-105'
                        >
                          <Image
                            src={image}
                            alt={`Image ${imgIndex + 1}`}
                            sizes='(max-width: 768px) 100vw, 33vw'
                            className='rounded-md shadow-md'
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className='relative mb-4 flex items-center justify-center'>
                      <div
                        onClick={() => openImageModal(block.content as string)}
                        className='cursor-pointer transition duration-200 ease-in-out transform hover:scale-105'
                      >
                        <Image
                          src={block.content as string}
                          alt={`Image`}
                          sizes='(max-width: 768px) 100vw, 33vw'
                          className='rounded-md shadow-md'
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                  )
                ) : (
                  <p className='break-words overflow-wrap-anywhere text-lg text-gray-800'>
                    {block.content as string}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </ContentModalContainer>
      {isImageModalOpen && (
        <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
      )}
    </>
  );
};

export default ContentModal;

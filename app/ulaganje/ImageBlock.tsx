import React from 'react';
import Image from 'next/image';

interface Props {
  image: string;
  imgIndex: number;
  openImageModal: (image: string) => void;
}

const ImageBlock: React.FC<Props> = ({ image, imgIndex, openImageModal }) => {
  return (
    <div key={imgIndex} className='relative mb-4 flex items-center justify-center'>
      <div
        onClick={() => openImageModal(image)}
        className='relative mb-4 flex items-center justify-center cursor-pointer transition duration-200 ease-in-out transform hover:scale-105'
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
  );
};

export default ImageBlock;

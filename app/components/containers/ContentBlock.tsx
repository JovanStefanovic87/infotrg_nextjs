import { useState } from 'react';
import Image from 'next/image';
import ContentModal from '../modals/ContentModal';

type Props = {
  title: string;
  content: string;
  images: string[];
};

const ContentBlock: React.FC<Props> = ({ title, content, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10'
        style={{ display: isModalOpen ? 'block' : 'none' }}
        onClick={closeModal}
      ></div>
      {isModalOpen && <ContentModal images={images} content={content} onClose={closeModal} />}
      <div
        className='bg-gray-100 p-4 cursor-pointer'
        onClick={openModal}
        style={{ maxWidth: '80vw', margin: '0 auto' }}
      >
        <h2 className='text-lg font-semibold'>{title}</h2>
        <div className='relative w-full mb-4'>
          <Image src={images[0]} alt={title} width={500} height={500} />
        </div>
        <div className='max-h-96 overflow-y-auto overflow-x-hidden'>
          <p>{content.slice(0, 100)}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;

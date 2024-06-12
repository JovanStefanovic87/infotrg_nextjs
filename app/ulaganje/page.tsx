'use client';
import Main from '../components/layout/Main';
import CollapsibleContentBlock from '../components/containers/CollapsibleContentBlock';
import { contentData } from './contentData';
import ImageModal from '../components/modals/ImageModal';
import { useState } from 'react';
import ContentBlock from '../components/containers/ContentBlock';

const Invest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (image: string, title: string) => {
    setModalImage(image);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Main>
      <div className='container mx-auto p-4'>
        <div className='block lg:hidden'>
          {contentData.map((block, index) => (
            <CollapsibleContentBlock
              key={index}
              title={block.title}
              content={block.content}
              images={block.images}
              openModal={openModal}
            />
          ))}
        </div>
        <div className='hidden lg:grid lg:grid-cols-3 lg:gap-4'>
          {contentData.map((block, index) => (
            <ContentBlock
              key={index}
              title={block.title}
              content={block.content}
              images={block.images}
            />
          ))}
        </div>
        {isModalOpen && <ImageModal src={modalImage} alt={modalTitle} onClose={closeModal} />}
      </div>
    </Main>
  );
};

export default Invest;

'use client';
import React, { useState } from 'react';
import { NextPage } from 'next';
import { contentData } from './contentData';
import { ContentBlockItem } from '../helpers/types';
import CollapsibleContentBlock from './collapsible/CollapsibleContentBlock';
import ContentBlock from './ContentBlock';
import ImageModal from '../components/modals/ImageModal';
import ContentModal from '../components/modals/ContentModal';

const InvestContent: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);
  const [modalContentBlocks, setModalContentBlocks] = useState<ContentBlockItem[]>([]);

  const openImageModal = (image: string, title: string) => {
    setModalImage(image);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  const openContentModal = (contentBlocks: ContentBlockItem[], title: string) => {
    setModalContentBlocks(contentBlocks);
    setModalTitle(title); // Set modal title here
    setIsContentModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeContentModal = () => {
    setIsContentModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className='container mx-auto p-6 '>
      <h1 className='text-5xl font-bold mb-10 text-center text-yellow-400'>MOGUĆNOST ULAGANJA</h1>
      <div className='block lg:hidden'>
        {contentData.map((block, index) => (
          <CollapsibleContentBlock
            key={index}
            title={block.title}
            openModal={openImageModal}
            contentBlocks={block.contentBlocks}
          />
        ))}
      </div>
      <div className='hidden lg:grid lg:grid-cols-3 lg:gap-8'>
        {contentData.map((block, index) => (
          <ContentBlock
            key={index}
            title={block.title}
            description={block.description}
            coverImage={block.coverImage}
            contentBlocks={block.contentBlocks}
            openContentModal={() => openContentModal(block.contentBlocks, block.title)}
          />
        ))}
      </div>
      {isModalOpen && <ImageModal src={modalImage} alt={modalTitle} onClose={closeImageModal} />}
      {isContentModalOpen && (
        <ContentModal
          title={modalTitle}
          contentBlocks={modalContentBlocks}
          onContentModalClose={closeContentModal}
        />
      )}
    </div>
  );
};

export default InvestContent;

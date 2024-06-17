import React, { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';
import { MdClose } from 'react-icons/md';
import { ContentBlockItem } from '../../helpers/types';
import ContentModalContainer from '../containers/ContentModalContainer';
import CloseButton from '../buttons/CloseButtonX';
import TitleMain from '../text/TitleMain';
import ImageBlock from '@/app/ulaganje/ImageBlock';
import TextWrapped from '../text/TextWrapped';
import ContentModalInnerContainer from '../containers/ContentModalInnerContainer';

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

  return (
    <>
      <ContentModalContainer onContentModalClose={onContentModalClose}>
        <ContentModalInnerContainer>
          <CloseButton onClose={onContentModalClose} />
          <TitleMain title={title} />
          <div className='relative z-40 pt-6'>
            {contentBlocks.map((block, index) => (
              <div key={index} className='mb-6'>
                {block.type === 'image' ? (
                  Array.isArray(block.content) ? (
                    block.content.map((image, imgIndex) => (
                      <ImageBlock
                        key={imgIndex}
                        image={image}
                        imgIndex={imgIndex}
                        openImageModal={openImageModal}
                      />
                    ))
                  ) : (
                    <ImageBlock
                      key={index}
                      image={block.content as string}
                      imgIndex={index}
                      openImageModal={openImageModal}
                    />
                  )
                ) : (
                  <TextWrapped block={block.content} />
                )}
              </div>
            ))}
          </div>
        </ContentModalInnerContainer>
      </ContentModalContainer>
      {isImageModalOpen && (
        <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
      )}
    </>
  );
};

export default ContentModal;

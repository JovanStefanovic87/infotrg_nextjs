import { useState } from 'react';
import Image from 'next/image';
import ContentModal from '../modals/ContentModal';
import CoverImage from '../image/CoverImage';

interface ContentBlockItem {
  type: 'text' | 'image';
  content: string | string[];
}

interface Props {
  title: string;
  description: string;
  coverImage?: string;
  contentBlocks: ContentBlockItem[];
}

const ContentBlock: React.FC<Props> = ({ title, description, coverImage, contentBlocks }) => {
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalText, setModalText] = useState<string>('');

  const openModal = (content: ContentBlockItem) => {
    if (content.type === 'image') {
      setModalImages(
        Array.isArray(content.content) ? content.content : [content.content as string],
      );
      setModalText('');
    } else if (content.type === 'text') {
      setModalText(
        Array.isArray(content.content) ? content.content.join(' ') : (content.content as string),
      );
      setModalImages([]);
    }
    setIsContentModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsContentModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className='flex items-center justify-center relative'>
      <div
        className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10'
        style={{ display: isContentModalOpen ? 'block' : 'none' }}
        onClick={closeModal}
      ></div>
      {isContentModalOpen && (
        <ContentModal images={modalImages} content={modalText} onContentModalClose={closeModal} />
      )}
      <div className='bg-gray-100 p-4 cursor-pointer min-h-96 overflow-hidden w-full'>
        <h2 className='text-lg font-semibold mb-4'>{title}</h2>
        {coverImage && <CoverImage src={coverImage} alt={title} />}
        <p className='text-gray-800 break-words w-full text-base leading-relaxed mb-2 max-w-xl'>
          {description}
        </p>
        <div className='max-h-96 overflow-y-auto overflow-x-hidden'>
          <button className='text-blue-500 mt-2 border border-blueLight bg-blueLightest px-4 py-2 rounded-md'>
            Vidi još
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;

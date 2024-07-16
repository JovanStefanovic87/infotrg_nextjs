'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pppLinksData, contentBlocksData } from './pppData';
import ImageModal from '../../../components/modals/ImageModal';
import ImageBlock from '../../../components/image/ImageBlock';
import TextWrapped from '../../../components/text/TextWrapped';
import H1 from '@/app/components/text/H1';
import PageContainer from '@/app/components/containers/PageContainer';
import Devider from '@/app/components/ui/Devider';
import OrderedList from '@/app/components/text/OrderedList';
import H2 from '@/app/components/text/H2';
import H3 from '@/app/components/text/H3';
import H4 from '@/app/components/text/H4';
import Text from '@/app/components/text/Text';

interface Props {
  [key: string]: string;
}

const PageContent: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const getBgColorByOwner = (owner?: string): string => {
    switch (owner) {
      case 'autor':
        return 'mainWhite';
      case 'administrator':
        return 'darkblue';
      case 'koordinator':
        return 'black';
      case 'webmaster':
        return 'red';
      case 'marketing-manager':
        return 'orange';
      case 'pr':
        return 'yellow';
      case 'graphic-designer':
        return 'purple';
      default:
        return 'transparent';
    }
  };

  const getTextColorByOwner = (owner?: string): string => {
    switch (owner) {
      case 'autor':
        return 'white';
      case 'administrator':
        return 'white';
      case 'koordinator':
        return 'white';
      case 'webmaster':
        return 'white';
      case 'marketing-manager':
        return 'black';
      case 'pr':
        return 'black';
      case 'graphic-designer':
        return 'white';
      default:
        return 'black';
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const pathname = usePathname();
  const blockId: string = pathname.split('/').pop() || '';

  const block = pppLinksData.find((item) => item.id === blockId);
  const contentBlocks = (contentBlocksData as any)[blockId] || [];

  if (!block) return <p>Block not found</p>;

  return (
    <PageContainer>
      <H1 title='Investicioni fond' pb='0' />
      <H2 text={block.label.toUpperCase()} weight='bold' align='center' />
      <H2 text={block.amount} weight='bold' align='center' />
      <div className='relative pt-2 bg-gradient-white shadow-md rounded-lg p-4 mt-8'>
        {contentBlocks.length > 0 &&
          contentBlocks.map((block: any, index: number) => (
            <div key={index} className='mb-6 mt-6 flex flex-col'>
              {block.type === 'text' ? (
                <TextWrapped block={block.content || ''} />
              ) : block.type === 'image' ? (
                Array.isArray(block.url) ? (
                  block.url.map((image: string, imgIndex: number) => (
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
                    image={block.content || ''}
                    imgIndex={index}
                    openImageModal={openImageModal}
                  />
                )
              ) : block.type === 'devider' ? (
                <Devider />
              ) : block.type === 'paragraph1' || block.type === 'paragraph2' ? (
                <TextWrapped block={block.content || ''} />
              ) : block.type === 'hr' ? (
                <Devider />
              ) : block.type === 'list' ? (
                <OrderedList items={[block]} />
              ) : block.type === 'h2' ? (
                <div className='h-0'>
                  <H2 text={block.content} align='center' color='black' />
                </div>
              ) : block.type === 'H2BoldCenter' ? (
                <H2 text={block.content} align='center' weight='bold' />
              ) : block.type === 'h3' ? (
                <div className='h-0'>
                  <H3 text={block.content} align='center' />
                </div>
              ) : block.type === 'h4' ? (
                <div className='h-6 sm:h-2'>
                  <H4 text={block.content} weight='bold' color='black' />
                </div>
              ) : block.type === 'p' ? (
                <Text
                  text={block.content}
                  weight={block.weight}
                  paddingLeft={block.paddingLeft}
                  align={block.align}
                />
              ) : block.type === 'listEvenly' ? (
                block.circleContent && (
                  <div className='flex flex-wrap justify-center space-x-2 sm:space-x-4'>
                    <div className='flex flex-wrap justify-center space-x-2 sm:space-x-4'>
                      {Object.entries(block.circleContent as Props).map(([key, value], idx) => {
                        const bgColorClass = getBgColorByOwner(block.owner);
                        const textColorClass = getTextColorByOwner(block.owner);
                        return (
                          <div
                            key={idx}
                            className={`flex flex-col items-center justify-center w-20 h-20 text-black p-2 rounded-full sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32`}
                            style={{ backgroundColor: bgColorClass }}
                          >
                            <p
                              className='font-boldtext-xs text-xxxs sm:text-xxs md:text-xs lg:text-sm font-bold'
                              style={{ color: textColorClass }}
                            >
                              {key.toLocaleUpperCase()}
                            </p>
                            <p
                              className='text-xxxs sm:text-xxs md:text-xs lg:text-sm'
                              style={{ color: textColorClass }}
                            >
                              {value}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              ) : null}
            </div>
          ))}
      </div>
      {isImageModalOpen && (
        <ImageModal src={selectedImage} alt={`Image`} onClose={closeImageModal} />
      )}
    </PageContainer>
  );
};

export default PageContent;

import ContentBlockContainer from '../components/containers/ContentBlockContainer';
import CoverImage from '../components/image/CoverImage';
import { ContentBlockItem } from '../helpers/types';

interface Props {
  title: string;
  description: string;
  coverImage?: string;
  contentBlocks: ContentBlockItem[];
  openContentModal: (contentBlocks: ContentBlockItem[]) => void;
}

const ContentBlock: React.FC<Props> = ({
  title,
  description,
  coverImage,
  contentBlocks,
  openContentModal,
}) => {
  return (
    <ContentBlockContainer contentBlocks={contentBlocks} openContentModal={openContentModal}>
      <div className='bg-gray-100 p-4 cursor-pointer h-96 overflow-hidden w-full flex flex-col'>
        <h2 className='text-lg font-semibold mb-4'>{title}</h2>
        {coverImage && <CoverImage src={coverImage} alt={title} />}
        <p className='text-gray-800 break-words w-full text-base leading-relaxed mb-2 max-w-xl max-h-40 flex-grow overflow-hidden line-clamp-6'>
          {description}
        </p>
        <button className='text-blue-500 mt-2 border border-blueLight bg-blueLightest px-4 py-2 rounded-md self-start'>
          Vidi još
        </button>
      </div>
    </ContentBlockContainer>
  );
};

export default ContentBlock;

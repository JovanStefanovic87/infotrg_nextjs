import ContentBlockContainer from '../components/containers/ContentBlockContainer';
import CoverImage from '../components/image/CoverImage';
import TitleSecond from '../components/text/TitleSecond';
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
  // Calculate the number of lines based on font size and line height
  const maxLines = 6; // Adjust as needed

  return (
    <ContentBlockContainer contentBlocks={contentBlocks} openContentModal={openContentModal}>
      <div className='bg-gray-100 p-4 cursor-pointer h-96 overflow-hidden w-full flex flex-col justify-between'>
        <TitleSecond text={title} align='left' padding={4} />
        {coverImage && <CoverImage src={coverImage} alt={title} />}
        <div className='text-gray-800 text-base leading-relaxed mb-2 max-w-xl flex-grow overflow-hidden'>
          <p className={`line-clamp-${maxLines}`}>{description}</p>
        </div>
        <button className='text-blue-500 mt-2 border border-blueLight bg-blueLightest px-4 py-2 rounded-md self-start'>
          Vidi još
        </button>
      </div>
    </ContentBlockContainer>
  );
};

export default ContentBlock;

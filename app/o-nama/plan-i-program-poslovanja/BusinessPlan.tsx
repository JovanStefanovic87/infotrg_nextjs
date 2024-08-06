'use client';
import {
  contentData as rawContentData,
  listOfLinks as rawListOfLinks,
  mapIdToPath,
} from './BussinessPlanData';
import ContentBlockImageNumber from '../../components/blocks/ContentBlockImageNumber';
import ContentBlock from '../../components/blocks/ContentBlock';
import H1 from '../../components/text/H1';
import PageContainer from '../../components/containers/PageContainer';
import H2Title from '@/app/components/text/H2Title';
import Devider2 from '@/app/components/ui/Devider2';
import renderGridSystem from '@/app/helpers/renderGridSystem';
import useScrollToTop from '@/app/helpers/useScrollToTop';
import useResponsiveColumns from '@/app/helpers/useResponsiveColumns';

interface BasicInformation {
  id: string | undefined;
  title: string;
  description: string;
  date?: string;
  coverImage: string;
}

const BussinesPlan: React.FC = () => {
  useScrollToTop();
  const columns = useResponsiveColumns(1);

  const contentData = rawContentData.filter(
    (item): item is BasicInformation & { id: string } => item.id !== undefined,
  );

  const listOfLinks = rawListOfLinks.filter(
    (item): item is BasicInformation & { id: string } => item.id !== undefined,
  );

  return (
    <PageContainer>
      <H1 title='PLAN I PROGRAM POSLOVANJA' pb='0' />
      <div className='p-2 pb-4 sm:pb-10'>
        <H2Title text='SAŽET PRIKAZ PLANA I PROGRAMA POSLOVANJA' padding={10} />
      </div>
      {renderGridSystem({
        contentData,
        columns,
        useLink: false,
        children: (block) => (
          <ContentBlockImageNumber
            title={block.title}
            description={block.description || ''}
            date={block.date || ''}
            coverImage={block.coverImage}
            contentBlocks={[]}
            openContentModal={() => {}}
          />
        ),
      })}
      <H2Title text='OPŠIRNIJI PRIKAZ PLANA I PROGRAMA POSLOVANJA' padding={24} />
      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden mb-4'>
        {renderGridSystem({
          contentData: listOfLinks,
          columns,
          useLink: true,
          mapIdToPath: (id: string) => mapIdToPath(id),
          children: (block) => (
            <ContentBlock
              title={block.title}
              description={block.description || ''}
              descriptionAlign='left'
              contentBlocks={[]}
              openContentModal={() => {}}
            />
          ),
        })}
        <div className='flex sm:hidden'>
          <Devider2 marginY={4} />
        </div>
      </div>
    </PageContainer>
  );
};

export default BussinesPlan;

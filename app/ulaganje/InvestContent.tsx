'use client';
import { contentData, mapIdToPath } from './ulaganjeData';
import ContentBlock from '../components/blocks/ContentBlock';
import H1 from '../components/text/H1';
import PageContainer from '../components/containers/PageContainer';
import renderGridSystem from '@/app/helpers/renderGridSystem';
import H2 from '../components/text/H2';
import useScrollToTop from '../helpers/useScrollToTop';
import useResponsiveColumns from '../helpers/useResponsiveColumns';

const InvestContent: React.FC = () => {
  useScrollToTop();
  const columns = useResponsiveColumns(1);

  return (
    <PageContainer>
      <H1 title='ULAGANJE U INFOTRG' pb='2rem' />
      <div className='flex flex-col items-center bg-mainWhite rounded-lg p-6 shadow-lg mb-4'>
        <H2
          text='Infotrgov investicioni program omogućava svakom fizičkom licu sticanje vlasničkog udela u poslovnom projektu, uz minimalnu mesečnu zaradu od 10% na uložena sredstva i garanciju povrata uloženog novca u slučaju raskida suvlasničkog odnosa.'
          align='center'
          color='black'
        />
      </div>
      <div className='bg-white sm:bg-transparent rounded-md overflow-hidden mb-4'>
        {renderGridSystem({
          contentData,
          columns: columns,
          useLink: true,
          mapIdToPath: (id: string) => mapIdToPath(id),
          children: (block) => (
            <ContentBlock
              title={block.title}
              description={block.description || ''}
              coverImage={block.coverImage}
              contentBlocks={[]}
              openContentModal={() => {}}
            />
          ),
        })}
      </div>
    </PageContainer>
  );
};

export default InvestContent;

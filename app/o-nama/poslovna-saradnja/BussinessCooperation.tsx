'use client';
import { contentData, listOfLinks } from './BussinessCooperationData';
import ContentBlock from './ContentBlock';
import H1 from '../../components/text/H1';
import PageContainer from '../../components/containers/PageContainer';
import H2Title from '@/app/components/text/H2Title';
import Devider from '@/app/components/ui/Devider';
import UnorderedList from '@/app/components/text/UnorderedList';

const BussinessCooperation = () => {
  return (
    <PageContainer>
      <H1 title='POSLOVNA SARADNJA' mb={10} />
      <div className='p-2'>
        <H2Title text='SAŽET PRIKAZ POSLOVNE SARADNJE' padding={10} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-0 sm:gap-8 bg-white sm:bg-transparent'>
        {contentData.map((block) => (
          <div key={block.id}>
            <ContentBlock
              title={block.title}
              description={block.description}
              coverImage={block.coverImage}
              contentBlocks={[]}
              openContentModal={() => {}}
            />
          </div>
        ))}
      </div>
      <div className='py-8'>
        <Devider />
      </div>
      <H2Title text='OPŠIRNIJI PRIKAZ POSLOVNE SARADNJE' padding={24} />
      <div className='flex flex-col bg-white p-8'>
        <UnorderedList items={listOfLinks} />
      </div>
    </PageContainer>
  );
};

export default BussinessCooperation;

'use client';
import React, { useState, useEffect } from 'react';
import { contentData, mapIdToPath } from './pocetnaData';
import ContentBlock from '../components/blocks/ContentBlock';
import PageContainer from '../components/containers/PageContainer';
import renderGridSystem from '@/app/helpers/renderGridSystem';
import AnimationBlock from './AnimationBlock';
import H2Title from '../components/text/H2Title';
import H2 from '../components/text/H2';
import TextSpecifications from '../components/text/TextSpecifications';
import H3Title from '../components/text/H3Title';
import useResponsiveColumns from '../helpers/useResponsiveColumns';

const PageContent: React.FC = () => {
  const columns = useResponsiveColumns(1);

  return (
    <PageContainer>
      <AnimationBlock />
      <div className='mt-1 sm:mt-8 mb-4'>
        <H2Title text='ULAGANJE U INFOTRG' size='xl' />
      </div>
      <div className='flex flex-col items-center bg-mainWhite rounded-lg p-6 shadow-lg mb-8'>
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
      <div className='mt-1 sm:mt-8 mb-4'>
        <H2Title
          text='POSTANITE INVESTITOR I SUVLASNIK INFOTRGA ILI SE
PRIDRUÅ½ITE TIMU KAO STALNI ILI POVREMENI SARADNIK'
          size='xl'
        />
      </div>
      <div className='flex flex-col items-stretch sm:items-center bg-mainWhite rounded-lg p-6 shadow-lg mb-8'>
        <div className='w-full mb-4'>
          <H3Title text='Kontakt' color='black' />
        </div>
        <div className='w-full xl:w-1/3'>
          <TextSpecifications label='Koordinator projekta' value='Miroslav Ostrogonac' />
          <TextSpecifications label='Telefon' value='060 145 13 49' />
          <TextSpecifications label='Email' value='suinfotrg@gmail.com' />
        </div>
      </div>
    </PageContainer>
  );
};

export default PageContent;

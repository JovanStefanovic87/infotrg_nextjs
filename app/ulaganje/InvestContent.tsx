'use client';
import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { contentData } from './ulaganjeData';
import ContentBlock from './ContentBlock';
import PageTitle from '../components/text/PageTitle';
import PageContainer from '../components/containers/PageContainer';

const InvestContent: NextPage = () => {
  return (
    <PageContainer>
      <PageTitle title='MOGUĆNOST ULAGANJA' />

      <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
        {contentData.map((block) => (
          <Link key={block.id} href={`/ulaganje/${block.id}`}>
            <ContentBlock
              title={block.title}
              description={block.description}
              coverImage={block.coverImage}
              contentBlocks={[]}
              openContentModal={() => {}}
            />
          </Link>
        ))}
      </div>
    </PageContainer>
  );
};

export default InvestContent;

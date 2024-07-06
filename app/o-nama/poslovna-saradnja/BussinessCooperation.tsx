'use client';
import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { contentData } from './BussinessCooperation';
import ContentBlock from './ContentBlock';
import H1 from '../../components/text/H1';
import PageContainer from '../..//components/containers/PageContainer';

const BussinessCooperation: NextPage = () => {
  return (
    <PageContainer>
      <H1 title='MOGUĆNOST ULAGANJA' />
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

export default BussinessCooperation;

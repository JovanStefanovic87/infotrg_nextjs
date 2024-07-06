'use client';
import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { contentData } from './AboutData';
import ContentBlock from './ContentBlock';
import H1 from '../components/text/H1';
import PageContainer from '../components/containers/PageContainer';

const AboutContent: NextPage = () => {
  return (
    <PageContainer>
      <H1 title='O NAMA' />

      <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
        {contentData.map((block) => (
          <Link key={block.id} href={`/o-nama/${block.id}`}>
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

export default AboutContent;

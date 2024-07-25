import React from 'react';
import { BasicInformation } from '../../helpers/types';
import TextNormal from '@/app/components/text/TextNormal';
import H2 from '@/app/components/text/H2';

interface Props {
  data: any;
  title: string;
}

const ContentDisplay: React.FC<Props> = ({ data, title }) => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      {data &&
        data.map((item: any, index: number) => (
          <div key={index}>
            {item.type === 'h3' && (
              <H2 text={item.content.toUpperCase()} color='black' align='center' marginBottom='4' />
            )}
            {item.type === 'pNormal' && <TextNormal text={item.content} />}
          </div>
        ))}
    </div>
  );
};

export default ContentDisplay;

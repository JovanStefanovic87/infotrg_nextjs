import React from 'react';

interface Props {
  title: string;
}

const TitleMain: React.FC<Props> = ({ title }) => {
  return <h2 className='text-2xl font-bold text-center mb-4'>{title}</h2>;
};

export default TitleMain;

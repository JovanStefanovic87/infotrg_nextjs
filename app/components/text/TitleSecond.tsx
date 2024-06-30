import React from 'react';

interface TitleSecondProps {
  text: string;
}

const TitleSecond: React.FC<TitleSecondProps> = ({ text }) => {
  return <h2 className='text-2xl font-semibold'>{text}</h2>;
};

export default TitleSecond;

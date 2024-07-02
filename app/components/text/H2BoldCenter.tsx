import React from 'react';

interface Props {
  text: string;
}

const H2BoldCenter: React.FC<Props> = ({ text }) => {
  return <h2 className='text-center font-bold text-grayDarkest text-2xl'>{text}</h2>;
};

export default H2BoldCenter;

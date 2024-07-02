import React from 'react';

interface Props {
  text: string;
}

const H3BoldCenter: React.FC<Props> = ({ text }) => {
  return <h3 className='text-center font-bold text-grayDarkest text-lg'>{text}</h3>;
};

export default H3BoldCenter;

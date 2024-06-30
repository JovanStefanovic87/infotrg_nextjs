import React from 'react';

interface Props {
  text: string;
}

const TextBoldCenter: React.FC<Props> = ({ text }) => {
  return <p className='text-center font-bold text-grayDarkest text-2xl'>{text}</p>;
};

export default TextBoldCenter;

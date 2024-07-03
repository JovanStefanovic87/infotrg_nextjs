import React from 'react';

interface Props {
  text: string;
  align?: 'left' | 'center' | 'right';
}

const TextBold: React.FC<Props> = ({ text, align = 'left' }) => {
  return <p className={`text-${align} font-bold text-grayDarkest text-lg`}>{text}</p>;
};

export default TextBold;

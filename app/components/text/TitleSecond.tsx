import React from 'react';

interface Props {
  text: string;
  align?: 'left' | 'center' | 'right';
  padding?: number;
}

const TitleSecond: React.FC<Props> = ({ text, align, padding = 0 }) => {
  const maxWidth = `calc(100% - ${2 * padding}px)`;

  return (
    <h2
      className={`text-lg text-grayMedium font-semibold mb-4 text-${align} pb-${padding} overflow-hidden whitespace-nowrap`}
      style={{ maxWidth }}
    >
      {text}
    </h2>
  );
};

export default TitleSecond;

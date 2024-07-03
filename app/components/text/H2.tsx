import React from 'react';

interface Props {
  text: string;
  align?: 'left' | 'center' | 'right';
  padding?: number;
  size?: 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'bold' | 'semibold';
  marginBottom?: string;
}

const H2: React.FC<Props> = ({
  text,
  align = 'left',
  padding = 0,
  size = 'lg',
  weight = 'semibold',
  marginBottom = '0',
}) => {
  const maxWidth = `calc(100% - ${2 * padding}px)`;

  return (
    <h2
      className={`text-${size} text-grayDarkest font-${weight} mb-${marginBottom} text-${align} pb-${padding} overflow-hidden`}
      style={{ maxWidth }}
    >
      {text}
    </h2>
  );
};

export default H2;

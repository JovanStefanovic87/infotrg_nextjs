import React from 'react';

interface Props {
  text: string;
  align?: 'left' | 'center' | 'right';
  padding?: number;
  size?: 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'bold' | 'semibold';
  marginBottom?: string;
}

const H3: React.FC<Props> = ({
  text,
  align = 'left',
  padding = 0,
  size = 'md',
  weight = 'semibold',
  marginBottom = '0',
}) => {
  const maxWidth = `calc(100% - ${2 * padding}px)`;

  return (
    <div>
      <h3
        className={`text-${size} text-grayMedium font-${weight} mb-${marginBottom} text-${align} pb-${padding} overflow-hidden`}
        style={{ maxWidth }}
      >
        {text}
      </h3>
    </div>
  );
};

export default H3;

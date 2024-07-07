import React from 'react';

interface Props {
  text: string;
  align?: 'left' | 'center' | 'right';
  padding?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  responsiveSize?: 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'normal' | 'bold' | 'semibold';
}

const H2Title: React.FC<Props> = ({
  text,
  padding = 0,
  weight = 'semibold',
}) => {
  const maxWidth = `calc(100% - ${2 * padding}px)`;

  return (
    <h2
      className={`text-xl md:text-2xl text-white font-${weight} text-center overflow-hidden`}
      style={{ maxWidth: maxWidth, paddingBottom: padding}}
    >
      {text}
    </h2>
  );
};

export default H2Title;

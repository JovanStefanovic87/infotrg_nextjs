import React from 'react';

interface Props {
  text: string;
  align?: 'left' | 'center' | 'right';
  padding?: number;
  paddingBottom?: number;
  weight?: 'normal' | 'bold' | 'semibold';
  color?: string;
}

const H4: React.FC<Props> = ({
  text,
  align = 'left',
  padding = 0,
  paddingBottom = 0,
  weight = 'semibold',
  color = 'grayMedium',
}) => {
  const maxWidth = `calc(100% - ${2 * padding}px)`;

  return (
    <div>
      <h4
        className={`text-sm sm:text-md text-${color} text-wrap font-${weight} mb-4 text-${align} pb-${padding} overflow-hidden whitespace-nowrap`}
        style={{ maxWidth, paddingBottom }}
      >
        {text}
      </h4>
    </div>
  );
};

export default H4;

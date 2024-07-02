import React from 'react';

interface Props {
  text: string;
  align?: 'left' | 'center' | 'right';
  padding?: number;
}

const H3: React.FC<Props> = ({ text, align = 'left', padding = 0 }) => {
  const maxWidth = `calc(100% - ${2 * padding}px)`;

  return (
    <div>
      <h3
        className={`text-md text-grayMedium font-semibold mb-4 text-${align} pb-${padding} overflow-hidden whitespace-nowrap`}
        style={{ maxWidth }}
      >
        {text}
      </h3>
    </div>
  );
};

export default H3;

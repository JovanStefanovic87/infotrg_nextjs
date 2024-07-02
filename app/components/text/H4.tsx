import React from 'react';

interface Props {
  text: string;
  align?: 'left' | 'center' | 'right';
  padding?: number;
}

const H4: React.FC<Props> = ({ text, align = 'left', padding = 0 }) => {
  const maxWidth = `calc(100% - ${2 * padding}px)`;

  return (
    <div>
      <h4
        className={`text-md text-grayMedium font-semibold mb-4 text-${align} pb-${padding} overflow-hidden whitespace-nowrap`}
        style={{ maxWidth }}
      >
        {text}
      </h4>
    </div>
  );
};

export default H4;

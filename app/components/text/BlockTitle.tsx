import React from 'react';

interface Props {
  text: string;
}

const BlockTitle: React.FC<Props> = ({ text }) => {
  return (
    <div className='mb-4 bg-yellowLighter p-2'>
      <h2 className={`text-lg text-grayMedium font-semibold overflow-hidden whitespace-nowrap`}>
        {text}
      </h2>
    </div>
  );
};

export default BlockTitle;

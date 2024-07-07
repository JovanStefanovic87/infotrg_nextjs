import React from 'react';
import Link from 'next/link';
import { LinkData } from '../../helpers/types'
import { isTextHyperlinked } from '../../helpers/universalFunctions';

interface Props {
  text: string;
  hyperlinks: LinkData[];
  className?: string;
}

const TextLinked: React.FC<Props> = ({ text, hyperlinks, className = '', }) => {
  return (
    <h4 className={className}>
      {isTextHyperlinked(text, hyperlinks) ? (
        <Link href={isTextHyperlinked(text, hyperlinks) as string}>
          <span className='text-blue-500 hover:underline text-hyperlink'>
            {text}
          </span>
        </Link>
      ) : (
        text
      )}
    </h4>
  );
};

export default TextLinked;

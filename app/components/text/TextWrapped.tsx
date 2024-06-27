import React from 'react';
import Link from 'next/link';
import { hyperlinks } from '../../ulaganje/contentData';

interface Props {
  block: string;
}

const TextWrapped: React.FC<Props> = ({ block }) => {
  const convertWordToLink = (word: string, index: number) => {
    const foundLink = hyperlinks.find((link) => link.text.toLowerCase() === word.toLowerCase());
    if (foundLink) {
      return (
        <Link key={index} href={foundLink.url}>
          <span className='text-blue-500 underline text-hyperlink'>{word}</span>
        </Link>
      );
    }
    return <span key={index}>{word}</span>;
  };

  const processText = (text: string) => {
    const wordsAndSpaces = text.split(/(\s+)/);

    const processedContent = wordsAndSpaces.map((unit, index) => {
      if (unit.trim() !== '') {
        const cleanWord = unit.replace(/^[.,?!:;()"[\]{}]+|[.,?!:;()"[\]{}]+$/g, '');
        return convertWordToLink(cleanWord, index);
      }
      return unit;
    });

    return processedContent;
  };

  return (
    <p className='break-words overflow-wrap-anywhere text-lg text-gray-800'>{processText(block)}</p>
  );
};

export default TextWrapped;

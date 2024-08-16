import React from 'react';

interface Props {
  content: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'bold' | 'semibold';
  paddingLeft?: string;
  paddingTop?: string;
  link?: string;
  bold?: boolean;
}

const wordsToBold = ['Infotrg', 'platforma', 'investitor', 'prihod', 'reklama'];

const wordsWithLinks = [
  { word: 'Infotrg', url: '/' },
  { word: 'platforma', url: '/o-nama/platforma' },
  // Add more words and URLs as needed
];

const highlightWords = (text: string) => {
    let highlightedText = text;
  
    // Apply hyperlinks first
    wordsWithLinks.forEach(({ word, url }) => {
      const regex = new RegExp(`\\b(${word})\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, `<a href="${url}" class="text-blue-500 hover:underline">$1</a>`);
    });
  
    // Apply bolding while preserving hyperlinks
    highlightedText = highlightedText.replace(/(<a[^>]*>)([^<]+)(<\/a>)/g, (match, p1, p2, p3) => {
      // Bold the text inside links
      const boldedText = p2.replace(/\b(?:Infotrg|platforma|investitor|prihod|reklama)\b/gi, '<strong>$&</strong>');
      return `${p1}${boldedText}${p3}`;
    });
  
    return highlightedText;
  };

  const TextBoldAndLink: React.FC<Props> = ({
    content,
    label,
    align = 'left',
    weight = 'normal',
    paddingLeft = '0',
    paddingTop = '0',
  }) => {
    return (
      <p
        className={`text-${align} text-pretty font-${weight} text-grayDarkest text-base leading-relaxed`}
        style={{ paddingLeft, paddingTop }}
        dangerouslySetInnerHTML={{
          __html: `<strong>${label}</strong> ${highlightWords(content)}`,
        }}
      />
    );
  };

export default TextBoldAndLink;
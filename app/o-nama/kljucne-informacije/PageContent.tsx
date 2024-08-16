'use client';
import { contentData } from './keyInformationsData';
import H1 from '../../components/text/H1';
import PageContainer from '../../components/containers/PageContainer';
import H2Title from '../../components/text/H2Title';
import useScrollToTop from '../../helpers/useScrollToTop';
import TextBoldAndLink from '@/app/components/text/TextBoldAndLink';

const AboutContent: React.FC = () => {
  useScrollToTop();

  const wordsToBold = ['Infotrg', 'platforma', 'investitor', 'prihod', 'reklama'];

  const highlightWords = (text: string) => {
    let highlightedText = text;

    wordsToBold.forEach((word) => {
      const regex = new RegExp(`\\b(${word})\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, `<strong>$1</strong>`);
    });

    return highlightedText;
  };

  return (
    <PageContainer>
      <H1 title='INFOTRG POSAO' pb={0} />
      <H2Title text='Tražimo saradnike na sledećim radnim pozicijama:' padding={24} />
      <div className='relative bg-gradient-white shadow-md rounded-lg p-4'>
        {contentData.length > 0 &&
          contentData.map((block: any, index: number) => (
            <div key={index}>
              {block.type === 'TextBoldCustom' ? (
                 <TextBoldAndLink
                 label={block.label}
                 content={highlightWords(block.content)}
                 paddingLeft={block.paddingLeft}
                 paddingTop={block.paddingTop}
               />
              ) : null}
            </div>
          ))}
      </div>
    </PageContainer>
  );
};

export default AboutContent;

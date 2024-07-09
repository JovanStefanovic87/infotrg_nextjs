import React from 'react';
import { ListOfLinks } from '../../helpers/types';
import { hyperlinks } from '../../o-nama/poslovna-saradnja/BussinessCooperationData';
import Devider from '../ui/Devider';
import H3 from './H3';
import TextLinked from './TextLinked';

interface Props {
  items: ListOfLinks[];
}

const UnorderedList: React.FC<Props> = ({ items }) => {
  const renderBlocks = (items: ListOfLinks[]) => {
    const blocks: JSX.Element[] = [];
    let currentBlock: JSX.Element[] = [];
    let currentH3: JSX.Element | null = null;
    let h4Count = 0; // Counter for h4 elements

    items.forEach((item, index) => {
      switch (item.type) {
        case 'h3':
          // If there's an existing currentH3 and currentBlock has content, push the block
          if (currentH3 && currentBlock.length > 0) {
            blocks.push(renderBlock(currentH3, currentBlock));
            currentBlock = []; // Clear currentBlock for the new block
            h4Count = 0; // Reset h4 count for new block
          }
          currentH3 = <H3 text={item.text} key={item.id} />;
          break;
        case 'h4':
          // Push h4 element if there's an existing h3
          if (currentH3) {
            currentBlock.push(
              <TextLinked
                text={item.text}
                key={`${item.id}-${h4Count}-${Math.random()}`}
                hyperlinks={hyperlinks}
                className='pl-4'
              />,
            );
            h4Count++;
          }
          break;
        case 'divider':
          // Push divider element if there's an existing h3
          if (currentH3) {
            currentBlock.push(<Devider key={index} />);
          }
          break;
        default:
          break;
      }
    });

    // Push the last block if there's any remaining content
    if (currentH3 && currentBlock.length > 0) {
      blocks.push(renderBlock(currentH3, currentBlock));
    }

    // Merge blocks if less than 11 h4 elements in total
    if (blocks.length >= 4) {
      for (let i = 3; i < blocks.length - 1; i++) {
        const currentBlockH3 = blocks[i].props.children[0];
        const nextBlockH3 = blocks[i + 1].props.children[0];
        const currentBlockH4Elements = blocks[i].props.children.slice(1);
        const nextBlockH4Elements = blocks[i + 1].props.children.slice(1);

        if (currentBlockH4Elements.length + nextBlockH4Elements.length < 11) {
          // Merge h4 elements
          const mergedChildren = [
            renderBlock(currentBlockH3, currentBlockH4Elements),
            renderBlock(nextBlockH3, nextBlockH4Elements),
          ];

          blocks[i] = (
            <div className='flex flex-col gap-4 ' key={`merged-block-${i}`}>
              {mergedChildren}
            </div>
          );

          // Remove next block
          blocks.splice(i + 1, 1);

          // Decrement index to adjust for the removed block
          i--;
        }
      }
    }

    return blocks;
  };

  const renderBlock = (h3: JSX.Element, h4Elements: JSX.Element[]) => (
    <div>
      {h3}
      {h4Elements}
    </div>
  );

  return (
    <div className='bg-white grid gap-x-4 lg:gap-x-24 gap-y-4 md:gap-y-4 grid-cols-1 md:grid-cols-2 justify-center items-center'>
      {renderBlocks(items).map((block, index) => (
        <div key={index}>{block}</div>
      ))}
    </div>
  );
};

export default UnorderedList;

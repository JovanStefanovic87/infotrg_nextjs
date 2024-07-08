import { ListOfLinks } from '../../helpers/types';
import { hyperlinks } from '../../o-nama/poslovna-saradnja/BussinessCooperationData';
import H3 from './H3';
import TextLinked from './TextLinked';

interface Props {
  items: ListOfLinks[];
}

const UnorderedList: React.FC<Props> = ({ items }) => {
  const renderListItem = (item: ListOfLinks, index: number) => {
    switch (item.type) {
      case 'h3':
        return <H3 text={item.text} key={index} />;
      case 'H3BoldCenter':
        return (
          <h3 className='font-bold text-center mb-2 text-lg' key={index}>
            {item.text}
          </h3>
        );
      case 'h4':
        return <TextLinked text={item.text} key={index} hyperlinks={hyperlinks} className='pl-4' />;
      case 'divider':
        return <hr className='my-4 w-full' key={index} />;
      case 'p':
        return (
          <p className='mb-2 w-full' key={index}>
            {item.text}
          </p>
        );
      case 'hr':
        return <hr className='my-4 w-full' key={index} />;
      default:
        return null;
    }
  };

  const renderBlocks = (items: ListOfLinks[]) => {
    const blocks = [];
    let currentBlock = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.type === 'h3' && currentBlock.length > 0) {
        blocks.push(
          <div className="group-block md:mb-6 p-4 md:border md:border-gray-200" key={`block-${i}`}>
            {currentBlock}
          </div>
        );
        currentBlock = [];
      }

      currentBlock.push(renderListItem(item, i));

      if (item.type === 'h3' && currentBlock.length > 1) {
        blocks.push(
          <div className="group-block md:mb-6 p-4 md:border md:border-gray-200" key={`block-${i}`}>
            {currentBlock}
          </div>
        );
        currentBlock = [];
      }
    }

    if (currentBlock.length > 0) {
      blocks.push(
        <div className="group-block md:mb-6 p-4 md:border md:border-gray-200" key={`block-last`}>
          {currentBlock}
        </div>
      );
    }

    return blocks;
  };

  return (
    <div className='bg-white flex flex-row flex-wrap justify-between'>
      {renderBlocks(items)}
    </div>
  );
};

export default UnorderedList;

import { ListOfLinks } from '../../helpers/types';
import { hyperlinks } from '../../o-nama/poslovna-saradnja/BussinessCooperationData';
import { isTextHyperlinked } from '../../helpers/universalFunctions';
import H3 from './H3';
import H4 from './H4';
import Text from './Text';
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
          <h3 className='font-bold text-center mb-2' key={index}>
            {item.text}
          </h3>
        );
      case 'h4':
        return <TextLinked text={item.text} key={index} hyperlinks={hyperlinks} className='pl-8'/>;

      case 'divider':
        return <hr className='my-4' key={index} />;
      case 'list':
        return null;
      case 'p':
        return (
          <p className='mb-2' key={index}>
            {item.text}
          </p>
        );
      case 'hr':
        return <hr className='my-4' key={index} />;
      default:
        return null;
    }
  };

  return (
    <div className='space-y-4 bg-white'>
      {items.map((item, index) => renderListItem(item, index))}
    </div>
  );
};

export default UnorderedList;

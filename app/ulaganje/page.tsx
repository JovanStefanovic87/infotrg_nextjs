import Main from '../components/layout/Main';
import CollapsibleContentBlock from '../components/containers/CollapsibleContentBlock';

const Invest = () => {
  return (
    <Main>
      <CollapsibleContentBlock title='Block 1'>
        <p>
          This is the content for block 1. You can put any content here, including text, images, or
          other components.
        </p>
      </CollapsibleContentBlock>
      <CollapsibleContentBlock title='Block 2'>
        <p>
          This is the content for block 2. You can put any content here, including text, images, or
          other components.
        </p>
      </CollapsibleContentBlock>
      <CollapsibleContentBlock title='Block 3'>
        <p>
          This is the content for block 3. You can put any content here, including text, images, or
          other components.
        </p>
      </CollapsibleContentBlock>
    </Main>
  );
};

export default Invest;

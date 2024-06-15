import Main from '../components/layout/Main';
import { NextPage } from 'next';
import InvestContent from './InvestContent';

const Invest: NextPage = () => {
  return (
    <>
      <Main>
        <InvestContent />
      </Main>
    </>
  );
};

export default Invest;

import Main from '../components/layout/Main';
import { NextPage } from 'next';
import InvestContent from './InvestContent';

export const metadata = {
  title: 'Infotrg | Ulaganje',
  description: 'Pametna mogućnost ulaganja',
};

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

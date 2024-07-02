import { NextPage } from 'next';
import PageContent from './PageContent';

export const metadata = {
  title: 'Infotrg | Ulaganje',
  description: 'Pametna mogućnost ulaganja',
};

const Invest: NextPage = () => {
  return (
    <>
      <PageContent />
    </>
  );
};

export default Invest;

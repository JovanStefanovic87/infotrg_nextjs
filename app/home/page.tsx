import { NextPage } from 'next';
import PageContent from './PageContent';

export const metadata = {
  title: 'Infotrg',
  description: 'Informacija pokreće trgovinu',
};

const Home: NextPage = () => {
  return (
    <>
      <PageContent />
    </>
  );
};

export default Home;

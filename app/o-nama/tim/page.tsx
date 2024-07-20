import { NextPage } from 'next';
import TimContent from './TimContent';

export const metadata = {
  title: 'Infotrg | O nama',
  description: 'O nama',
};

const Tim: NextPage = () => {
  return (
    <>
      <TimContent />
    </>
  );
};

export default Tim;

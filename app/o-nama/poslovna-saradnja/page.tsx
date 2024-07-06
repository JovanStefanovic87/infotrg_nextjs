import { NextPage } from 'next';
import BussinessCooperation from './BussinessCooperation';

export const metadata = {
  title: 'Infotrg | Ulaganje',
  description: 'Pametna mogućnost ulaganja',
};

const Invest: NextPage = () => {
  return (
    <>
      <BussinessCooperation />
    </>
  );
};

export default Invest;

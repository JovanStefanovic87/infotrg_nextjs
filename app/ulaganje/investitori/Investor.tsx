import React from 'react';
import { invested, transfered } from './investorsData';
import H2 from '@/app/components/text/H2';
import BlockTitle from '@/app/components/text/BlockTitle';

interface Props {
  id: string;
  name: string;
  view: 'investment' | 'withdrawal' | 'transfer';
  share: string;
}

const Investor: React.FC<Props> = ({ id, name, view, share }) => {
  const investments = invested[id] || [];
  const transfers = transfered[id] || [];
  const isAmountPublic = investments.length > 0 && investments[0].amount;

  const roundUp = (num: number, precision: number): number => {
    const factor = Math.pow(10, precision);
    return Math.ceil(num * factor) / factor;
  };

  const totalInvestment = roundUp(
    investments.reduce(
      (sum, investment) =>
        sum + (investment.amount ? parseFloat(investment.amount.replace(',', '.')) : 0),
      0,
    ),
    2,
  ).toFixed(2);

  const totalTransfer = roundUp(
    transfers.reduce(
      (sum, transfer) =>
        sum + (transfer.amount ? parseFloat(transfer.amount.replace(',', '.')) : 0),
      0,
    ),
    2,
  ).toFixed(2);

  return (
    <div>
      {view === 'investment' ? (
        <div>
          <BlockTitle text='ULAGANJE FINANSIJA' bgColor='yellowLighter' align='center' />
          <div className='flex flex-col gap-4'>
            <div className='mt-4'>
              <p className='text-lg text-black'>
                <strong>Ime i prezime :</strong> {name}
              </p>
              <p className='text-lg text-black'>
                <strong>Registarski broj :</strong> {id}
              </p>
            </div>
            <table className='w-full bg-white border border-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-3 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600'>
                    Datum
                  </th>
                  {isAmountPublic && (
                    <th className='px-3 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600'>
                      Iznos
                    </th>
                  )}
                  <th className='px-3 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600'>
                    Udeo
                  </th>
                </tr>
              </thead>
              <tbody>
                {investments.map((investment, index) => (
                  <tr key={index} className='hover:bg-gray-100'>
                    <td className='px-3 py-4 border-b border-gray-200 text-sm text-gray-700'>
                      {investment.date}
                    </td>
                    {isAmountPublic && (
                      <td className='px-3 py-4 border-b border-gray-200 text-sm text-gray-700'>
                        {investment.amount && investment.amount.replace(',', '.')} EUR
                      </td>
                    )}
                    <td className='px-3 py-4 border-b border-gray-200 text-sm text-gray-700'>
                      {investment.share}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className='text-lg text-black'>
              <strong>Ukupno uloženo:</strong> {isAmountPublic && `${totalInvestment} EUR / `}
              {`${share} %`}
            </p>
            {transfers.length > 0 && (
              <>
                <BlockTitle text='PRENOS VLASNIČKIH UDELA' bgColor='yellowLighter' align='center' />
                <table className='w-full bg-white border border-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th className='px-3 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600'>
                        Datum
                      </th>
                      <th className='px-3 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600'>
                        Iznos
                      </th>
                      <th className='px-3 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600'>
                        Udeo
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transfers.map((transfer, index) => (
                      <tr key={index} className='hover:bg-gray-100'>
                        <td className='px-3 py-4 border-b border-gray-200 text-sm text-gray-700'>
                          {transfer.date}
                        </td>
                        <td className='px-3 py-4 border-b border-gray-200 text-sm text-gray-700'>
                          {transfer.amount && transfer.amount.replace(',', '.')} EUR
                        </td>
                        <td className='px-3 py-4 border-b border-gray-200 text-sm text-gray-700'>
                          {transfer.share}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className='text-lg text-black'>
                  <strong>Ukupan prenos:</strong> {`${totalTransfer} EUR`}
                </p>
              </>
            )}
          </div>
        </div>
      ) : (
        <div>
          <BlockTitle text='POVLAČENJE FINANSIJA' bgColor='yellowLighter' align='center' />
          <p className='text-lg text-black'>
            <strong>Ukupno:</strong> 0 EUR 0.00%
          </p>
        </div>
      )}
    </div>
  );
};

export default Investor;

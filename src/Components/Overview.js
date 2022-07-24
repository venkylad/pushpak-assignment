import React from 'react';
import Info from './Info';
import LineChart from './LineChart';
import OverviewCard from './OverviewCard';

const Overview = ({ overviewData, ordersList, days }) => {
  const { summary, overview } = overviewData;
  return (
    <div className='p-5 lg:p-10'>
      <h4 className='text-[#b2b8c0] text-base font-semibold'>
        Welcome {localStorage.getItem('user') || 'User'}
      </h4>
      <h1 className='text-[#1e2323] text-2xl font-bold'>Overview Shop</h1>
      <div className='mt-10 grid grid-cols-2  lg:grid-cols-3 gap-5'>
        <OverviewCard
          name='New Orders'
          amount={overview?.new_orders[0]?.new_orders}
          index={1}
        />
        <OverviewCard
          name='Average Sale'
          amount={Number(overview?.average_sale[0]?.average_sale).toFixed(2)}
          index={2}
        />
        <OverviewCard
          name='Total Earnings'
          amount={Number(overview?.total_earnings[0]?.total_earnings).toFixed(
            2
          )}
          index={3}
        />
      </div>
      <div className='mt-5'>
        <Info summary={summary} />
      </div>
      <div>
        <LineChart ordersList={ordersList} days={days} />
      </div>
    </div>
  );
};

export default Overview;

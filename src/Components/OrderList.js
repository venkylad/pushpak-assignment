import moment from 'moment';
import React from 'react';

const OrderList = ({ ordersList }) => {
  return (
    <>
      <div className='mt-3 lg:mt-5 capitalize'>
        <div className='grid grid-cols-3 lg:grid-cols-5 p-2 text-base font-medium text-[#b2b8c0] '>
          <p className='hidden lg:block'>Date</p>
          <p className='hidden lg:block'>ID</p>
          <p>Billing name</p>
          <p>Amount</p>
          <p>Order Status</p>
        </div>
        <div className='bg-white rounded-lg'>
          {ordersList?.map((order) => (
            <div
              key={order?.id}
              className='grid grid-cols-3 lg:grid-cols-5 p-2 py-4 border-0 border-b-2 border-b-neutral-200 text-sm font-medium text-[#6b7172] items-center'
            >
              <p className='hidden lg:block'>
                {moment(order?.date).format('MMM DD, hh:mm')}
              </p>
              <p className='hidden lg:block'>{order?.id}</p>
              <p>{order?.billing_name}</p>
              <p>${order?.amount}</p>
              <p
                className={`${
                  order?.order_status === 'processing' &&
                  'text-yellow-500 bg-yellow-100'
                } ${
                  order?.order_status === 'refund' &&
                  'text-pink-500 bg-pink-100'
                } ${
                  order?.order_status === 'in delivery' &&
                  'text-blue-500 bg-blue-100'
                } ${
                  order?.order_status === 'delivered' &&
                  'text-green-500 bg-green-100'
                } ${
                  order?.order_status === 'cancelled' &&
                  'text-red-500 bg-red-100'
                } py-1 rounded-[8px] max-w-[100px] text-center`}
              >
                {order?.order_status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderList;

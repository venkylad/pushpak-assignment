import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { BiBell, BiFilterAlt, BiPlus } from 'react-icons/bi';
import OrderList from './OrderList';

const Orders = ({ ordersList }) => {
  return (
    <div className='w-full h-full bg-[#f7f8fa] p-5 lg:p-10'>
      <div className='w-full flex justify-end'>
        <div className='text-lg lg:text-2xl text-[#777c7f] cursor-pointer'>
          <RiSearchLine />
        </div>
        <div className='text-lg lg:text-2xl ml-4 text-[#777c7f] cursor-pointer'>
          <BiBell />
        </div>
      </div>
      <h1 className='font-bold text-lg lg:text-2xl my-2 lg:my-4 text-[#1e2323]'>
        Latest Orders
      </h1>
      <div className='flex justify-between bg-white py-2 px-4 rounded-full items-center'>
        <div className='text-lg lg:text-2xl text-[#777c7f] cursor-pointer'>
          <BiFilterAlt />
        </div>
        <div className='font-medium text-lg text-[#777c7f]'>Show filters</div>
        <div className='text-lg lg:text-2xl text-[#777c7f] cursor-pointer'>
          <BiPlus />
        </div>
      </div>
      <OrderList ordersList={ordersList?.slice(0, 10)} />
      <div className='flex justify-end mt-4 lg:mt-8'>
        <button className='bg-blue-600 text-white font-semibold text-base lg:text-lg py-1 px-3 lg:py-3 lg:px-6 rounded-full cursor-pointer'>
          More Orders
        </button>
      </div>
    </div>
  );
};

export default Orders;

import React from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

const OverviewCard = ({ name, amount, index }) => {
  return (
    <>
      <div
        className={`flex flex-col justify-between w-[150px] h-[150px] rounded-[18px] p-4 font-medium ${
          index === 1
            ? 'bg-[#fef6e1]'
            : index === 2
            ? 'bg-[#e6ebff]'
            : 'bg-[#d9f3f4]'
        }`}
      >
        <p className='text-[#6b7172] max-w-[50px]'> {name}</p>
        <div>
          <p className='text-base font-medium text-[#b5a87b] flex'>
            +5%
            <div className='text-2xl'>
              <BsArrowUpShort />
            </div>
          </p>
          <p className='text-xl text-[#1e2323] font-semibold'>
            {index !== 1 && '$'}
            {amount}
          </p>
        </div>
      </div>
    </>
  );
};

export default OverviewCard;

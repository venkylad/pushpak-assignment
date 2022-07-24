import React from 'react';

const InfoListItem = ({ icon, bg, status, amount, last }) => {
  return (
    <>
      <div
        className={`flex justify-between p-2 border-0 ${
          !last && 'border-b-2 border-b-neutral-200'
        }`}
      >
        <div className='flex items-center'>
          <div
            className={`text-xl lg:text-2xl text-white p-1 rounded-xl ${bg} mr-2 lg:mr-3`}
          >
            {icon}
          </div>
          <p className='text-[#6b7172] text-base font-medium capitalize'>
            {status}
          </p>
        </div>
        <div className='flex items-center font-medium'>
          <p className='mr-3 lg:mr-5 text-[#1e2323]'>{amount}</p>
          <p className='text-[#b2b8c0]'>{Math?.round(Number(amount) / 2)}%</p>
        </div>
      </div>
    </>
  );
};

export default InfoListItem;

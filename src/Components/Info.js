import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { BiPackage, BiExit } from 'react-icons/bi';
import { FcProcess } from 'react-icons/fc';
import { MdOutlineCancelPresentation } from 'react-icons/md';
import InfoListItem from './InfoListItem';

const Info = ({ summary }) => {
  return (
    <div className='bg-[#f8f9fd] w-full max-w-full lg:max-w-[500px] rounded-3xl p-4'>
      <div className='flex'>
        <div className='w-[20px] lg:w-[30px] flex flex-col rounded-full overflow-hidden mx-4 lg:mx-8'>
          <div className='h-[4%]  bg-gray-700 '></div>
          <div className='h-[8%]  bg-red-400 '></div>
          <div className='h-[13%]  bg-yellow-500 '></div>
          <div className='h-[25%]  bg-green-500 '></div>
          <div className='h-[50%]  bg-blue-500 '></div>
        </div>
        {summary?.length > 0 && (
          <div className='flex-1 '>
            <InfoListItem
              bg='bg-yellow-500'
              icon={<FcProcess />}
              status={summary[0]?.order_status}
              amount={summary[0]?.count}
            />
            <InfoListItem
              bg='bg-green-500'
              icon={<BiPackage />}
              status={summary[1]?.order_status}
              amount={summary[1]?.count}
            />
            <InfoListItem
              bg='bg-blue-500'
              icon={<TbTruckDelivery />}
              status={summary[2]?.order_status}
              amount={summary[2]?.count}
            />
            <InfoListItem
              bg='bg-gray-700'
              icon={<BiExit />}
              status={summary[3]?.order_status}
              amount={summary[3]?.count}
            />
            <InfoListItem
              bg='bg-red-500'
              icon={<MdOutlineCancelPresentation />}
              status={summary[4]?.order_status}
              amount={summary[4]?.count}
              last
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;

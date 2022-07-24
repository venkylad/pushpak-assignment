import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { BiChevronDown } from 'react-icons/bi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ ordersList, days }) => {
  const [dates, setDates] = useState([]);
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    const daysArr = [];
    const priceArr = [];
    for (let i = 0; i < ordersList?.length; i++) {
      daysArr.push(moment(ordersList[i]?.date).format('DD ddd'));
      priceArr.push(ordersList[i]?.amount);
    }
    setAmount(priceArr);
    setDates(daysArr);
  }, [ordersList]);

  console.log(days, amount, ordersList);

  const labels = days;

  const options = {
    responsive: true,
    tension: 0.5,
    scale: {
      pointLabels: {
        fontStyle: 'bold',
      },
    },
    plugins: {
      legend: false,
      title: {
        display: false,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: amount,
        borderColor: '#2563eb',
        backgroundColor: 'white',
        borderWidth: 4,
        lineWidth: 6,
        drawTicks: true,
      },
    ],
  };

  return (
    <>
      <div className='flex justify-between mt-10 mb-3'>
        <div className='flex'>
          <div>
            <p className='max-h-[35px] font-medium text-gray-800 text-sm lg:text-lg border-0 border-b-4 border-b-[#2563eb]'>
              Revenue
            </p>
          </div>
          <div className='font-medium ml-4 lg:ml-10 text-blue-700 opacity-75 text-sm lg:text-lg '>
            Orders
          </div>
        </div>
        <div className='text-sm border rounded-lg pl-2 py-1 lg:px-4 lg:pl-4 font-medium text-gray-800 flex items-center'>
          Last 7 days{' '}
          <div className=' text-2xl p-0'>
            <BiChevronDown />
          </div>
        </div>
      </div>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChart;

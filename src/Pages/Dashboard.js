import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Orders from '../Components/Orders';
import Overview from '../Components/Overview';
import moment from 'moment';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [summary, setSummary] = useState({});
  const [days, setDays] = useState([]);

  const fetchDetails = async (url, toFetch) => {
    const token = window.localStorage.getItem('token');
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: token,
        },
      });
      switch (toFetch) {
        case 'orders':
          setOrders(data?.data);
          break;
        case 'summary':
          setSummary(data?.data);
          break;
        case 'days':
          const formatedDates = [];
          Object.keys(data?.data?.last7Days)?.map((item) =>
            formatedDates.push(moment(item).format('DD ddd'))
          );
          setDays(formatedDates);
          break;
        default:
          return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails(
      'http://13.76.214.165:8001/api/orders?page=1&limit=15&order_status=',
      'orders'
    );
    fetchDetails('http://13.76.214.165:8001/api/analytics/summary', 'summary');
    fetchDetails('http://13.76.214.165:8001/api/analytics/last7Days', 'days');
  }, []);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div>
        <Overview overviewData={summary} ordersList={orders} days={days} />
      </div>
      <div>
        <Orders ordersList={orders} />
      </div>
    </div>
  );
};

export default Dashboard;

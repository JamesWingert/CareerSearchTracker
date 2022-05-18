import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
const Stats = () => {
  const { showStats, isLoading, stats } = useAppContext();

  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];
  useEffect(() => {
    showStats();
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return (
      <div className={isLoading ? 'loading loading-center' : 'loading'}></div>
    );
  }
  return (
    <div className='container mx-auto bg-base-100 flex-col  w-full h-[88.5vh]'>
      {' '}
      <h1 className='text-center text-4xl mb-10 text-error'>
        Application Statistics
      </h1>
      {defaultStats.map((item, index) => {
        return (
          <header key={index}>
            <h5 className=' flex items-center text-center justify-center '>
              <div className='mr-2 text-warning'>{item.icon}</div>
              {item.title}
            </h5>
            <span className='flex items-center text-center justify-center text-error'>
              {item.count}
            </span>
          </header>
        );
      })}
    </div>
  );
};

export default Stats;

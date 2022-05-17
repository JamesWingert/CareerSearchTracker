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
    <div>
      {defaultStats.map((item, index) => {
        return (
          <header key={index}>
            <h5 className='title'>{item.title}</h5>
            <span className='count'>{item.count}</span>
            <span className='icon'>{item.icon}</span>
          </header>
        );
      })}
    </div>
  );
};

export default Stats;

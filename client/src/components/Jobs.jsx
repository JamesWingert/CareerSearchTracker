import { useAppContext } from '../context/appContext';
import moment from 'moment';

import { useEffect } from 'react';
import Loading from './Loading';
import { Link } from 'react-router-dom';

import PageButton from './PageButton';

const Jobs = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
    createdAt,
  } = useAppContext();
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);
  const { setEditJob, deleteJob } = useAppContext();
  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return <h2>No jobs to display...</h2>;
  }
  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY');
  return (
    <div className=' bg-base-100 pb-10 h-fill'>
      <h5 className='text-xl font-semibold text-success text-center mt-10 mb-4'>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className='overflow-x-auto   mx-4'>
        <div className='align-middle inline-block min-w-full '>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg '>
            <table className='min-w-full divide-y divide-gray-200 mx-auto'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider text-neutral'
                  >
                    Company
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider text-neutral'
                  >
                    Position
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium  uppercase text-neutral tracking-wider'
                  >
                    Technologies
                  </th>{' '}
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium  uppercase text-neutral tracking-wider'
                  >
                    Link
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs text-neutral font-medium  uppercase tracking-wider'
                  >
                    Location
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium  uppercase text-neutral tracking-wider'
                  >
                    Job Type
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium  uppercase text-neutral tracking-wider'
                  >
                    Status
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium  uppercase text-neutral tracking-wider'
                  >
                    Applied
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Delete</span>
                  </th>
                </tr>
              </thead>
              {jobs.map((job) => {
                return (
                  <tbody key={job._id} className='bg-white'>
                    <tr>
                      <td className='px-6 py-4  text-sm font-medium text-neutral'>
                        {job.company}
                      </td>
                      <td className='px-6 py-4  text-sm text-neutral'>
                        {job.position}
                      </td>
                      <td className='px-6 py-4  text-sm text-neutral'>
                        {job.languages}
                      </td>
                      <td className='px-6 py-4  text-right text-sm font-medium'>
                        <a
                          target='_blank'
                          href={job.href}
                          className='text-indigo-600 hover:text-indigo-900'
                          rel='noreferrer'
                        >
                          Link
                        </a>
                      </td>
                      <td className='px-6 py-4  text-sm text-neutral'>
                        {job.jobLocation}
                      </td>
                      <td className='px-6 py-4  text-sm text-neutral'>
                        {job.jobType}
                      </td>
                      <td className='px-6 py-4  text-sm text-neutral'>
                        {job.status}
                      </td>
                      <td className='px-6 py-4  text-sm text-neutral'>
                        {date}
                      </td>
                      <td className='px-6 py-4  text-right text-sm font-medium'>
                        <Link
                          to='/add-job'
                          className='text-indigo-600 hover:text-indigo-900'
                          onClick={() => setEditJob(job._id)}
                        >
                          Edit
                        </Link>
                      </td>
                      <td className='px-6 py-4  text-right text-sm font-medium'>
                        <button
                          className='text-indigo-600 hover:text-indigo-900'
                          onClick={() => deleteJob(job._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>

      {numOfPages > 1 && <PageButton />}
    </div>
  );
};

export default Jobs;

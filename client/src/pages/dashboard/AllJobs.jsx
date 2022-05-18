import { useAppContext } from '../../context/appContext';
import Jobs from '../../components/Jobs';

const AllJobs = () => {
  const {
    isLoading,
    search,
    searchStatus,
    sortOptions,
    handleChange,
    searchType,
    sort,
    clearFilters,
    jobTypeOptions,
    statusOptions,
  } = useAppContext();
  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };
  return (
    <div className='container mx-auto bg-base-100 h-screen'>
      <div className='flex-col max-w-lg mx-auto bg-base-300 rounded-3xl shadow-lg p-10'>
        <form>
          <h1 className='text-center text-4xl mb-10 text-error '>All Jobs</h1>
          <div className='grid mx-12 space-y-4 '>
            <h3>Search Companies</h3>
            <input
              type='text'
              id='search'
              name='search'
              value={search}
              onChange={handleSearch}
            />
            {/* search by status */}
            <h3>Application Status</h3>
            <select
              name='searchStatus'
              value={searchStatus}
              onChange={handleSearch}
            >
              {['all', ...statusOptions].map((itemValue, index) => {
                return (
                  <option key={index} value={itemValue}>
                    {itemValue}
                  </option>
                );
              })}
            </select>
            {/* search by type */}
            <h3>Job Type</h3>
            <select
              name='searchType'
              value={searchType}
              onChange={handleSearch}
            >
              {['all', ...jobTypeOptions].map((itemValue, index) => {
                return (
                  <option key={index} value={itemValue}>
                    {itemValue}
                  </option>
                );
              })}
            </select>
            {/* sort */}
            <h3>Sort By</h3>
            <select name='sort' value={sort} onChange={handleSearch}>
              {sortOptions.map((itemValue, index) => {
                return (
                  <option key={index} value={itemValue}>
                    {itemValue}
                  </option>
                );
              })}
            </select>
            <button className='btn' onClick={handleSubmit}>
              clear filters
            </button>
          </div>
        </form>
      </div>
      <Jobs />
    </div>
  );
};

export default AllJobs;

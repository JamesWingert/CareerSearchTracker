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
    <div className='container mx-auto bg-base-100 h-[88.5vh] '>
      <form className='mb-4 '>
        <h1 className='text-center text-4xl mb-10 text-error'>Search</h1>
        <div className=' space-y-4'>
          <input
            type='text'
            id='search'
            placeholder='Search Term'
            name='search'
            value={search}
            onChange={handleSearch}
          />
          {/* search by status */}
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
      <Jobs />
    </div>
  );
};

export default AllJobs;

import { useAppContext } from '../../context/appContext';
import Jobs from '../../components/Jobs';
const AllJobs = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    handleChange,
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
    <>
      <form>
        <h4>Search</h4>
        <div>
          <input
            type='text'
            name='search'
            value={search}
            onChange={handleSearch}
          />
          {/* search by status */}
          <select
            labelText='status'
            name='searchStatus'
            value='searchStatus'
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
            labelText='type'
            name='searchType'
            value='searchType'
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
          <select name='sort' value='sort' onChange={handleSearch}>
            {sortOptions.map((itemValue, index) => {
              return (
                <option key={index} value={itemValue}>
                  {itemValue}
                </option>
              );
            })}
          </select>
          <button className='btn' disabled={isLoading} onClick={handleSubmit}>
            clear filters
          </button>
        </div>
      </form>
      <Jobs />
    </>
  );
};

export default AllJobs;

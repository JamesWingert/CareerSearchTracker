import { Alert } from '../../components';
import { useAppContext } from '../../context/appContext';

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };
  const handleJobInput = (e) => {
    const value = e.target.value;
    handleChange({ value });
  };

  return (
    <>
      <form>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}
        <div>
          {/* position */}
          <input
            type='text'
            name='position'
            value={position}
            onChange={handleJobInput}
          />
          {/* company */}
          <input
            type='text'
            name='company'
            value={company}
            onChange={handleJobInput}
          />
          {/* location */}
          <input
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            onChange={handleJobInput}
          />
          {/* job status */}{' '}
          <label htmlFor='status' className='form-label'>
            status
          </label>
          <select name='status' value='status' onChange={handleJobInput}>
            {statusOptions.map((status, index) => {
              return (
                <option key={index} value={status}>
                  {status}
                </option>
              );
            })}
          </select>
          {/* job type */}{' '}
          <label htmlFor='jobType' className='form-label'>
            Job Type
          </label>
          <select
            name='jobType'
            labelText='job type'
            value='jobType'
            handleChange={handleJobInput}
          >
            {jobTypeOptions.map((itemValue, index) => {
              return (
                <option key={index} value={itemValue}>
                  {itemValue}
                </option>
              );
            })}
          </select>
          {/* btn container */}
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className='btn'
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddJob;

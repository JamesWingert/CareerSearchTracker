import { Alert } from '../../components';
import { useAppContext } from '../../context/appContext';

const AddJob = () => {
  const {
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
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <div className='container mx-auto bg-base-100 h-[88.5vh] '>
      <form>
        <h1 className='text-center text-4xl mb-10 text-error'>
          {isEditing ? 'Edit Job' : 'Add Job'}
        </h1>
        {showAlert && <Alert />}
        <div>
          {/* position */}
          <input
            type='text'
            id='position'
            placeholder='Position'
            name='position'
            value={position}
            onChange={handleJobInput}
          />
          {/* company */}
          <input
            type='text'
            name='company'
            placeholder='Company'
            value={company}
            onChange={handleJobInput}
          />
          {/* location */}
          <input
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            placeholder='Location'
            onChange={handleJobInput}
          />
          {/* job status */} <label htmlFor='status'>Status</label>
          <select name='status' value={status} onChange={handleJobInput}>
            {statusOptions.map((status, index) => {
              return (
                <option key={index} value={status}>
                  {status}
                </option>
              );
            })}
          </select>
          {/* job type */} <label htmlFor='jobType'>Job Type</label>
          <select name='jobType' value={jobType} onChange={handleJobInput}>
            {jobTypeOptions.map((jobType, index) => {
              return (
                <option key={index} value={jobType}>
                  {jobType}
                </option>
              );
            })}
          </select>
          {/* btn container */}
          <div className='btn'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
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
    </div>
  );
};

export default AddJob;

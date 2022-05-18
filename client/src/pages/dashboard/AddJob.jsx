import { Alert } from "../../components";
import { useAppContext } from "../../context/appContext";

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
    languages,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company) {
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
    <div className="container mx-auto bg-base-100 pb-10 ">
      <form className="max-w-md justify-center mx-auto bg-base-300 rounded-3xl shadow-lg p-10">
        <h1 className="text-center text-4xl mb-10 text-error">
          {isEditing ? "Edit Job" : "Add A Job"}
        </h1>
        {showAlert && <Alert />}

        <div className="grid flex-col gap-2 text-neutral">
          {/* company */}
          <label htmlFor="company" className="text-xl">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={handleJobInput}
          />

          {/* positionn */}
          <label htmlFor="position" className="text-xl">
            Position
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={position}
            onChange={handleJobInput}
          />
          <label htmlFor="languages" className="text-xl">
            Technologies
          </label>
          <input
            type="text"
            id="languages"
            name="languages"
            value={languages}
            onChange={handleJobInput}
          />
          {/* location */}
          <label htmlFor="location" className="text-xl">
            Location
          </label>
          <input
            type="text"
            labeltext="job location"
            name="jobLocation"
            value={jobLocation}
            onChange={handleJobInput}
          />
          {/* job status */}
          <label htmlFor="status" className="text-xl">
            Status
          </label>
          <select name="status" value={status} onChange={handleJobInput}>
            {statusOptions.map((status, index) => {
              return (
                <option key={index} value={status}>
                  {status}
                </option>
              );
            })}
          </select>
          {/* job type */}
          <label htmlFor="jobType" className="text-xl">
            Job Type
          </label>
          <select name="jobType" value={jobType} onChange={handleJobInput}>
            {jobTypeOptions.map((jobType, index) => {
              return (
                <option key={index} value={jobType}>
                  {jobType}
                </option>
              );
            })}
          </select>
          {/* btn container */}
          <div className="justify-end gap-4 flex mt-10">
            <button
              className="btn text-error bg-base-100 hover:bg-base-300"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn bg-success text-neutral hover:bg-success/60"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddJob;

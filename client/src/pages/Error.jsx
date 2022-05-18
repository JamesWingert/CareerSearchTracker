import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <div>
        <h3>Sorry we cannot find what you are looking for </h3>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default Error;

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container h-screen mx-auto">
      <div className=" text-center justify-center flex-col bg-base-100">
        <h3>Sorry we cannot find what you are looking for </h3>
        <Link to="/" className="text-purple-500">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;

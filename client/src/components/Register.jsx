import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Alert from "./Alert";
const initialState = {
  email: "",
  password: "",
  isMember: true,
};
export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, isLoading, displayAlert, showAlert, setupUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
    const currentUser = { email, password };
    if (values.isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! Redirecting...",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "Created successfully! Redirecting...",
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 ">
      <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden border-2 border-default shadow-xl">
        <div className="px-4 py-8 sm:px-10">
          <div className="justify-center text-2xl text-neutral text-center">
            {values.isMember ? "Login " : "Register"} {showAlert && <Alert />}
          </div>
          <div className="mt-6 relative mb-6">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
          </div>
          <div className="mt-6">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
                  className=" text-neutral block w-full shadow-sm focus:ring-success focus:border-success sm:text-sm border-gray-300 rounded-md"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  className="text-neutral block w-full shadow-sm focus:ring-success focus:border-success sm:text-sm border-gray-300 rounded-md"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-success hover:bg-success/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-success/90 "
                  disabled={isLoading}
                >
                  {values.isMember ? "Login " : "Register"}
                </button>
                <p className="mt-4 text-neutral">
                  {values.isMember
                    ? "Not a member yet? "
                    : "Already a member? "}
                  <button
                    type="button"
                    onClick={toggleMember}
                    className="text-accent hover:text-success"
                  >
                    {values.isMember ? "Register" : "Login "}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

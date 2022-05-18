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
            <p className="text-3xl text-center text-success font-semibold tracking-wide uppercase mb-3 text-"></p>
            {/* <div className='mt-1 grid '> */}
            {/* grid-cols-3 gap-3 */}
            {/* <div>
                <a
                  href='/'
                  alt=''
                  className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xl font-medium text-gray-500 hover:bg-gray-200 '
                >
                  <span className='sr-only'>Sign in with Google</span>
                  <FcGoogle />
                </a>
              </div> */}
            {/* 
              <div>
                <a
                  href='/'
                  className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-200'
                >
                  <span className='sr-only'>Sign in with Twitter</span>
                  <svg
                    className='w-5 h-5'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href='/'
                  className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-200'
                >
                  <span className='sr-only'>Sign in with GitHub</span>
                  <svg
                    className='w-5 h-5'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div> */}
            {/* </div> */}
          </div>
          <div className="mt-6 relative mb-6">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            {/* <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div> */}
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

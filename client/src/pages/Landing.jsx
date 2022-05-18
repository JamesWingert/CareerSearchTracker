import LandingNav from '../components/LandingNav';
import Register from '../components/Register';

export default function Landing() {
  return (
    <div className="container mx-auto bg-base-100 pt-8 pb-20  h-screen">
      <LandingNav />
      <div className="px-4 sm:px-6 sm:text-center md:max-w-6xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center mt-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center justify-center">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex ">
            <div>
              <h1 className=" tracking-tight font-extrabold  sm:leading-none text-5xl xl:text-6xl text-center items-center md:block text-error">
                Apply more
              </h1>
              <h1 className=" tracking-tight font-extrabold  sm:leading-none text-5xl xl:text-6xl text-center items-center md:block">
                track less.
              </h1>
              <p className=" md:block text-2xl mt-10 ">
                Career Tracker is a tool that helps you track your job
                applications and keep track of your progress. It keeps track of
                the company, the position, the status of the application, the
                date of the application, and other statistics.
              </p>
            </div>
          </div>

          <Register />
        </div>
      </div>
    </div>
  );
}

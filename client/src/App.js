import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Theme } from "react-daisyui";

import { Landing, Error, ProtectedRoute } from "./pages";
import { AllJobs, Layout, Stats, AddJob } from "./pages/dashboard";

function App() {
  return (
    <Theme dataTheme="winter" className="bg-base-300 mx-auto h-auto">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="add-job" element={<AddJob />} />
            {/* <Route path="profile" element={<Profile />} /> */}
          </Route>

          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;

import './App.css';
import Layout from './pages/dashboard/Layout';
import { Landing, Error } from './pages';
import { Theme } from 'react-daisyui';
import { ProtectedRoute } from './pages';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Theme dataTheme="cupcake" className="bg-base-300 mx-auto h-screen">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;

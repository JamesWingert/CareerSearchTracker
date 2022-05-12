import './App.css';
import Layout from './components/Layout';
import { Home, Error } from './pages';
import { Theme } from 'react-daisyui';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Theme dataTheme="cupcake" className="bg-base-300 mx-auto h-screen">
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;

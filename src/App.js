import './App.css';
import HomePage from './pages/homepage';
import DonationPage from './pages/donation';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/education-website' element={<HomePage />} />
        <Route path='/donation' element={<DonationPage />} />
      </Routes>
    </div>
  );
}

export default App;

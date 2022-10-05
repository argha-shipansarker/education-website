import './App.css';
import HomePage from './pages/homepage';
import DonationPage from './pages/donation';
import DonationRecievingForm from './pages/pay-with-card-form';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/education-website' element={<HomePage />} />
        <Route path='/donation' element={<DonationPage />} />
        <Route path='/donor-details' element={<DonationRecievingForm />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import HomePage from './pages/homepage';
import DonationPage from './pages/donation';
import DonationRecievingForm from './pages/pay-with-card-form';
import { Route, Routes } from 'react-router-dom';
import ThankYouModal from './pages/thank-you-modal';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onOpenModal = () => setIsModalOpen(true);
  const onCloseModal = () => setIsModalOpen(false);
  return (
    <div className="App">
      <Routes>
        <Route path='/education-website' element={<HomePage />} />
        <Route path='/donation' element={<DonationPage />} />
        <Route path='/donor-details' element={<DonationRecievingForm onOpenModal={onOpenModal} />} />
      </Routes>
      <ThankYouModal open={isModalOpen} onCloseModal={onCloseModal} />
    </div>
  );
}

export default App;

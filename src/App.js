import './App.css';
import HomePage from './pages/homepage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/education-website' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

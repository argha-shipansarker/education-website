import './App.css';
import Navbar from './components/navbar';
import HomePage from './pages/homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div className='mt-28'> */}
      <HomePage />
      {/* </div> */}
    </div>
  );
}

export default App;

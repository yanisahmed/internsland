import { Route, Routes } from 'react-router-dom';
import './App.css';
import InternsDetails from './components/Interns/InternsDetails';
import Hire from './pages/Hire';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/interns-details/:id" element={<InternsDetails />} />
      </Routes>
    </div>
  );
}

export default App;

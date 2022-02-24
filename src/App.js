import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hire from './pages/Hire';
import Home from './pages/Home';
import SingleDetails from './pages/SingleDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/interns-details/:id" element={<SingleDetails />} />
      </Routes>
    </div>
  );
}

export default App;

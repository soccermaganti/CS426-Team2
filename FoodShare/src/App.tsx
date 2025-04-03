import DashBoard from './pages/dashboard'
import BusinessLogin from './pages/businessLogin';
import ShelterLogin from './pages/shelterLogin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="flex flex-col min-h-screen bg-white">
          <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<BusinessLogin />} />
              <Route path="/shelter-login" element={<ShelterLogin />} />
              <Route path="/Dashboard" element={<DashBoard />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;

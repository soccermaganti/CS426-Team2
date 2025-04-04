import UserDashBoard from './components/UserDashboard';
import BusinessLogin from './pages/businessLogin';
import UserLogin from './pages/userLogin';
import LandingPage from './pages/landingPage';
import BusinessDashboard from './components/BusinessDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="flex flex-col min-h-screen bg-green-100">
          <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/business-login" element={<BusinessLogin />} />
              <Route path="/shelter-login" element={<UserLogin />} />
              <Route path="/business-dashboard" element={<BusinessDashboard />} />
              <Route path="/user-dashboard" element={<UserDashBoard />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;
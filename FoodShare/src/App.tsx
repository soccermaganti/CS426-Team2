import DashBoard from './pages/dashboard'
import Login from './pages/login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
          <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/goals" element={<Login />} />
              <Route path="/" element={<DashBoard />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;

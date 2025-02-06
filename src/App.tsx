import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

// Pages
import Home from './pages/Home';
import TestScreen from './pages/TestScreen';
import Results from './pages/Results';
import Profile from './pages/Profile';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="test" element={<TestScreen />} />
              <Route path="results" element={<Results />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
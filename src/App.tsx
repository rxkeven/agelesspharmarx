import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy.html" element={<PrivacyPolicy />} />
        <Route path="/terms.html" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

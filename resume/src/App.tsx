import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import ResumeKr from './pages/ResumeKr';
import ResumeEn from './pages/ResumeEn';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/kr" replace />} />
        <Route path="/kr" element={<ResumeKr />} />
        <Route path="/en" element={<ResumeEn />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

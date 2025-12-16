import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResumeKr from './pages/ResumeKr';
import ResumeEn from './pages/ResumeEn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResumeKr />} />
        <Route path="/resume" element={<ResumeKr />} />
        <Route path="/resume/kr" element={<ResumeKr />} />
        <Route path="/resume/en" element={<ResumeEn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

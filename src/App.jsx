import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import ResumeTemplates from './pages/Resumetemplates';
import ResumeBuilder from './pages/ResumeBuilder';
import ResumeExamples from './pages/ResumeExamples';
//import Writtingresume from './pages/write-resume';
//import Resumecheck from './pages/ResumeCheck';
//import Resumeformat from './pages/Resume-format';
//import ResumeHelp from './pages/ResumeHelp';
import NavBar from './component/navBar1'
function App() {
  const [count, setCount] = useState(0);

  return (<>
  
    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/resume-example" element={<ResumeExamples />} />
        <Route path="/resume-templates" element={<ResumeTemplates />} />
        {/*<Route path="/resume-checker" element={<Resumecheck />} />
        <Route path="/resume-format" element={<Resumeformat />} />
        <Route path="/resume-help" element={<ResumeHelp />} />
        <Route path="/how-to-write-a-resume" element={<Writtingresume />} />*/}
      </Routes>
    </Router>
    </>
  );
}

export default App;


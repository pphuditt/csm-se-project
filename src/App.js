import { Routes, Route } from 'react-router-dom'
import './App.css';

import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import ProblemInform from "./components/ProblemInform";
import Success from "./components/Success";
import InformHistory from './components/InformHistory';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="home" element={<HomePage />} />
      <Route path="problem-inform" element={<ProblemInform />} />
      <Route path="inform-success" element={<Success />} />
      <Route path="inform-history" element={<InformHistory />} />
    </Routes>
  );
}

export default App;

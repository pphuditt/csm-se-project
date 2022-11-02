import { Routes, Route } from 'react-router-dom'
import './App.css';

import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import ProblemInform from "./components/ProblemInform";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="home" element={<HomePage />} />
      <Route path="problem-inform" element={<ProblemInform />} />
    </Routes>
  );
}

export default App;

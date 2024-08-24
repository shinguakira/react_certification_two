import { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuestionsPage from './pages/questionsPage';
import Test from './pages/test';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<QuestionsPage />} />
            <Route path="*" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;

import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import QuestionsPage from '../pages/questionsPage';

const AppRoutes: React.FC = () => {
  return (
    <>
      <label>asdf</label>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter basename="/myapp">
          <Routes>
            <Route path="/" element={<QuestionsPage />} />
            <Route path="*" element={<QuestionsPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default AppRoutes;

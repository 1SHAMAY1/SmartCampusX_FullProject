
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AttendancePage from './pages/AttendancePage';
import BookingPage from './pages/BookingPage';
import AlertPage from './pages/AlertPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/attendance" element={<AttendancePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/alerts" element={<AlertPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;

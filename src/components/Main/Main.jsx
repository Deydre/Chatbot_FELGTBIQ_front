import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Login from './Login/Login';
import AdminDashboard from './AdminDashboard/AdminDashboard';

const Main = () => {
  return <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin/login' element={<Login />} />
      <Route path='/admin/dashboard' element={<AdminDashboard/>} />
    </Routes>
  </main>;
};

export default Main;

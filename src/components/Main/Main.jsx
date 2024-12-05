import React from "react";
import Home from './Home/Home';
import Login from './Login/Login';
import AdminDashboard from './AdminDashboard/AdminDashboard';

const Main = () => {
  return <main>
    <Home/>
    <Login/>
    <AdminDashboard/>
  </main>;
};

export default Main;

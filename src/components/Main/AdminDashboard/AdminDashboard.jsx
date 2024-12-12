import React, { useState } from 'react';
import SideBar from "./SideBar/SideBar";
import AdminInfo from "./AdminInfo/AdminInfo";

const AdminDashboard = () => {
  const [iframeUrl, setIframeUrl] = useState('');

  const updateIframeUrl = (data) => {
    setIframeUrl(data);
  };

  return <section id="adminDashboard">
    <SideBar updateIframeUrl={updateIframeUrl} />
    <AdminInfo iframeUrl={iframeUrl} />    

  </section>;
};

export default AdminDashboard;

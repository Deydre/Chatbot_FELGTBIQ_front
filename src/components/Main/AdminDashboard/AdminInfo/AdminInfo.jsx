import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import { ColorRing } from 'react-loader-spinner';

const AdminInfo = ({ iframeUrl }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    setLoading(false);
  }, [iframeUrl]);

  
  if (loading) {
    return <div>
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  </div>
  }

  return (
    <div>
      <h2>Panel de administración</h2>
         <Card iframeUrl={iframeUrl} />
    </div>
  );
};

export default AdminInfo;

import React, { useState } from 'react';

const Card = ({ iframeUrl}) => {

  return (
    <div>
      <iframe
        src={iframeUrl}
        height="600"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Card;

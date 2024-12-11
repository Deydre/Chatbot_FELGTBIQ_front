import React, { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

const Card = ({ iframeUrl}) => {

  return (
    <div>
      <iframe
        src={iframeUrl}
        width="1500"
        height="600"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Card;

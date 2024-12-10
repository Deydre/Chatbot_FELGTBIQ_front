import React from 'react';

const Card = ({ iframeUrl }) => {
  return (
    <div> 
      {iframeUrl ? (
        <iframe
          src={iframeUrl}
          width="1500"
          height="600"
          style={{ border: 'none' }}
        ></iframe>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Card;

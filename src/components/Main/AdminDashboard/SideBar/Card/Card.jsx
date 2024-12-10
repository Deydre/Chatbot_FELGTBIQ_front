import React from 'react';

const Card = ({ iframeUrl }) => {
  return (
    <div>
      {/* Mostrar el iframe solo si hay una URL seleccionada */}
      {iframeUrl ? (
        <iframe
          src={iframeUrl}
          width="600"
          height="400"
          style={{ border: 'none' }}
        ></iframe>
      ) : (
        <p>Haz clic en una categoría para ver el gráfico.</p>
      )}
    </div>
  );
};

export default Card;

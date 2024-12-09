import React, { useState } from 'react';
import Card from './Card'; // Asegúrate de que este archivo esté en la misma carpeta o ajusta la ruta

const SideBar = () => {
  const [iframeUrl, setIframeUrl] = useState('');

  // Las 7 categorías y sus URLs correspondientes
  const categorias = [
    { texto: 'Especialidad', url: 'https://felgtbi-plus.onrender.com/grafico-especialidad/' }, // URL de Especialidad
    { texto: 'Orientación Sexual', url: 'https://url2.com' }, // URL de Orientación Sexual
    { texto: 'Edad', url: 'https://url3.com' }, // URL de Edad
    { texto: 'Vive en España', url: 'https://felgtbi-plus.onrender.com/pie-chart/?viven_espana=true' }, // URL de Vive en España
    { texto: 'No vive en España', url: 'https://felgtbi-plus.onrender.com/pie-chart/?viven_espana=false' }, // URL de No vive en España
    { texto: 'Categoría 6', url: 'https://url6.com' }, // URL de la Categoría 6
    { texto: 'Categoría 7', url: 'https://url7.com' }, // URL de la Categoría 7
  ];

  // Función para manejar el clic en el texto y seleccionar la URL
  const handleCategoriaClick = (url) => {
    setIframeUrl(url);
  };

  return (
    <div>
      <h1>Estadísticas</h1>
      <ul>
        {/* Generar una lista de enlaces con las categorías y sus URLs */}
        {categorias.map((categoria, index) => (
          <li
            key={index}
            onClick={() => handleCategoriaClick(categoria.url)}
            style={{ cursor: 'pointer', margin: '5px 0', color: 'blue' }}
          >
            {categoria.texto}
          </li>
        ))}
      </ul>

      {/* Pasar la URL seleccionada al componente Card */}
      <Card iframeUrl={iframeUrl} />
    </div>
  );
};

export default SideBar;

// import React, { useState } from 'react';
// import axios from 'axios';


// const SideBar = () => {


 
//   return (
//     <aside id="SideBar">
//     <h2>Estadísticas</h2>
//     <ul>
//       <h3>Especialidad</h3>
//       <li>
//         <p>Personas que viven en España</p>
//       </li>
//       <li>
//         <p>Personas que no viven en España</p>
//       </li>
//       {/* <li>
//         <p>Xbox 360</p>
//       </li>
//       <li>
//         <p>Nintendo Switch</p>
//       </li> */}
//     </ul>
//   </aside>;
//     <div>
    
//       <iframe src="https://felgtbi-plus.onrender.com/grafico-especialidad/" width="600" height="400"  style={{ border: 'none' }}></iframe>
//       <iframe src="https://felgtbi-plus.onrender.com/pie-chart/?viven_espana=true" width="600" height="400"  style={{ border: 'none' }}></iframe>
//       <iframe src="https://felgtbi-plus.onrender.com/pie-chart/?viven_espana=false" width="600" height="400"  style={{ border: 'none' }}></iframe>

//     </div> 
//   );
// };

// export default SideBar;


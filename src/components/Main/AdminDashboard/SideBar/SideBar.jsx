import React, { useState } from 'react';
import Card from './Card'; // Asegúrate de que este archivo esté en la misma carpeta o ajusta la ruta

const SideBar = () => {
  const [iframeUrl, setIframeUrl] = useState('');

  // Las 7 categorías y sus URLs correspondientes
  const categorias = [
    { texto: 'Personal sociosanitario por especialidad', url: 'https://felgtbi-plus.onrender.com/grafico-especialidad/' },
    { texto: 'Por grupos de edad', url: 'https://felgtbi-plus.onrender.com/bar-chart/' }, 
    { texto: 'Vive en España', url: 'https://felgtbi-plus.onrender.com/pie-chart/?viven_espana=true' },
    { texto: 'No vive en España', url: 'https://felgtbi-plus.onrender.com/pie-chart/?viven_espana=false' }, 
    { texto: 'Identidad de género y orientación sexual', url: 'https://felgtbi-plus.onrender.com/barras-apiladas/' }, 
    { texto: 'Por permisos de residencia', url: 'https://felgtbi-plus.onrender.com/grafico-permiso-residencia/' }, 
    { texto: 'Colectivos no lgtbiq+ (interseccionalidad)', url: 'https://felgtbi-plus.onrender.com/grafico-combinaciones//' }, 
    { texto: 'Categoría 7', url: 'https://felgtbi-plus.onrender.com/top-5-ciudades/' }, 

  ];

//   /bar-chart/ Consultas de la web por grupos de edad
// /pie-chart/  consultas por residencia en españa
// /barras-apiladas/ Consultas por I.Gen. y Or. Sex.
// /grafico-permiso-residencia/ Distribución permisos de residencia
// /grafico-combinaciones/ Consultas por colectivos no lgtbiq (interseccionalidad)
// /top-5-ciudades/ 
// /grafico-especialidad/ distribucion consultas sociosanitarias por especialidad
// /grafico-especialidad/
// /bar-chart/
// /pie-chart/
// vive_espana=true
// vive_espana=false
// /barras-apiladas/
// /grafico-permiso-residencia/
// /grafico-combinaciones/

// /top-5-ciudades/

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


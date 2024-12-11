import React from 'react';


const SideBar = ({ updateIframeUrl, updateLoading }) => {

  // Las 7 categorías y sus URLs correspondientes
  const categorias = [
    { texto: 'Por grupos de edad', url: 'https://felgtbi-plus.onrender.com/bar-chart/' }, 
    { texto: 'Orientación sexual de personas que viven en España', url: 'https://felgtbi-plus.onrender.com/pie-chart/?viven_espana=true' },
    { texto: 'Orientación sexual de personas que no viven en España', url: 'https://felgtbi-plus.onrender.com/pie-chart/?viven_espana=false' }, 
    { texto: 'Identidad de género y orientación sexual', url: 'https://felgtbi-plus.onrender.com/barras-apiladas/' }, 
    { texto: 'Por permisos de residencia', url: 'https://felgtbi-plus.onrender.com/grafico-permiso-residencia/' }, 
    { texto: 'Colectivos no lgtbiq+ (interseccionalidad)', url: 'https://felgtbi-plus.onrender.com/colectivos' },
    { texto: 'Las 5 provincias con más acceso a la web', url: 'https://felgtbi-plus.onrender.com/top-5-ciudades' },
    { texto: 'Especialidades', url: 'https://felgtbi-plus.onrender.com/grafico-ambito-laboral' },



  ];

  // (bar-chart) -Edad
  // (pie-chart) -True(viven en españa)/False(no viven en españa)
  // (barras-apiladas) -Orientacion sexual frente identidad de genero
  // (grafico-permiso-residencia)
  // (colectivos) Conteo por colectivos
  // (top-5-ciudades) 5 provincias con más acceso a la plataforma
  // (grafico-ambito-laboral)


const handleCategoriaClick = (url) => {
  updateIframeUrl(url);
};


  return (
    
    <div>
      <h1>Estadísticas</h1>
      <ul>
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
    </div>
  );
};

export default SideBar;


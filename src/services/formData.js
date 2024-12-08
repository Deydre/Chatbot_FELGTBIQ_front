import axios from 'axios';

// Envío de datos de Sociosanitario
export const sendSociosanitarioData = async (data) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://felgtbi-plus.onrender.com/submit-data-2/',
      data: { data },
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    return response; 
  } catch (error) {
    throw new Error("Error en la autenticación: " + error.message);
  }
};

// Envío de datos de No Sociosanitario
export const sendNoSociosanitarioData = async (data) => {
  try {
    const response = await axios({
        method: 'post',
        url: 'https://felgtbi-plus.onrender.com/submit-data/',
        data: { data },
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
    return response;
  } catch (error) {
    throw new Error("Error al obtener datos del administrador: " + error.message);
  }
};

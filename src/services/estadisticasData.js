import axios from 'axios';

// Función para petición axios para gráfica estadística por edad
export const getEdadData = async () => {
    try {
      const response = await axios('https://felgtbi-plus.onrender.com/prueba/', {
        withCredentials: true,
      });
      return response;
    } catch (error) {
      throw new Error("Error al obtener datos estadísticos " + error.message);
    }
  };
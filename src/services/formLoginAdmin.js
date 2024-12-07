import axios from 'axios';

// Función para el login
export const fetchHandleLogin = async (email, password) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://chatbot-felgtbiq-back.onrender.com/api/admin/login',
      data: { email, password },
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

// Función para obtener los datos de admin cuando se autentica
export const getAdminData = async () => {
  try {
    const response = await axios('https://chatbot-felgtbiq-back.onrender.com/api/admin/me', {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw new Error("Error al obtener datos del administrador: " + error.message);
  }
};

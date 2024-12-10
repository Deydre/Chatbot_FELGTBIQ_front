import axios from 'axios';

const urlLogin = 'https://felgtbi-plus.onrender.com/admin/login';
const urlGetAmin = 'https://chatbot-felgtbiq-back.onrender.com/api/admin/me';

// Función para el login
export const fetchHandleLogin = async (email, password) => {
  try {
    const response = await axios.post(urlLogin, email, password, { 
      headers: {
        'Content-Type': 'application/json',
      },
    });

    response ? console.log(response) : console.log("")
    return response; 
  } catch (error) {
    throw new Error("Error: " + error.message);
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
    throw new Error("Error al obtener datos estadísticos " + error.message);
  }
};


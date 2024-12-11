import axios from 'axios';

// const urlLogin = 'https://felgtbi-plus.onrender.com/admin/login';
const urlLoginBackFullStack = 'https://chatbot-felgtbiq-back.onrender.com/';
const urlGetAmin = 'https://chatbot-felgtbiq-back.onrender.com/api/admin/me';

// Función para el login
export const fetchHandleLogin = async (email, password) => {
  try {
    const response = await axios.post(urlLoginBackFullStack, { email, password }, { 
      headers: {
        'Content-Type': 'application/json',
      },
    });

    response ? console.log(response) : console.log("")
    return response; 
  } catch (error) {
    throw new Error("Error fetchLogin: " + error.message);
  }
};

// Función para obtener los datos de admin cuando se autentica
export const getAdminData = async () => {
  try {
    const response = await axios.post(urlGetAmin, {
        headers: {
            'Content-Type': 'application/json',
          },
    });

    response ? console.log(response) : console.log("")
    return response;
  } catch (error) {
    throw new Error("Error fetch adminData " + error.message);
  }
};


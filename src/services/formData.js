import axios from 'axios';

const urlSociosanitario = 'https://felgtbi-plus.onrender.com/submit-data-2/'
const urlNoSociosanitario = 'https://felgtbi-plus.onrender.com/submit-data/'


// Envío de datos de Sociosanitario
export const sendSociosanitarioData = async (data) => {
  try {
    const response = await axios.post(urlSociosanitario, data, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    response ? console.log(response) : console.log("")
    return response; 
  } catch (error) {
    throw new Error("Error: " + error.message);
  }
};

// Envío de datos de No Sociosanitario
export const sendNoSociosanitarioData = async (data) => {
  try {
    const response = await axios.post(urlNoSociosanitario, data, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    response ? console.log(response) : console.log("")
    return response; 
  } catch (error) {
    throw new Error("Error: " + error.message);
  }
};